import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from './interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() pokemonURL: Observable<IPokemon> | undefined;

  constructor() { }

  loadImgSkeleton(event: any) {
    event.target.parentNode.classList.remove('placeholder')
  }
}
