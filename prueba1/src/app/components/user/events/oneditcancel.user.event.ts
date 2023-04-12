import { Usuario } from "../../../models/user.model";
import { BaseEvent } from "./base.event";

export class OnEditCancelUserEvent extends BaseEvent {

    constructor( public user:Usuario){
        super();
    }
    
    static new(user:Usuario){
        return new OnEditCancelUserEvent(user)
    }

}