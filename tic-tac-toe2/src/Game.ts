import { Board } from "./Board";
import { BoardType } from "./models/BoardType";
import { PlayerSymbol } from "./models/PlayerSymbol";
import { PlayerType } from "./models/PlayerType";
import { Player } from "./Player";

enum GameStatus {
    IDLE = "idle",
    INPROGRESS = "in-progress",
    FINISHED = "finish",
    PAUSED = "pause"
}

export class Game {

    board: BoardType;
    players: PlayerType[];
    status: GameStatus;
    winner: PlayerType;

    constructor ( boardSize: number, players: [{name: string, symbol: PlayerSymbol}] ) {
        if ( boardSize < 3 || players.length < 2 ) throw new Error("Invalid arguments");
        this.board = new Board(boardSize);
        this.players = players.map(({ name, symbol }) => new Player(name, symbol));
        this.status = GameStatus.IDLE;
    }

    resetGame () {
        this.status = GameStatus.INPROGRESS;
    }

    startGame (): void {
        if ( this.status !== GameStatus.IDLE ) return;
        this.status = GameStatus.INPROGRESS;
    }

    makeMove ( row: number, col: number ) {
        const currPlayer = this.players[0];
        const moveStatus = this.board.fillCell(row, col, currPlayer);
        if ( moveStatus ) {
            const isWinner = this.board.checkWinCondition(row, col);
            if ( isWinner ) {
                console.log(currPlayer.name + " won the game");
            } else if ( isWinner === null ) {
                console.log("Game is a tie");
            }
            this.players.push(this.players.shift()!);
        }
    }
}