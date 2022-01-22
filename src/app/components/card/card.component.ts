import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemonData } from '../../pages/home/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() pokemonURL: Observable<IPokemonData> | undefined;

  constructor() { }

  redirect(name: string) {
    window.location.href = "/pokemon/"+name;
  }
}
