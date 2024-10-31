import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage {
  email: string = '';

  constructor(private alertCtrl: AlertController) {}

  async sendResetLink() {
    if (this.email.trim() === '') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, ingresa tu correo electrónico.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Aquí llamamos al método que simula el envío del correo de restablecimiento
    this.sendPasswordResetEmail();
  }

  async sendPasswordResetEmail() {
    console.log(`Correo de restablecimiento enviado a ${this.email}`);
    const alert = await this.alertCtrl.create({
      header: 'Enlace Enviado',
      message: 'Hemos enviado un enlace para restablecer tu contraseña a tu correo.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
