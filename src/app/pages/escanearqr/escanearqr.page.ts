import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  async startScan() {
    // Pedir permiso de cámara al usuario
    const allowed = await BarcodeScanner.checkPermission({ force: true });
    if (!allowed) {
      alert('No se tiene permiso para usar la cámara');
      return;
    }

    // Ocultar el fondo en Android
    BarcodeScanner.hideBackground();

    // Empezar el escaneo
    const result = await BarcodeScanner.startScan(); 

    // Verificar si se ha escaneado algún contenido
    if (result.hasContent) {
      // Por ejemplo, si el contenido es un ID de asistencia, puedes usarlo
      const qrContent = result.content;
      console.log('Contenido del QR:', qrContent);

      // Navegar a la página de confirmación de asistencia
      this.navCtrl.navigateRoot('/confirm-asistencia', {
        queryParams: { qrData: qrContent }
      });
    }
  }

  goToAlumno() {
    this.navCtrl.navigateRoot('/confirm-asistencia');
  }
}
