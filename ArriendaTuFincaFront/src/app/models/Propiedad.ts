import { Usuario } from "./Usuario";

export class Propiedad {
    id!: number;
    area!: number;
    propietario!: Usuario; 
    direccion!: string;
    descripcion!: string;
    precio!: number;
    disponible!: boolean; 
    tipoPropiedad!: TipoPropiedad;  
}

export enum TipoPropiedad {
    FINCA,
    CASA,
    APARTAMENTO,
    TERRENO
}