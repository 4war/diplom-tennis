import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionTournamentComponent } from './section-tournament/section-tournament.component';
import { SectionPlayerComponent } from './section-player/section-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionTournamentComponent,
    SectionPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
