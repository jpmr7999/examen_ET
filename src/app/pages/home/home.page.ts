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
    private localDbService: LocaldbService
  ) {
    // Inicializa las credenciales solo una vez
    this.localDbService.initializeCredentials();
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
      // Obtener los usuarios almacenados
      const users = this.localDbService.getUsers();

      // Validar credenciales y redirigir a diferentes páginas
      if (this.email === users.admin.email && this.password === users.admin.password) {
        this.router.navigate(['./principal']); // Redirigir a la página del administrador
      } else if (this.email === users.alumno.email && this.password === users.alumno.password) {
        this.router.navigate(['/alumno-principal']); // Redirigir a la página del alumno
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
  agregarNuevoUsuario() {
    // Aquí puedes agregar la lógica para agregar un nuevo usuario
    // Por ejemplo, redirigir a una página para crear un nuevo usuario
    this.navCtrl.navigateForward('/agregarnuevo'); // Reemplaza con la ruta correcta
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
