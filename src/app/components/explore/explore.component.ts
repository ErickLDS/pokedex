import { Component, OnInit } from '@angular/core';

interface IPokemon {
  type: string,
  name: string,
  img: string,
  types: Array<any>
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  public pokemons: Array<IPokemon> = [];
  private next: string = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";

  constructor() { }

  ngOnInit(): void {
    this.getDados();
  }

  async getDados() {
    let response = await fetch(this.next);
    let dados = await response.json();

    this.next = dados.next;

    dados.results.map(async (e: any) => {
      response = await fetch("https://pokeapi.co/api/v2/pokemon/"+e.name);
      let data = await response.json();

      data && data.is_default && this.pokemons.push({
        type: data.types[0].type.name,
        types: data.types,
        name: data.name, 
        img: data["sprites"]["other"]["official-artwork"]["front_default"]
      });
    })
  }
}
