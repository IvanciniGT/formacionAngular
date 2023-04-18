import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class CustomValidations{

    static telefono(formControl: AbstractControl) : ValidationErrors | null {
        var salida = Validators.pattern("^[+]?[0-9-]+$")(formControl) //|| {}
        //if (!salida){
            let valorActual:string = formControl.value
            if(valorActual.length>12) 
                salida = { ...salida, "telefono2": true }
        //}
        return salida
    }

}

export function validacionTelefono(formControl: AbstractControl) : ValidationErrors | null {
    var salida = Validators.pattern("^[+]?[0-9-]+$")(formControl)
    if (!salida){
        let valorActual:string = formControl.value
        if(valorActual.length>12) 
            salida = {"telefono2": true}
    }
    return salida
}
export const validacionTelefono2 = (formControl: AbstractControl) => {
    var salida = Validators.pattern("^[+]?[0-9-]+$")(formControl)
    if (!salida){
        let valorActual:string = formControl.value
        if(valorActual.length>12) 
            salida = {"telefono2": true}
    }
    return salida
}