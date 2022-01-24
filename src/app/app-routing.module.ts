import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListResolver } from './pages/home/pokemons-list.resolver';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonDataResolver } from './pages/pokemon/pokemon-data.resolver';
import { PokemonInfoResolver } from './pages/pokemon/pokemon-info.resolver';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    resolve: {
      pokemonsList: PokemonsListResolver
    }
  },
  {
    path: "pokemon/:pokemon",
    component: PokemonComponent,
    resolve: {
      pokemonData: PokemonDataResolver,
      pokemonInfo: PokemonInfoResolver
    }
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
