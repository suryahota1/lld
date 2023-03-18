import Cell from "./Cell";

class Board {

    #cells;

    constructor ( rows, columns ) {
        this.#cells = [];
        this.#initializeBoard(rows, columns);
    }

    #initializeBoard ( rows, columns ) {
        for ( let i = 0; i < rows * columns; i++ ) {
            this.#cells.push(new Cell(i));
        }
    }

    #getFinalPosition ( newPos ) {
        const jump = this.#cells[newPos].getJump();
        if ( jump === null ) return newPos;
        return this.#getFinalPosition(jump.end);
    }

    movePosition ( currPosition, diceCount ) {
        return this.#getFinalPosition(currPosition + diceCount);
    }
}

export default Board;
