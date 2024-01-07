export default class {

    constructor ( name, symbol ) {
        this.id = Math.floor(Math.random() * 1000) + 999;
        this.name = name;
        this.symbol = symbol;
    }
}
