import { Component, Input } from '@angular/core';
import { IStatus } from '../../pages/home/interfaces';

@Component({
  selector: 'app-pokemon-status-base',
  templateUrl: './pokemon-status-base.component.html',
  styleUrls: ['./pokemon-status-base.component.scss']
})
export class PokemonStatusBaseComponent {

  @Input() status: Array<IStatus> | undefined;
  @Input() happiness: number = 0;

  constructor() { }
}
