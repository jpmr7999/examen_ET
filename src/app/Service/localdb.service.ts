import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldbService {
  constructor() { }

  // Método para inicializar las credenciales
  initializeCredentials() {
    const users = {
      admin: { email: 'admin@profesor.duoc.cl', password: 'duoc2024', nombre: 'Juan Perez', rol: 'administrador' },
      alumno: { email: 'alumno@duocuc.cl', password: 'duoc2024', nombre: 'Jose Vasquez', rol: 'alumno' },
    };
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Método para obtener todas las credenciales
  getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  }

  // Método para guardar un nuevo usuario
  guardarUsuario(nuevoUsuario: { nombre: string; email: string; password: string; rol: string }) {
    const users = this.getUsers();
    users[nuevoUsuario.email] = nuevoUsuario; // Guarda el usuario utilizando su email como clave
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Método para inicializar el historial de asistencias
  initializeHistorial() {
    if (!localStorage.getItem('historialAsistencias')) {
      localStorage.setItem('historialAsistencias', JSON.stringify([])); // Inicializa el historial vacío
    }
  }

  // Método para guardar una nueva asistencia en el historial
  guardarAsistencia(asistencia: { fecha: string; hora: string; nombre: string; institucion: string; curso: string }) {
    const historialAsistencias = this.getHistorialAsistencias(); // Obtiene el historial actual
    historialAsistencias.push(asistencia); // Añade la nueva asistencia
    localStorage.setItem('historialAsistencias', JSON.stringify(historialAsistencias)); // Guarda el nuevo historial en localStorage
  }

  // Método para obtener el historial de asistencias
  getHistorialAsistencias() {
    const historialAsistencias = localStorage.getItem('historialAsistencias');
    return historialAsistencias ? JSON.parse(historialAsistencias) : [];
  }

  // Método para obtener el nombre del usuario
  getNombreUsuario() {
    const users = this.getUsers();
    const user = Object.keys(users).find(key => localStorage.getItem('loggedInUser') === key);
    return user ? user : '';
  }
}
