import Board from "./Board";
import Dice from "./Dice";
import Player from "./Player";

class Game {

    player;
    lastPlayer;
    board;
    dice;
    #winner;

    constructor () {
        this.player = null;
        this.#addPlayers([{name: "Surya"}, {name: "Sashi"}, {name: "Nishi"}]);
        this.board = new Board(10, 10);
        this.dice = [ new Dice(1, 6) ];
        this.#winner = null
    }

    #addPlayers ( playerList ) {
        playerList.forEach((val, idx) => {
            const player = new Player(val.name, 0);
            if ( idx === 0 ) {
                this.lastPlayer = this.player = player;
            } else {
                this.lastPlayer.next = player;
                this.lastPlayer = player;
            }
        });
    }

    async startGame () {
        try {
            while ( this.#winner === null ) {
                console.log("This is " + this.player.info.name + "'s turn");
                const playerDiceCount = this.#rollDice();
                console.log("playerDiceCount", playerDiceCount);
                const playerFinalPosition = this.board.movePosition(this.player.info.position, playerDiceCount);
                console.log("playerFinalPosition", playerFinalPosition);
                const isPlayerWinner = this.board.checkIfPlayerWinner(playerFinalPosition);
                if ( isPlayerWinner ) {
                    console.log(this.player.info.name + " won the game");
                } else {
                    const nextPlayer = this.player.next;
                    if ( nextPlayer ) {
                        this.player.next = null;
                        this.lastPlayer.next = this.player;
                        this.lastPlayer = nextPlayer;
                    }
                }
            }
        } catch ( e ) {
            console.log("Some error occured, exiting now");
        }
    }

    async #rollDice () {
        try {
            const promArr = this.dice.map(( die ) => die.rollDice());
            return await Promise.all(promArr).then(( ...resp ) => {
                return resp.reduce(( prev, curr ) => {
                    return prev + curr;
                }, 0);
            });
        } catch ( e ) {
            throw e;
        }
    }
}

const game = new Game();
game.startGame();

export default Game;