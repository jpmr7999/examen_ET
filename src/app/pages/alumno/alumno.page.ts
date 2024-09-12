import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage {
  scannedData: any;

  constructor(private barcodeScanner: BarcodeScanner) {}

  scanQRCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedData = barcodeData.text;
      // Aquí podrías enviar los datos escaneados a tu servidor para confirmar la asistencia
      console.log('Datos escaneados:', this.scannedData);
    }).catch(err => {
      console.log('Error escaneando el código:', err);
    });
  }
}
