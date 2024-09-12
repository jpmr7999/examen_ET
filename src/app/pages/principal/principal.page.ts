import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
  generatedQRCode: string = '';

  constructor() {}

  // Esta función genera un ID único para la sesión de asistencia.
  generateQRCode() {
    const sessionId = this.generateSessionId();
    this.generatedQRCode = `https://tu-servidor.com/asistencia/${sessionId}`;
  }

  // Genera un ID único para cada sesión
  generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}

