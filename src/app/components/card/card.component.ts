import { Component, Input } from '@angular/core';
import { IPokemon } from './interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() pokemons: IPokemon[] = [];

  constructor() { }

  loadImgSkeleton(event: any) {
    event.target.parentNode.classList.remove('placeholder')
  }
}
