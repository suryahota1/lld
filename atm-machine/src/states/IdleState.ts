import { Card, UserType } from "../models";
import { AbstractBaseState } from "./AbstractBaseState";
import { CardInsertState } from "./CardInsertState";
import { LoadCashState } from "./LoadCashState";

class User implements UserType {
    id: string;
    name: string;

    constructor ( name: string ) {
        this.id = (Math.random() * 1000 + 100).toString();
        this.name = name;
    }
}

export class IdleState extends AbstractBaseState {

    private async validateCardDetails ( card: Card ): Promise<UserType> {
        console.log("Using trhird party service to validate card details");
        return new User("Random");
    }

    async loadCash ( cash: number ): Promise<boolean> {
        this.context.setState(new LoadCashState(this.context));
        return new Promise(( resolve, reject ) => {
            console.log("Will take some time and load cash");
            this.context.cash += cash;
            setTimeout(() => {
                this.context.setState(this);
                resolve(true);
            }, 3500);
        });
    }

    insertCard ( card: Card ): Promise<boolean> {
        return new Promise(( resolve, reject ) => {
            console.log("Inserting card while in idel state");
            this.context.setState(new CardInsertState(this.context));
            this.validateCardDetails(card).then(resp => {
                this.context.user = resp;
                resolve(true);
            }).catch(err => {
                console.error("Card validation failed");
                this.context.setState(this);
                resolve(false);
            })
        });
    }
}