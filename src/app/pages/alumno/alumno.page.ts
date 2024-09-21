import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage {

  constructor(private router: Router) { }

  login() {
    // Aquí iría la lógica para autenticar al usuario
    // Redirigimos a la página de confirmar asistencia
    this.router.navigate(['/confirm-asistencia']);
  }
}
