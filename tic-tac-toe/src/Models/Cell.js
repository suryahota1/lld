export default class {

    constructor ( symbol ) {
        this.symbol = symbol;
    }

    #isEmpty () {
        return this.symbol.isEmpty();
    }

    putSymbol ( symbol ) {
        if ( this.#isEmpty() ) this.symbol = symbol;
        else throw new Error("Cell is already filled");
    }
}