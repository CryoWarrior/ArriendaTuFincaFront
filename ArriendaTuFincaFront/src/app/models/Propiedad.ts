import { Usuario } from "./Usuario";

export class Propiedad {
    id!: number;
    nombre!: string; 
    area!: number;
    propietario!: Usuario; 
    ciudad!: string; 
    tipoIngreso!: TipoIngreso; 
    disponible!: boolean;
    tipoPropiedad!: TipoPropiedad; 
    descripcion!: string;
    cantidadHabitaciones!: number; 
    cantidadBanios!: number;
    aceptaMascotas!: boolean; 
    tienePiscina!: boolean; 
    tieneAsador!: boolean; 
    valorNoche!: number; 
}

export enum TipoPropiedad {
    FINCA,
    CASA,
    APARTAMENTO,
    TERRENO
}

export enum TipoIngreso {
    MUNICIPIO, 
    PRINCIPAL, 
    SECUNDARIA,
    TERCIARIA
}
