import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldbService {
  constructor() { }

  // Método para inicializar las credenciales
  initializeCredentials() {
    const users = {
      admin: { email: 'admin@profesor.duoc.cl', password: 'duoc2024' },
      alumno: { email: 'alumno@duocuc.cl', password: 'duoc' },
    };

    localStorage.setItem('users', JSON.stringify(users));
  }

  // Método para obtener todas las credenciales
  getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  }
}
