export class Usuario {
    constructor(
      public id?: number | null,
      public nombre?: string | null,
      public apellido?: string | null,
      public correo?: string | null,
      public contrasenia?: string | null,   // Campo necesario para el registro
      public edad?: number | null,          // Campo relevante para el registro
      public tipoUsuario?: number | null,   // Tipo de usuario como string (puede ser un enum)
      public comentarios?: string | null    // Campo adicional si es necesario
    ){}
  }
  