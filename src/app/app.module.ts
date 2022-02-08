import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionTournamentComponent } from './section-tournament/section-tournament.component';
import { SectionPlayerComponent } from './section-player/section-player.component';
import {Routes, RouterModule} from "@angular/router";
import {appRoutes} from "../routes";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionTournamentComponent,
    SectionPlayerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
