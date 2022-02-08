import {Routes} from "@angular/router";
import {SectionTournamentComponent} from "./app/section-tournament/section-tournament.component";
import {SectionPlayerComponent} from "./app/section-player/section-player.component";

export const appRoutes: Routes = [
  {path: 'tournament', component: SectionTournamentComponent},
  {path: 'player', component: SectionPlayerComponent},

  {path: '', redirectTo: '/tournament', pathMatch: 'full'},
]


