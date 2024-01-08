import Board from "./Board";
import Player from "./Player";

export default class {
    
    constructor ( boardSize, playerList ) {
        this.#initializeGame( boardSize, playerList );
    }

    #initializeGame ( boardSize, playerList ) {
        this.players = [];
        this.board = new Board(boardSize);
        this.#initializePlayers(playerList);
        this.currentPlayer = this.players.shift();
        this.emptyCells = boardSize * boardSize;
        this.winningStatus = false;
    }

    #initializePlayers ( playerList ) {
        for ( let i = 0; i < playerList.length; i++ ) {
            this.players.push(new Player(...playerList[i]));
        }
    }

    putSymbolInCell ( rowIdx, colIdx ) {
        try {
            if ( !this.emptyCells || this.winningStatus ) return;
            this.board.fillInCell(this.currentPlayer, rowIdx, colIdx);
            this.emptyCells--;
            this.winningStatus = this.#evaluateMove(rowIdx, colIdx);
            if ( this.winningStatus ) console.log(this.currentPlayer.name + " wins the game");
            else if ( this.emptyCells === 0 ) console.log("Game tied");
            else {
                this.players.push(this.currentPlayer);
                this.currentPlayer = this.players.shift();
            }
        } catch ( e ) {
            console.log("putSymbolInCell e", e);
        }
    }

    #evaluateMove ( rowIdx, colIdx ) {
        // Check row if true return true
        // Check col if true return true
        // Check left diagonal if true return true
        // Check right diagonal if true return true
        // else return false
    }
}
