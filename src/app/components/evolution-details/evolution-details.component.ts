import { Component, Input } from '@angular/core';
import { IEvolutionDetails } from '../../pages/home/interfaces';

@Component({
  selector: 'app-evolution-details',
  templateUrl: './evolution-details.component.html',
  styleUrls: ['./evolution-details.component.scss']
})
export class EvolutionDetailsComponent {

  @Input() evolution_details: IEvolutionDetails | undefined;

  constructor() {  }

}
