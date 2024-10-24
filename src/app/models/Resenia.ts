export interface Resenia {
    id: number;
    usuarioCalificadorId: {
      id: number;
      nombre: string;
      apellido: string;
    };
    usuarioObjetivoId: {
      id: number;
      nombre: string;
      apellido: string;
    } | null; // Puede ser null si la reseña es para una propiedad
    propiedadObjetivoId: {
      id: number;
      nombre: string;
    } | null; // Puede ser null si la reseña es para un usuario
    calificacion: number;
    comentario: string;
  }
  