import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { IPokemonURL } from './interfaces';
import { PokeapiService } from "../../services/pokeapi.service";

@Injectable({
  providedIn: 'root'
})
export class PokemonsListResolver implements Resolve<IPokemonURL[]> {

  constructor(private pokeapiService: PokeapiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPokemonURL[]> {
    return this.pokeapiService.listPokemons(12, 0)
  }
}

