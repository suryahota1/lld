import { UserType } from "../models";
import { AbstractBaseState } from "./AbstractBaseState";
import { AmountEntryState } from "./AmountEntryState";
import { IdleState } from "./IdleState";

export class PasswordEntryState extends AbstractBaseState {

    private matchPassword ( user: UserType, password: string ): Promise<boolean> {
        return new Promise(( resolve, reject ) => {
            console.log("Current user", user);
            console.log("Password", password);
            console.log("User third party service to verify password for the user");
            resolve(true);
        })
    }

    takePassword ( password: string ): Promise<boolean> {
        return this.matchPassword(this.context.user, password).then(() => {
            this.context.setState(new AmountEntryState(this.context));
            return true;
        }).catch(err => {
            console.error("Password validation failed");
            this.context.setState(new IdleState(this.context));
            return false;
        });
    }
}