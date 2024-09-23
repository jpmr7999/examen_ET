import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-asistencia',
  templateUrl: './confirm-asistencia.page.html',
  styleUrls: ['./confirm-asistencia.page.scss'],
})
export class ConfirmAsistenciaPage {

  constructor(private router: Router, private toastController: ToastController) { }

  async confirmarAsistencia() {
    // Lógica para confirmar asistencia aquí
    console.log('Asistencia confirmada');

    // Mostrar el toast de confirmación
    const toast = await this.toastController.create({
      message: 'Tu asistencia ha sido confirmada exitosamente.',
      duration: 2000, // Duración en milisegundos
      position: 'top' // Posición del toast
    });
    toast.present();

    // Redirigir a la página de inicio después de un pequeño retraso
    setTimeout(() => {
      this.router.navigate(['/alumno-principal']);
    }, 2000); // Esperar 2 segundos antes de redirigir
  }

  cancelar() {
    this.router.navigate(['/alumno-principal']);
  }
}
