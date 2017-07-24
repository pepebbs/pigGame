export class Player {

    name:string;
    score:number;
    roundScore:number;
    active:boolean;

    constructor(name:string, score:number, roundScore:number, active:boolean){
        this.name = name;
        this.roundScore = roundScore;
        this.score = score;
        this.active = active;
    }

    updateroundScore(roundScore){ this.roundScore += roundScore; }

    updatescore(score){ this.score += score; }

    resetScores(){
        this.roundScore = 0;
        this.score = 0; 
    }

}
