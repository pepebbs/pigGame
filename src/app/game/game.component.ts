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
  rollingDice:boolean;

  constructor(private gameService: GameService) { }

  ngOnInit() { 
    this.players = this.gameService.init(); 
    this.showDices = false;
    this.rollingDice = true;
  }

  


  rollDice(){ 
    this.rollingDice = false;
    setTimeout(() => {
      this.dices = this.gameService.rollDice();
      this.rollingDice = true;
      this.dice1 = this.dices[0];
      this.dice2 = this.dices[1];
      this.showDices = false;
    }, 1200);
  }

  hold(){ this.gameService.hold(); }

  nextPlayer(){ this.gameService.nextPlayer(); }

  newGame(){ 
    this.gameService.newGame(); 
    this.showDices = true;
  }

}
