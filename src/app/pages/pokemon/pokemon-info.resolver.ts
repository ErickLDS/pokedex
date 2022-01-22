import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokeapiService } from '../../services/pokeapi.service';
import { IPokemonInfo } from '../home/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonInfoResolver implements Resolve<IPokemonInfo> {
  constructor (private pokeapiService: PokeapiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPokemonInfo> {
    let name: string = route.params.pokemon;
    return this.pokeapiService.getPokemonInfo(name.trim().toLowerCase());
  }
}
