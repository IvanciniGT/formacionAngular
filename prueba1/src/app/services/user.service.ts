import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";
import { DatosModificablesUsuario } from "../models/user.updatable.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, tap, filter, catchError } from "rxjs/operators";
import { toUsuario } from "../mappers/UsuarioMapper";

@Injectable()
export class UserService {

    readonly urlBaseBackend = "http://54.75.6.160:8080/api/v2/users/";

    constructor(private httpClient: HttpClient){ // Inyección de dependencias de Angular
    }

    getUsers(){
    }

    getUser(id:number, callback:Function = (mensaje:string) => {} ):Observable<Usuario>{                  // Transformar el Observable<any> en un Observable<Usuario>
      return this.httpClient.get<any>(this.urlBaseBackend+id)
/*
      .pipe( map(datos => {
                            console.log(datos)
                            return datos
                          }
       ) )
*/
        .pipe( catchError( (error:HttpErrorResponse)=> {
          return throwError( () => callback("Error al recuperar usuario: "+ error.message) )
                // Este me asegura que seguimos devolviendo en el pipe un Observable<Usuario>
          }
        ))
        .pipe( tap(datos =>console.log("Acabamos de recibir del backend el dato en crudo", datos) ) )
        .pipe( map(datos =>  toUsuario(datos)) ) // Lo transformo a lo que me interesa
    }

    deleteUser(user: Usuario) {
    }
  
    updateUser(user: Usuario, datos:DatosModificablesUsuario) {
    }
  
}

