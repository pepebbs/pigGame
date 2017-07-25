import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ListPlayersComponent } from './list-players/list-players.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NavComponent,
    HomeComponent,
    ListPlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     { path: '', component: HomeComponent },
     { path: 'home', component: HomeComponent },
     { path: 'play', component: GameComponent },
     { path: 'players', component: ListPlayersComponent }
   ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
