import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {

  constructor(private navCtrl: NavController) {}

  // Navegar a la página de selección de fecha de asistencia
  goToFechaAsistenciaPage() {
    this.navCtrl.navigateForward('/fecha-asistencia'); // Cambia la ruta a la página que has generado
  }

  // Método para regresar
  goBack() {
    this.navCtrl.back();
  }
}
