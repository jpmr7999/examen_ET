import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // Regresa a la página anterior
  }
}
