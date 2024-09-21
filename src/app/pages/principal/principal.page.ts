import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {

  constructor(private navCtrl: NavController, private menu: MenuController) {}

  // Va a la página de selección de fecha de asistencia
  goToFechaAsistenciaPage() {
    this.navCtrl.navigateForward('/fecha-asistencia');
  }

  // Función para cerrar sesión
  logout() {
    this.menu.close(); // Cierra el menú si está abierto
    this.navCtrl.navigateRoot('/pages/home/home.module'); // Redirige a la página de inicio
  }
}
