import { UserType } from "../models";
import { AbstractBaseState } from "./AbstractBaseState";
import { IdleState } from "./IdleState";

export class AmountEntryState extends AbstractBaseState {

    private updateCash ( cash: number ): boolean {
        this.context.cash -= cash;
        return true;
    }

    private validateUserAccount ( user: UserType, cash: number ): Promise<boolean> {
        return new Promise(( resolve, reject ) => {
            console.log("Validating user account details", user, cash);
            resolve(true);
        });
    }

    private validateLocalCash ( cash: number ): Promise<boolean> {
        return this.context.cash >= cash ? Promise.resolve(true) : Promise.resolve(false);
    }

    enterCash ( cash: number ): Promise<boolean> {
        return this.validateLocalCash(cash)
            .then(() => this.validateUserAccount(this.context.user, cash))
            .then(( isAvailable) => {
                if ( !isAvailable ) return false;
                this.context.setState(new IdleState(this.context));
                return this.updateCash(cash);
            })
            .catch(err => false);
    }
}