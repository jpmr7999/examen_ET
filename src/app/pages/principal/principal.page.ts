import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {

  constructor(private navCtrl: NavController) {}

  // Va a la página de selección de fecha de asistencia
  goToFechaAsistenciaPage() {
    this.navCtrl.navigateForward('/fecha-asistencia');
  }
// Con esto regreso
  goBack() {
    this.navCtrl.back();
  }
}
