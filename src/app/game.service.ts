import { Injectable } from '@angular/core';

import { Player } from './player';

@Injectable()
export class GameService {

   //Array of type Player objects
  players:Player[];
  /*dice1:number;
  dice2:number;*/
  activePlayer:number;
  gamePlaying:boolean;

  constructor() {}

  init() {
    this.players = [
      new Player("Pepe",0,0,true),
      new Player("Leisha",0,0,false)
    ];

    this.activePlayer = 0;
    this.gamePlaying = true;

    return this.players;
    //this.players[0].updateroundScore(100);

  }

  rollDice(){
    if(this.gamePlaying){
      let player = this.players[this.activePlayer];
      let dices:number[];
      /*this.dice1 = Math.floor(Math.random() * 6) + 1;
      this.dice2 = Math.floor(Math.random() * 6) + 1;*/
      dices = [Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 6) + 1];

      if(dices[0] > 1 && dices[1] > 1){
        player.updateroundScore(dices[0]+dices[1]);
      }else{
        player.roundScore = 0;
        this.nextPlayer();
      }
      return dices;
    }
  }

  hold(){
    if(this.gamePlaying){
      let player = this.players[this.activePlayer];
      let actualroundScore = this.players[this.activePlayer].roundScore;
      player.updatescore(actualroundScore);
      player.roundScore = 0;

      //Check if the player has won
      if(player.score >= 100){
        player.name = "Winner!";
        this.gamePlaying = false;
      }else{
        this.nextPlayer();
      }
    }
  }

  nextPlayer(){ 
    this.players[this.activePlayer].active = false;
    this.activePlayer === 0 ? this.activePlayer = 1 : this.activePlayer = 0; 
    this.players[this.activePlayer].active = true;
  }

  newGame(){
    this.players[0].resetScores();
    this.players[1].resetScores();
    this.players[0].active = true;
    this.players[1].active = false;
    this.activePlayer = 0;
    this.gamePlaying = true;
  }

}
