import { Usuario } from "../models/user.model"

export function toUsuario(datos:any): Usuario{
    var usuario:Usuario = {...datos}
    usuario.telefono = datos.phone
    // quitar el phone.
    // Asegurar que llegan los datos que necesito....
    return usuario
}