import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvolution } from '../../pages/home/interfaces';

@Component({
  selector: 'app-evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.scss']
})
export class EvolutionChainComponent implements OnInit {

  @Input() evolution: IEvolution | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log()
  }

}
