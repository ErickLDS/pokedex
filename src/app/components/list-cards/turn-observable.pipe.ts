import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeapiService } from '../../services/pokeapi.service';
import { IPokemon, IPokemonURL } from '../card/interfaces';

@Pipe({
  name: 'turnObservable'
})
export class TurnObservablePipe implements PipeTransform {

  constructor(private pokeapiService: PokeapiService) {}

  transform(pokemon: IPokemonURL): Observable<IPokemon> {
    return this.pokeapiService.getPokemonURL(pokemon)
  }

}
