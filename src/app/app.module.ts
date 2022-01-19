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
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { TurnObservablePipe } from './components/list-cards/turn-observable.pipe';
import { NavbarDesktopComponent } from './components/navbar/navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from './components/navbar/navbar-mobile/navbar-mobile.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    ListCardsComponent,
    TurnObservablePipe,
    NavbarDesktopComponent,
    NavbarMobileComponent,
    SearchbarComponent
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
