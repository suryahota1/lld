import IdleState from "./IdleState";
import ProductSelectedState from "./ProductSelectedState";
import State from "./State";

export default class CoinInsertedState extends State {

    insertCoin( value ) {
        this.context.updateTotalBalance(value);
    }

    cancelInsertCoin() {
        this.context.refundExtraCoin();
        this.context.setState(new IdleState());
    }

    selectProduct () {
        this.context.setState(new ProductSelectedState());
    }
}
