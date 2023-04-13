import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";
import { DatosModificablesUsuario } from "../models/user.updatable.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

    readonly urlBaseBackend = "http://54.75.6.160:8080/api/v1/users/";

    constructor(private httpClient: HttpClient){ // Inyección de dependencias de Angular
    }

    getUsers(){
    }

    getUser(id:number){
      return this.httpClient.get(this.urlBaseBackend+id)
    }

    deleteUser(user: Usuario) {
    }
  
    updateUser(user: Usuario, datos:DatosModificablesUsuario) {
    }
  
}

