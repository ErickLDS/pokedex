import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { IListPokemons } from './interfaces';
import { PokeapiService } from "../../services/pokeapi.service";

@Injectable({
  providedIn: 'root'
})
export class PokemonsResolver implements Resolve<IListPokemons> {

  constructor(private pokeapiService: PokeapiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IListPokemons> {
    return this.pokeapiService.listPokemonsResolver(12, 0)
  }
}

