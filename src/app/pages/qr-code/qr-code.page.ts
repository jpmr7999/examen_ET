import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage {
  qrData: string = '';  // Inicializa como vacío
  generatedQRCode: boolean = false;  // Controla la visualización del QR
  selectedSegment: string = 'generate'; // Valor por defecto del segmento
  fechaClase: string = ''; // Añade una propiedad para la fecha de la clase

  constructor(private router: Router, private alertCtrl: AlertController) {}

  // Método para validar la fecha y generar el código QR
  async validateAndGenerateQRCode() {
    const currentDate = new Date();
    const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); // Fecha actual sin hora
    
    const inputDate = new Date(this.fechaClase);
    const inputDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()); // Fecha de entrada sin hora

    // Compara las fechas sin hora
    if (inputDay < currentDay) { // Permite que la fecha sea igual o mayor a la actual
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'La fecha no puede ser anterior a la fecha actual.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Genera el código QR solo si la fecha es válida
      this.generatedQRCode = true; // Muestra el QR
      console.log('Texto para generar QR:', this.qrData); // Verifica el valor
    }
  }

  // Navega a la página de confirmación de asistencia
  goToConfirmAsistencia() {
    this.router.navigate(['/principal']);
  }

  // Lógica para escanear el código QR
  scanQRCode() {
    console.log('Escaneando código QR...');
  }
}
