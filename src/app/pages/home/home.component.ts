import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon, IPokemonURL } from '../../components/card/interfaces';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public pokemons: IPokemon[] = this.activatedRoute.snapshot.data.pokemons.pokemons

  public limit: number = 12;
  public offset: number = 12;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private pokeapiService: PokeapiService
  ) { }

  verMais() {
    this.pokeapiService.listPokemons(this.limit, this.offset)
    .subscribe((res) => {
      res.results.map((item: IPokemonURL) => {
        this.pokeapiService.getPokemon(item.url)
        .subscribe((data: any) => {
          this.pokemons = this.pokemons.concat(data)
        })
      })
    })

    this.offset += this.limit
  }

}
