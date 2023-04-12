import { Usuario } from "../models/user.model";
import { DatosModificablesUsuario } from "../models/user.updatable.model";
import { BaseEvent } from "./base.event";

export class OnDeleteUserEvent extends BaseEvent{

    constructor(public user:Usuario){
        super();
    }
    
    static new(user:Usuario){
        return new OnDeleteUserEvent(user)
    }

}