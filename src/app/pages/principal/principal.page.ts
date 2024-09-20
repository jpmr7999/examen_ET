import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {

  constructor(private navCtrl: NavController) {}

  // Método para navegar a la página de QR
  goToQrCodePage() {
    this.navCtrl.navigateForward('/qr-code');  // Navega hacia adelante a la página '/qr-code'
  }

  // Método para salir o regresar a la página anterior
  goBack() {
    this.navCtrl.navigateBack('/');  // Navega hacia atrás o a la raíz
  }
}
