import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service';

@Component({
  selector: 'app-agregarnuevo',
  templateUrl: './agregarnuevo.page.html',
  styleUrls: ['./agregarnuevo.page.scss'],
})
export class AgregarNuevoPage {
  primerNombre: string = '';
  primerApellido: string = '';
  password: string = '';
  rol: string = 'alumno'; // Por defecto, rol es 'alumno'
  emailPrefix: string = ''; // Prefijo del email editable
  dominio: string = '@duocuc.cl'; // Dominio por defecto
  universidad: string = ''; // Para seleccionar la universidad

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) { }

  onSubmit() {
    const nuevoUsuario = {
      nombre: `${this.primerNombre} ${this.primerApellido}`,
      email: `${this.emailPrefix}${this.dominio}`, // Concatenar el prefijo con el dominio
      password: this.password,
      rol: this.rol,
    };

    // Llama al servicio para guardar el nuevo usuario
    this.localdbService.guardarUsuario(nuevoUsuario);
    this.navCtrl.navigateBack('/home'); // Redirige a la página de inicio
  }

  // Método para cambiar el dominio según la universidad seleccionada
  onUniversidadChange() {
    if (this.universidad === 'DuocUC') {
      this.dominio = '@duocuc.cl';
    } else if (this.universidad === 'Otra') {
      this.dominio = '@otrainstitucion.cl'; // Cambiar el dominio según la institución seleccionada
    }
  }
}
