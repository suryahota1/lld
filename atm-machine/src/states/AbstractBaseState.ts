import { AtmBoxState, ATMBoxType, Card } from "../models";

export abstract class AbstractBaseState implements AtmBoxState {

    context: ATMBoxType;

    constructor ( context: ATMBoxType ) {
        this.context = context;
    }

    insertCard ( card: Card ): Promise<boolean> {
        throw new Error("Not supported");
    }
    takePassword ( password: string ): Promise<boolean> {
        throw new Error("Not supported");
    }
    enterCash ( cash: number ): Promise<boolean> {
        throw new Error("Not supported");
    }
    cancelTransaction (): boolean {
        throw new Error("Not supported");
    }
    loadCash ( cash: number ): Promise<boolean> {
        throw new Error("Not supported");
    }
}