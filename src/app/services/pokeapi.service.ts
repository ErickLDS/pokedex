import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListPokemons, IPokemon, IPokemonURL } from '../components/card/interfaces';

import { map } from "rxjs/operators"

const API = "https://pokeapi.co/api/v2/";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  constructor(private http: HttpClient) { }

  listPokemons(limit: number, offset: number) {
    return this.http.get<IListPokemons>(`${API}pokemon?limit=${limit}&offset=${offset}`)
    .pipe(
      map((res: IListPokemons) => res.results)
    )
  }

  getPokemonURL(pokemonURL: IPokemonURL) {
    return this.http.get<IPokemon>(pokemonURL.url)
  }

  getPokemon(id: string) {
    return this.http.get<IPokemon>(`${API}pokemon/${id}`)
  }

  getPokemonSpecies(id: string) {
    return this.http.get<IPokemon>(`${API}pokemon-species/${id}`)
  }
}
