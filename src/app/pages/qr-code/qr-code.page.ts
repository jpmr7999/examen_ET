import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage {
  qrData: string = '';  // Inicializa como vacío
  generatedQRCode: boolean = false;  // Controla la visualización del QR
  selectedSegment: string = 'generate'; // Valor por defecto del segmento

  constructor(private router: Router) {}

  // Genera el código QR
  generateQRCode() {
    if (this.qrData.trim() !== '') {  // Asegúrate de que no esté vacío
      console.log('Texto para generar QR:', this.qrData); // Verifica el valor
      this.generatedQRCode = true; // Muestra el QR
    } else {
      console.log('El campo está vacío');
      this.generatedQRCode = false; // No muestra el QR
    }
  }

  // Navega a la página de confirmación de asistencia
  goToConfirmAsistencia() {
    this.router.navigate(['/principal']);
  }

  // Lógica para escanear el código QR
  scanQRCode() {
    // Implementa la lógica para escanear el código QR aquí
    console.log('Escaneando código QR...');
  }
}
