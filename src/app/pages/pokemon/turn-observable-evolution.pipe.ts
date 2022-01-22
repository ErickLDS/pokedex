import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeapiService } from '../../services/pokeapi.service';
import { IEvolution } from '../home/interfaces';

@Pipe({
  name: 'turnObservableEvolution'
})
export class TurnObservableEvolutionPipe implements PipeTransform {

  constructor(private pokeapiService: PokeapiService) {}

  transform(pokemon: string): Observable<IEvolution> {
    return this.pokeapiService.getEvolution(pokemon)
  }

}
