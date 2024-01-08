import CellSymbols from "../CellSymbols";
import SymbolPiece from "./SymbolPiece";

export default class {

    constructor ( size ) {
        this.cells = new Array(size);
        this.#initialize(size);
        this.#printBoard();
    }

    #initialize ( size ) {
        for ( let i = 0; i < size; i++ ) {
            this.cells[i] = new Array(size).fill(new SymbolPiece(CellSymbols.SYMBOL_EMPTY));
        }
    }

    #printBoard () {
        // Print the cells
    }

    fillInCell ( symbol, cellRowIdx, cellColIdx  ) {
        
    }
}
