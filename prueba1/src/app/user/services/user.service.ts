import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";

@Injectable()
export class UserService {

    getUser(id:number): Usuario{
        // TODO: Pondré la llamada al servicio web
        var usuario = new Usuario();
        usuario.id = id;
        usuario.nombre = "Ivan";
        usuario.apellidos = "Osuna";
        usuario.edad = 44;
        usuario.email = "ivan@osuna.com";
        usuario.telefono = "987654321";
        usuario.foto = "https://i.ytimg.com/vi/w8LKAJBB8-s/mqdefault.jpg";
        return usuario;
    }

    // getUsers()
    // updateUser()
    // deleteUser()
    // newUser()
}