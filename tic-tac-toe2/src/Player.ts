import { PlayerSymbol } from "./models/PlayerSymbol";
import { PlayerType } from "./models/PlayerType";

export class Player implements PlayerType {
    id: string;
    name: string;
    symbol: PlayerSymbol;
    
    constructor ( name: string, symbol: PlayerSymbol ) {
        this.name = name;
        this.symbol = symbol;
        this.id = (Math.random() * 10000 + 1000).toString();
    }
}