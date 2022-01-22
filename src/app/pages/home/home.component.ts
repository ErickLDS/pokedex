import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonURL } from './interfaces';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public pokemonsURL: IPokemonURL[] = this.activatedRoute.snapshot.data.pokemonsList

  public limit: number = 12;
  public offset: number = 12;

  public isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private pokeapiService: PokeapiService
  ) { }

  verMais() {
    this.isLoading = true;
    
    this.pokeapiService.listPokemons(this.limit, this.offset)
    .subscribe({
      next: (data) => {this.pokemonsURL = this.pokemonsURL.concat(data)},
      complete: () => {this.isLoading = false;}
    })

    this.offset += this.limit
  }
}
