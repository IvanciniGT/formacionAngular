import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";
import { DatosModificablesUsuario } from "../models/user.updatable.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, tap, filter, catchError } from "rxjs/operators";
import { toDatosModificablesRest, toUsuario } from "../mappers/UsuarioMapper";

@Injectable()
export class UserService {
    // CACHE !
    readonly urlBaseBackend = "http://54.75.6.160:8080/api/v2/users/";

    constructor(private httpClient: HttpClient){ // Inyección de dependencias de Angular
    }

    getUsers():Observable<Array<Usuario>>{
      return this.httpClient.get<Array<any>>(this.urlBaseBackend)
      // Transformo el resultado a lo que necesito YO
      .pipe( map(listaDatos => listaDatos.map( datos => toUsuario(datos))) ) // Lo transformo a lo que me interesa
      // Además el trámite de error necesario
    }

    getUser(id:number, callback:Function = (mensaje:string) => {} ):Observable<Usuario | null>{     
                   // Transformar el Observable<any> en un Observable<Usuario>
      
      return this.httpClient.get<any>(this.urlBaseBackend+id)
/*
      .pipe( map(datos => {
                            console.log(datos)
                            return datos
                          }
       ) )
*/
        
        .pipe( tap(datos =>console.log("Acabamos de recibir del backend el dato en crudo", datos) ) )
        .pipe( map(datos =>  toUsuario(datos)) ) // Lo transformo a lo que me interesa
        .pipe( catchError( (error:HttpErrorResponse)=> {
          console.log("Error al recuperar usuario: DESDE EL SERVICIO")
          /*
          return throwError( () => callback("Error al recuperar usuario: "+ error.message) )
                // Este me asegura que seguimos devolviendo en el pipe un Observable<Usuario>
                //callback("Error al recuperar usuario: "+ error.message)
                // Me interesa el primero
          }*/
          callback(error.message) 
          return of(null) // Genera un Observable con el valor que pongo dentro
        }
        ))
    }

    deleteUser(user: Usuario) {
      return this.httpClient.delete<any>(this.urlBaseBackend+user.id)
      .pipe( map(datos =>  toUsuario(datos)) ) // Lo transformo a lo que me interesa
      // Además el trámite de error necesario
    }
  
    updateUser(user: Usuario, datos:DatosModificablesUsuario) {
      // Preparo lo que hay que mandar de acuerdo a las necesidades del BACKEND
      var preparado = toDatosModificablesRest(datos )
      // Lo mando
      return this.httpClient.put<any>(this.urlBaseBackend+user.id, preparado)
      // Transformo el resultado a lo que necesito YO
      .pipe( map(datos =>  toUsuario(datos)) ) // Lo transformo a lo que me interesa
      // Además el trámite de error necesario
    }
  
}

