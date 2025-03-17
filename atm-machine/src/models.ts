export enum MachineState {
    IDLE="idle",
    CARD_INSERT="card-insert",
    PASSWORD_ENTRY="password-entry",
    AMOUNT_ENTRY="amount-entry",
    FINISH="finish",
    CANCEL="cancel",
    CASH_LOAD="cash-load"
}

export interface Card {
    id: string;
    validity: Date;
    type: string;
}

export interface UserType {
    id: string;
    name: string;
}

export interface ATMBoxType {
    cash: number;
    state: AtmBoxState;
    user: UserType;
    setState: (state: AtmBoxState) => void;
    insertCard: ( card: Card ) => Promise<boolean>;
    takePassword: ( password: string ) => Promise<boolean>;
    enterCash: ( cash: number ) => Promise<boolean>;
    cancelTransaction: () => boolean;
    loadCash: ( cash: number ) => Promise<boolean>;
}

export interface AtmBoxState {
    insertCard: ( card: Card ) => Promise<boolean>;
    takePassword: ( password: string ) => Promise<boolean>;
    enterCash: ( cash: number ) => Promise<boolean>;
    cancelTransaction: () => boolean;
    loadCash: ( cash: number ) => Promise<boolean>;
}