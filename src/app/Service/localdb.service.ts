import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldbService {

  constructor() { }

  // Método para guardar credenciales
  setCredentials(email: string, password: string) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }

  // Método para obtener credenciales
  getCredentials() {
    return {
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password')
    };
  }
}
