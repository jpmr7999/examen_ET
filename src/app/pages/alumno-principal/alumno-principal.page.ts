import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-principal',
  templateUrl: './alumno-principal.page.html',
  styleUrls: ['./alumno-principal.page.scss'],
})
export class AlumnoPrincipalPage implements OnInit {
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot('/alumno'); // Redirige a la página 'alumno'
  }

  irAAsistencia() {
    this.navCtrl.navigateForward('/ver-asistencia'); // Cambia '/asistencia' por la ruta de tu página de asistencia
  }

  irACodigoQR() {
    this.navCtrl.navigateForward('/escanearqr'); // Cambia '/codigo-qr' por la ruta de tu página de código QR
  }
}
