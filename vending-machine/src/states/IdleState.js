import State from "./State";

export default class IdleState extends State {
    insertCoin( value ) {
        this.context.updateTotalBalance(value);
    }
}
