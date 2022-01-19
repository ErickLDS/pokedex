import { Component } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { IPokemon } from '../card/interfaces';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  public pesquisa: string = "";
  public errorMsg: string | undefined;

  public isLoading: boolean = false;

  constructor(private pokeapiService: PokeapiService) { }

  storeValue(event: any) {
    this.pesquisa = event.target.value;
  }

  search() {
    this.isLoading = true;
    let pokemon = this.pesquisa;

    if ((this.pesquisa.trim()).length > 2) {
      this.pokeapiService.getPokemon((pokemon.trim().toLowerCase()))
      .subscribe({
        next: (data) => {
          console.log(`/${data.name}/`)
        },
        error: () => {
          this.errorMsg = `Não foi possível encontrar o Pokemon ${pokemon}`
          this.isLoading = false
          this.pesquisa = ""
        },
        complete: () => {
          this.isLoading = false
          this.pesquisa = ""
        }
      })
    }
  }

  reset() {
    this.pesquisa = "";
    this.errorMsg = "";
  }
}
