import CellSymbols from "../CellSymbols";

export default class {

    constructor ( char ) {
        this.char = char;
    }

    isEmpty () {
        return this.char === CellSymbols.SYMBOL_EMPTY;
    }
}
