import { AtmBoxState, ATMBoxType, Card, UserType } from "./models";

class AtmBox implements ATMBoxType {
    cash: number;
    state: AtmBoxState;
    user: UserType;

    constructor () {
        this.cash = 0;
    }

    setState(state: AtmBoxState): void {
        this.setState(state);
    }

    loadCash ( cash: number ): Promise<boolean> {
        return this.state.loadCash(cash);
    }

    insertCard (card: Card): Promise<boolean> {
        return this.state.insertCard(card);
    };
    takePassword (password: string): Promise<boolean> {
        return this.state.takePassword(password);
    };
    enterCash (cash: number): Promise<boolean> {
        return this.state.enterCash(cash);
    };
    cancelTransaction (): boolean {
        return this.state.cancelTransaction();
    };
}