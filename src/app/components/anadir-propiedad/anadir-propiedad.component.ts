import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropiedadService } from '../../services/propiedad/propiedad.service';
import { Propiedad, TipoPropiedad, TipoIngreso } from '../../models/Propiedad';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-anadir-propiedad',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, CommonModule, HeaderComponent, FooterComponent],
    templateUrl: './anadir-propiedad.component.html',
    styleUrls: ['./anadir-propiedad.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AnadirPropiedadComponent implements OnInit {
    propiedadForm: FormGroup;
    mensaje: string = '';
    mensajeColor: string = '';

    // Opciones para los selects
    tipoPropiedadOptions = Object.keys(TipoPropiedad)
        .filter((key) => isNaN(Number(key))) // Filtra solo las claves que son strings, no números
        .map((key) => ({ valor: TipoPropiedad[key as keyof typeof TipoPropiedad], nombre: key }));

    tipoIngresoOptions = Object.keys(TipoIngreso)
        .filter((key) => isNaN(Number(key))) // Filtra solo las claves que son strings, no números
        .map((key) => ({ valor: TipoIngreso[key as keyof typeof TipoIngreso], nombre: key }));

    constructor(private fb: FormBuilder, private propiedadService: PropiedadService, private usuarioService: UsuarioService, private router: Router) {
        this.propiedadForm = this.fb.group({
            nombre: ['', Validators.required],
            area: ['', [Validators.required, Validators.min(1)]],
            propietario: [null, [Validators.required]],
            ciudad: ['', Validators.required],
            tipoIngreso: [null, Validators.required],
            disponible: [false],
            tipoPropiedad: [null, Validators.required],
            descripcion: ['', Validators.required],
            cantidadHabitaciones: [1, [Validators.required, Validators.min(1)]],
            cantidadBanios: [1, [Validators.required, Validators.min(1)]],
            aceptaMascotas: [false],
            tienePiscina: [false],
            tieneAsador: [false],
            valorNoche: [1, [Validators.required, Validators.min(1)]]
        });
    }

    ngOnInit(): void {
        const propietarioActual = this.usuarioService.getUsuarioActual();
        console.log('Propietario actual:', propietarioActual); // Verificar si existe un usuario actual
        this.propiedadForm.patchValue({ propietario: propietarioActual });

        // Observa el estado del formulario y cada campo
        this.propiedadForm.statusChanges.subscribe(status => {
            console.log('Estado del formulario:', status);
        });
    }

    anadirPropiedad() {
        if (this.propiedadForm.valid) {
            const propietarioActual = this.usuarioService.getUsuarioActual();

            if (!propietarioActual) {
                console.error('No hay un propietario actual en sesión.');
                this.mensaje = 'Error: No hay un propietario actual en sesión.';
                this.mensajeColor = 'red';
                return;
            }

            const nuevaPropiedad: Propiedad = new Propiedad(
                null,  // id
                this.propiedadForm.value.nombre,
                this.propiedadForm.value.area,
                propietarioActual,
                this.propiedadForm.value.ciudad,
                this.propiedadForm.value.tipoIngreso,
                this.propiedadForm.value.disponible,
                this.propiedadForm.value.tipoPropiedad,
                this.propiedadForm.value.descripcion,
                this.propiedadForm.value.cantidadHabitaciones,
                this.propiedadForm.value.cantidadBanios,
                this.propiedadForm.value.aceptaMascotas,
                this.propiedadForm.value.tienePiscina,
                this.propiedadForm.value.tieneAsador,
                this.propiedadForm.value.valorNoche
            );

            this.propiedadService.crearPropiedad(nuevaPropiedad).subscribe({
                next: (propiedad: Propiedad) => {
                    console.log('Propiedad añadida correctamente:', propiedad);
                    this.mensaje = 'Propiedad añadida correctamente';
                    this.mensajeColor = 'green';
                    this.propiedadForm.reset();
                    setTimeout(() => this.router.navigate(['/mispropiedades']), 2000);
                },
                error: (error) => {
                    console.error('Error al añadir propiedad:', error);
                    this.mensaje = 'Error al añadir la propiedad';
                    this.mensajeColor = 'red';
                }
            });
        } else {
            console.log('Formulario inválido. Verifica los campos.');
            this.mensaje = 'Por favor, complete todos los campos correctamente';
            this.mensajeColor = 'red';
        }
    }
}
