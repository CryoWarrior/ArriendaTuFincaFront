import { Usuario} from './Usuario';
import { Propiedad } from './Propiedad';

export class Alquiler {
    id!: number;
    usuarioAsignado!: Usuario; 
    propiedad!: Propiedad; 
    fechaInicio!: string; 
    fechaFin!: string;
    estado!: EstadoAlquiler;
    comentarios!: string;
}

export enum EstadoAlquiler {
    PENDIENTE,
    APROBADO,
    RECHAZADO,
    FINALIZADO
}
  