import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service'; // Cambiado al nuevo servicio

@Component({
  selector: 'app-alumno-principal',
  templateUrl: './alumno-principal.page.html',
  styleUrls: ['./alumno-principal.page.scss'],
})
export class AlumnoPrincipalPage implements OnInit {
  historialAsistencias: { fecha: string, hora: string, nombre: string, institucion: string, curso: string }[] = [];

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) { }

  ngOnInit() {
    // Inicializa el historial de asistencias si es necesario
    this.localdbService.initializeHistorial();

    // Carga el historial de asistencias desde localStorage
    this.historialAsistencias = this.localdbService.getHistorialAsistencias();
  }

  logout() {
    this.navCtrl.navigateRoot('/alumno');
  }

  irAAsistencia() {
    this.navCtrl.navigateForward('/ver-asistencia');
  }

  irACodigoQR() {
    this.navCtrl.navigateForward('/escanearqr');
  }
}
