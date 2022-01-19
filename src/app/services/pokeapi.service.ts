import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListPokemons, IPokemon } from '../components/card/interfaces';

import { tap} from "rxjs/operators"

const API = "https://pokeapi.co/api/v2/";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  constructor(private http: HttpClient) { }

  listPokemonsResolver(limit: number, offset: number) {
    return this.http.get<IListPokemons>(`${API}pokemon?limit=${limit}&offset=${offset}`)
    .pipe(
      tap((res: IListPokemons) => res),
      tap((res: IListPokemons) => {
        res.pokemons = [];
        res.results.map((item: any) => {
          this.getPokemon(item.url).subscribe(
            data => data.is_default && res.pokemons.push(data)
          )
        })
      })
    )
  }

  listPokemons(limit: number, offset: number) {
    return this.http.get<IListPokemons>(`${API}pokemon?limit=${limit}&offset=${offset}`)
  }

  getPokemon(url: string) {
    return this.http.get<IPokemon>(url)
  }
  
}
