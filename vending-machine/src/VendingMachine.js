import IdleState from "./states/IdleState";

class VendingMachine {

    state;
    totalBalance;
    inventory;

    constructor () {
        this.state = new IdleState();
        this.state.setContext(this);
        this.totalBalance = 0;
    }

    setState ( state ) {
        this.state = state;
        this.state.setContext(this);
    }

    updateTotalBalance ( balance ) {
        this.totalBalance += balance;
    }

    refundExtraCoin () {
        console.log("Refunding " + this.totalBalance + " bucks");
        this.totalBalance = 0;
    }

    insertCoin ( value ) {
        this.state.insertCoin(value);
    }

    cancelInsertCoin () {
        this.state.cancelInsertCoin();
    }

    selectProduct () {
        this.state.selectProduct();
    }

    chooseProduct ( slot ) {
        this.state.chooseProduct(slot);
    }

    getProductAtSlot ( slot ) {

    }
}