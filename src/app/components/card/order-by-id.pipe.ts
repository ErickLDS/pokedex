import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from './interfaces';

@Pipe({
  name: 'orderById'
})
export class OrderByIdPipe implements PipeTransform {

  transform(pokemons: IPokemon[]) {
    return pokemons.sort((a: IPokemon, b: IPokemon) => {
      if (a.id > b.id) { return 1 }
      if (a.id < b.id) { return -1 }
      return 0
    });
  }
}
