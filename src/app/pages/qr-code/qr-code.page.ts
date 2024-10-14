import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage {

  constructor(private router: Router) { }

  goToConfirmAsistencia() {
    this.router.navigate(['/confirm-asistencia']);
  }
}
