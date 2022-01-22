import { Component } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

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
      this.pokeapiService.getPokemonData((pokemon.trim().toLowerCase()))
      .subscribe({
        next: () => {
          this.pokeapiService.getPokemonInfo((pokemon.trim().toLowerCase()))
          .subscribe({
            next: () => {window.location.href = "/pokemon/"+pokemon},
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
        },
        error: () => {
          this.errorMsg = `Não foi possível encontrar o Pokemon ${pokemon}`
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
