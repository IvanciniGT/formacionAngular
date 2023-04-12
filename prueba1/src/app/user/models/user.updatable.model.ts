export class DatosModificablesUsuario {
    telefono!: string;
    email!: string;
/*
    constructor(public telefono: string, public email: string){
    }
    */

    static new(){
        return new DatosModificablesUsuario();
    }

    setTelefono(telefono: string):DatosModificablesUsuario {
        this.telefono=telefono
        return this;
    }
    setEmail(email: string):DatosModificablesUsuario {
        this.email=email
        return this;
    }
}

