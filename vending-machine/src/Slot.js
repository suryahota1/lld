export default class Slot {

    sNo;
    product;

    constructor ( sNo ) {
        this.sNo = sNo;
    }

    addProduct ( product ) {
        this.product = product;
    }
}
