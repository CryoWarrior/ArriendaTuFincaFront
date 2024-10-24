export class Usuario {
    constructor(
      public id?: number | null,
      public nombre?: string | null,
      public apellido?: string | null,
      public correo?: string | null,
      public contrasenia?: string | null,   
      public edad?: number | null,  
      public comentarios?: string | null  
    ){}
  }
  