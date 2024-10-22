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

  // Método para inicializar el historial de asistencias si no existe
  initializeHistorial() {
    if (!localStorage.getItem('historialAsistencias')) {
      localStorage.setItem('historialAsistencias', JSON.stringify([])); // Inicializa el historial vacío
    }
  }

  // Método para guardar una nueva asistencia en el historial
  guardarAsistencia(asistencia: { fecha: string, hora: string, nombre: string, institucion: string, curso: string }) {
    const historialAsistencias = this.getHistorialAsistencias(); // Obtiene el historial actual
    historialAsistencias.push(asistencia); // Añade la nueva asistencia
    localStorage.setItem('historialAsistencias', JSON.stringify(historialAsistencias)); // Guarda el nuevo historial en localStorage
  }

  // Método para obtener el historial de asistencias
  getHistorialAsistencias() {
    const historialAsistencias = localStorage.getItem('historialAsistencias');
    return historialAsistencias ? JSON.parse(historialAsistencias) : [];
  }
}
