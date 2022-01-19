import { Component, Input, OnInit } from '@angular/core';
import { IPokemonURL } from '../card/interfaces';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent {

  @Input() pokemonsURL: IPokemonURL[] = [];

  constructor() { }

}
