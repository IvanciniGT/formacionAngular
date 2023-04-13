import { Usuario } from "../models/user.model"
import { DatosModificablesUsuario } from "../models/user.updatable.model"

export function toUsuario(datos:any): Usuario{
    var usuario:Usuario = {...datos}
    usuario.telefono = datos.phone
    // quitar el phone.
    // Asegurar que llegan los datos que necesito....
    return usuario
}

export function toDatosModificablesRest(datos:DatosModificablesUsuario): any{
    var usuario:any = {...datos}
    usuario.phone = datos.telefono
    // quitar el phone.
    // Asegurar que llegan los datos que necesito....
    return usuario
}