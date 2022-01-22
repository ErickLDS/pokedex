import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvolution, IListPokemons, IPokemonData, IPokemonInfo, IPokemonURL } from '../pages/home/interfaces';

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
    return this.http.get<IPokemonData>(`${API}pokemon/${pokemonURL.name}`)
  }

  getPokemonData(id: string) {
    return this.http.get<IPokemonData>(`${API}pokemon/${id}`)
  }

  getPokemonInfo(id: string) {
    return this.http.get<IPokemonInfo>(`${API}pokemon-species/${id}`)
  }

  getEvolution(url: string) {
    return this.http.get<IEvolution>(url)
  }
}
