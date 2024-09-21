import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';  // Importa AlertController

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage {

  constructor(private router: Router, private alertController: AlertController) { }

  login() {
    // Aquí iría la lógica para autenticar al usuario
    this.router.navigate(['/confirm-asistencia']);  // Redirigimos a la página de confirmar asistencia
  }

  async resetPassword() {
    // Mostrar un mensaje de que el correo de restablecimiento ha sido enviado
    const alert = await this.alertController.create({
      header: 'Reestablecer Contraseña',
      message: 'Se ha enviado un correo para restablecer tu contraseña.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
