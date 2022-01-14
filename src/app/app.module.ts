import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
