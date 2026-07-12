import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Inscripcion {
  nombre: string;
  rutina: string;
  horario: string;
  email: string;
}

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {

  nombre: string = '';
  rutina: string | null = null;
  horario: string | null = null;
  email: string = '';

  datosGuardados: Inscripcion | null = null;

  private rutinas: { [key: string]: string } = {
    musculacion: 'Musculación',
    cardio: 'Cardio',
    crossfit: 'Crossfit',
    funcional: 'Entrenamiento Funcional',
    yoga: 'Yoga'
  };

  private horarios: { [key: string]: string } = {
    manana: 'Mañana (07:00 - 11:00)',
    tarde: 'Tarde (14:00 - 18:00)',
    noche: 'Noche (18:00 - 22:00)'
  };

  ngOnInit() {
    const data = localStorage.getItem('formulario');
    if (data) {
      this.datosGuardados = JSON.parse(data);
    }
  }

  enviar(form: NgForm) {
    if (form.invalid) return;

    const datos: Inscripcion = {
      nombre: this.nombre,
      rutina: this.rutina!,
      horario: this.horario!,
      email: this.email
    };

    // Guardar en localStorage
    localStorage.setItem('formulario', JSON.stringify(datos));

    // Mostrar en pantalla
    this.datosGuardados = datos;

    form.resetForm();
  }

  etiquetaRutina(valor: string): string {
    return this.rutinas[valor] ?? valor;
  }

  etiquetaHorario(valor: string): string {
    return this.horarios[valor] ?? valor;
  }
}