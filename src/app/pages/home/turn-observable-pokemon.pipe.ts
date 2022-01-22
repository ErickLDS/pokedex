import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeapiService } from '../../services/pokeapi.service';
import { IPokemonData, IPokemonURL } from './interfaces';

@Pipe({
  name: 'turnObservablePokemon'
})
export class TurnObservablePokemonPipe implements PipeTransform {

  constructor(private pokeapiService: PokeapiService) {}

  transform(pokemon: IPokemonURL): Observable<IPokemonData> {
    return this.pokeapiService.getPokemonURL(pokemon)
  }

}
