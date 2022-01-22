import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonData, IPokemonInfo, IPokemonURL } from '../home/interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  public pokemonData: IPokemonData = this.activatedRoute.snapshot.data.pokemonData
  public pokemonInfo: IPokemonInfo = this.activatedRoute.snapshot.data.pokemonInfo

  public pokemonHabitat: string = this.pokemonInfo.habitat ? (`/assets/images/habitats/${this.pokemonInfo.habitat.name}.png`) : `/assets/images/habitats/null.png`
  public pokemonGen: string = this.pokemonInfo.generation.url.split("/")[6];
  public pokemonEvolution: string = this.pokemonInfo.evolution_chain.url;
  public pokemonMega: Array<IPokemonURL> = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.pokemonInfo.varieties.map((item: any): any => {
      if (item.pokemon.name.split("-").includes("mega")) {
        this.pokemonMega.push(<IPokemonURL>item.pokemon);
      }
    });
  }
}
