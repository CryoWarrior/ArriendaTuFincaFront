import { Usuario } from "./Usuario";

export class Propiedad {
    constructor(
        public id?: number | null,
        public nombre?: string | null,
        public area?: number | null,
        public propietario?: Usuario,
        public ciudad?: string | null,
        public tipoIngreso?: TipoIngreso | null,
        public disponible?: boolean | null,
        public tipoPropiedad?: TipoPropiedad | null,
        public descripcion?: string | null,
        public cantidadHabitaciones?: number | null,
        public cantidadBanios?: number | null,
        public aceptaMascotas?: boolean | null,
        public tienePiscina?: boolean | null,
        public tieneAsador?: boolean | null,
        public valorNoche?: number | null
    ) { }
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
