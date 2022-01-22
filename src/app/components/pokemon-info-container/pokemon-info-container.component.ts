import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-info-container',
  templateUrl: './pokemon-info-container.component.html',
  styleUrls: ['./pokemon-info-container.component.scss']
})
export class PokemonInfoContainerComponent {

  @Input() titulo: string = "";

  constructor() { }

}
