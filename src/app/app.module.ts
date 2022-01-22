import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';

import { IconsModule } from './icons/icons.module';
import { CardComponent } from './components/card/card.component';
import { TurnObservablePokemonPipe } from './pages/home/turn-observable-pokemon.pipe';
import { NavbarDesktopComponent } from './components/navbar/navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from './components/navbar/navbar-mobile/navbar-mobile.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { EvolutionChainComponent } from './components/evolution-chain/evolution-chain.component';
import { TurnObservableEvolutionPipe } from './pages/pokemon/turn-observable-evolution.pipe';
import { PokemonInfoContainerComponent } from './components/pokemon-info-container/pokemon-info-container.component';
import { EvolutionDetailsComponent } from './components/evolution-details/evolution-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    TurnObservablePokemonPipe,
    NavbarDesktopComponent,
    NavbarMobileComponent,
    SearchbarComponent,
    PokemonComponent,
    EvolutionChainComponent,
    TurnObservableEvolutionPipe,
    PokemonInfoContainerComponent,
    EvolutionDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
