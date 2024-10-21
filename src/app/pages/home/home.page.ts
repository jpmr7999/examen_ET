import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private LocaldbService: LocaldbService 
  ) {
    // Establece las credenciales iniciales en LocalStorage (puedes hacerlo una vez)
    this.LocaldbService.setCredentials('admin@profesor.duoc.cl', 'duoc2024');
  }

  async onSubmit() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, completa ambos campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Obtiene las credenciales almacenadas
      const { email: storedEmail, password: storedPassword } = this.LocaldbService.getCredentials();

      // Validar credenciales
      if (this.email === storedEmail && this.password === storedPassword) {
        this.router.navigate(['/principal']);
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Email o contraseña incorrectos.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }

  async onResetPassword() {
    const alert = await this.alertCtrl.create({
      header: 'Restablecer Contraseña',
      message: '¿Te gustaría recibir un enlace a tu correo para restablecer tu contraseña?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Enviar enlace',
          handler: () => {
            this.sendPasswordResetEmail();
          }
        }
      ]
    });

    await alert.present();
  }

  sendPasswordResetEmail() {
    console.log('Correo de restablecimiento enviado');
  }
}
