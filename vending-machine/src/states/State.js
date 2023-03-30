export default class State {

    context;

    setContext ( context ) {
        this.context = context;
    }

    insertCoin() {
        throw new Error("Inserting coin is not available");
    }

    cancelInsertCoin() {
        throw new Error("Canceling inserted coin is not available");
    }

    selectProduct() {
        throw new Error("Selecting product is not available");
    }

    chooseProduct() {
        throw new Error("Choosing product is not available");
    }

    cancelSelectProduct() {
        throw new Error("Canceling selected product is not available");
    }

    dispenseProduct() {
        throw new Error("Dispensing product is not available");
    }
}
