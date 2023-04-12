import { DatosModificablesUsuario } from "./user.updatable.model";

export class Usuario extends DatosModificablesUsuario{
    nombre!: string;
    apellidos!: string;
    id!: number;
    foto!: string;
    edad!: number;
}

