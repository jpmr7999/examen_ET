import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos Router para la navegación por rutas
import { NavController } from '@ionic/angular'; // Importamos NavController para la navegación hacia adelante y atrás

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private navCtrl: NavController) {}  // Inyectamos tanto Router como NavController

  // Método para navegar a la página de principal
  onSubmit() {
    this.router.navigate(['/principal']);  // Navega a la ruta '/principal'
  }

  // Método para navegar a la página de QR
  goToQrCodePage() {
    this.navCtrl.navigateForward('/qr-code');  // Navega hacia adelante a la página '/qr-code'
  }

  // Método para volver atrás o salir (ejemplo)
  goBack() {
    this.navCtrl.navigateBack('/');  // Navega hacia atrás o a la página principal '/'
  }
}
