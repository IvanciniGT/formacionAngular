import { Usuario } from "../../../models/user.model";
import { DatosModificablesUsuario } from "../../../models/user.updatable.model";
import { BaseEvent } from "./base.event";

export class OnUpdatedUserEvent extends BaseEvent{

    constructor(public user:Usuario, public newInfo:DatosModificablesUsuario){
        super();
    }
    
    static new(user:Usuario, nuevosDatos:DatosModificablesUsuario){
        return new OnUpdatedUserEvent(user, nuevosDatos)
    }

}