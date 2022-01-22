import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { IPokemonData } from '../home/interfaces';
import { PokeapiService } from '../../services/pokeapi.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataResolver implements Resolve<IPokemonData> {
  constructor (private pokeapiService: PokeapiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPokemonData> {
    let name: string = route.params.pokemon;
    return this.pokeapiService.getPokemonData(name.trim().toLowerCase())
  }
}
