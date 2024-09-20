import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fecha-asistencia',
  templateUrl: './fecha-asistencia.page.html',
  styleUrls: ['./fecha-asistencia.page.scss'],
})
export class FechaAsistenciaPage {
  selectedDate: string = ''; // Inicialización con cadena vacía

  constructor(private navCtrl: NavController) {}

  onDateSelected(event: any) {
    this.selectedDate = event.detail.value; // Obtener la fecha seleccionada
  }

  confirmarAsistencia() {
    if (this.selectedDate) {
      console.log('Asistencia marcada para la fecha:', this.selectedDate);
      // Navegar a la página del código QR después de seleccionar la fecha
      this.navCtrl.navigateForward('/qr-code');
    } else {
      console.log('Por favor selecciona una fecha.');
    }
  }
}
