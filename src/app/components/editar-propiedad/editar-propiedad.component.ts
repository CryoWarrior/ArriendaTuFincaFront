import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropiedadService } from '../../services/propiedad/propiedad.service';
import { Propiedad, TipoIngreso, TipoPropiedad } from '../../models/Propiedad';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-editar-propiedad',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, FooterComponent],
    templateUrl: './editar-propiedad.component.html',
    styleUrls: ['./editar-propiedad.component.css']
})
export class EditarPropiedadComponent implements OnInit {
    propiedadForm: FormGroup;
    propiedadId: number = 0;
    mensaje: string = '';
    mensajeColor: string = '';

    tipoPropiedadOptions = Object.keys(TipoPropiedad)
        .filter((key) => isNaN(Number(key)))
        .map((key) => ({ valor: TipoPropiedad[key as keyof typeof TipoPropiedad], nombre: key }));

    tipoIngresoOptions = Object.keys(TipoIngreso)
        .filter((key) => isNaN(Number(key)))
        .map((key) => ({ valor: TipoIngreso[key as keyof typeof TipoIngreso], nombre: key }));

    constructor(
        private fb: FormBuilder,
        private propiedadService: PropiedadService,
        private usuarioService: UsuarioService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.propiedadForm = this.fb.group({
            nombre: ['', Validators.required],
            area: ['', [Validators.required, Validators.min(1)]],
            propietario: [null, Validators.required],
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
        this.route.params.subscribe(params => {
            this.propiedadId = +params['id'];
            this.loadPropiedad(this.propiedadId);
        });


        const propietarioActual = this.usuarioService.getUsuarioActual();
        console.log('Propietario actual:', propietarioActual);
        this.propiedadForm.patchValue({ propietario: propietarioActual });
    }

    loadPropiedad(propiedadId: number): void {
        this.propiedadService.getInfoPropiedadById(propiedadId).subscribe({
            next: (propiedad: Propiedad) => {
                if (propiedad) {
                    this.propiedadForm.patchValue({
                        nombre: propiedad.nombre,
                        area: propiedad.area,
                        ciudad: propiedad.ciudad,
                        tipoIngreso: propiedad.tipoIngreso,
                        disponible: propiedad.disponible,
                        tipoPropiedad: propiedad.tipoPropiedad,
                        descripcion: propiedad.descripcion,
                        cantidadHabitaciones: propiedad.cantidadHabitaciones,
                        cantidadBanios: propiedad.cantidadBanios,
                        aceptaMascotas: propiedad.aceptaMascotas,
                        tienePiscina: propiedad.tienePiscina,
                        tieneAsador: propiedad.tieneAsador,
                        valorNoche: propiedad.valorNoche
                    });
                }
            },
            error: (err) => {
                console.error('Error al cargar la propiedad', err);
            }
        });
    }

    actualizarPropiedad(): void {
        if (this.propiedadForm.valid) {
            const propietarioActual = this.usuarioService.getUsuarioActual();

            if (!propietarioActual) {
                console.error('No hay un propietario actual en sesión.');
                this.mensaje = 'Error: No hay un propietario actual en sesión.';
                this.mensajeColor = 'red';
                return;
            }

            const propiedadActualizada: Propiedad = {
                id: this.propiedadId,
                nombre: this.propiedadForm.value.nombre,
                area: this.propiedadForm.value.area,
                propietario: propietarioActual,
                ciudad: this.propiedadForm.value.ciudad,
                tipoIngreso: this.propiedadForm.value.tipoIngreso,
                disponible: this.propiedadForm.value.disponible,
                tipoPropiedad: this.propiedadForm.value.tipoPropiedad,
                descripcion: this.propiedadForm.value.descripcion,
                cantidadHabitaciones: this.propiedadForm.value.cantidadHabitaciones,
                cantidadBanios: this.propiedadForm.value.cantidadBanios,
                aceptaMascotas: this.propiedadForm.value.aceptaMascotas,
                tienePiscina: this.propiedadForm.value.tienePiscina,
                tieneAsador: this.propiedadForm.value.tieneAsador,
                valorNoche: this.propiedadForm.value.valorNoche
            };

            console.log('Datos enviados:', propiedadActualizada);

            this.propiedadService.putPropiedadPorID(this.propiedadId, propiedadActualizada).subscribe({
                next: () => {
                    this.mensaje = 'Propiedad actualizada correctamente';
                    this.mensajeColor = 'green';
                    setTimeout(() => this.router.navigate(['/mispropiedades']), 2000);
                },
                error: (err) => {
                    console.error('Error al actualizar la propiedad', err);
                    this.mensaje = 'Error al actualizar la propiedad';
                    this.mensajeColor = 'red';
                }
            });
        } else {
            this.mensaje = 'Por favor, complete todos los campos correctamente';
            this.mensajeColor = 'red';
        }
    }

}

