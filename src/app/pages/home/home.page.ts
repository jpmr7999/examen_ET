import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular'; // Importamos AlertController para mostrar mensajes de error

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  email: string = '';  // Variable para almacenar el email ingresado
  password: string = '';  // Variable para almacenar la contraseña ingresada

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController // Inyectamos AlertController para mostrar alertas de error
  ) {}

  // Método para manejar la verificación y envío del formulario
  async onSubmit() {
    // Verificar que el email y la contraseña no estén vacíos
    if (this.email.trim() === '' || this.password.trim() === '') {
      // Mostrar una alerta si alguno de los campos está vacío
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, completa ambos campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Si todo está bien, navega a la página principal
      this.router.navigate(['/principal']);
    }
  }

  // Método para restablecer contraseña
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

  // Lógica para enviar el correo de restablecimiento (esto es solo un ejemplo)
  sendPasswordResetEmail() {
    console.log('Correo de restablecimiento enviado');
    // Aquí puedes integrar la lógica real para enviar un correo usando un servicio backend o proveedor como Firebase.
  }
}
