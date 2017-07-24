import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Player } from '../player';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})
export class GameComponent implements OnInit {

  players:Player[];
  dices:number[];
  dice1:number;
  dice2:number;
  showDices:boolean;

  constructor(private gameService: GameService) { }

  ngOnInit() { 
    this.players = this.gameService.init(); 
    this.showDices = false;
  }

  rollDice(){ 
    this.dices = this.gameService.rollDice(); 
    this.dice1 = this.dices[0];
    this.dice2 = this.dices[1];
    this.showDices = false;
  }

  hold(){ this.gameService.hold(); }

  nextPlayer(){ this.gameService.nextPlayer(); }

  newGame(){ 
    this.gameService.newGame(); 
    this.showDices = true;
  }

}
