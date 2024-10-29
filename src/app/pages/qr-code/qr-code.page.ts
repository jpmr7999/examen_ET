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
    // Restamos un día a la fecha actual para permitir el día anterior
    const currentDateMinusOne = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);

    const inputDate = new Date(this.fechaClase);

    // Formateamos las fechas en formato DD-MM-YYYY solo para mostrar en consola si es necesario
    const currentDateStr = `${currentDateMinusOne.getDate().toString().padStart(2, '0')}-${(currentDateMinusOne.getMonth() + 1).toString().padStart(2, '0')}-${currentDateMinusOne.getFullYear()}`;
    const inputDateStr = `${inputDate.getDate().toString().padStart(2, '0')}-${(inputDate.getMonth() + 1).toString().padStart(2, '0')}-${inputDate.getFullYear()}`;

    console.log('Fecha actual (permitiendo el día anterior):', currentDateStr);
    console.log('Fecha ingresada:', inputDateStr);

    // Comparamos permitiendo el día anterior
    if (inputDate < currentDateMinusOne) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'La fecha no puede ser anterior al día anterior a la fecha actual.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      this.generatedQRCode = true;
      console.log('Texto para generar QR:', this.qrData);
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
