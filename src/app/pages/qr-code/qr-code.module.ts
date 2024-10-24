import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { QrCodePageRoutingModule } from './qr-code-routing.module';
import { QrCodePage } from './qr-code.page';
import { QrCodeModule } from 'ng-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodePageRoutingModule,
    QrCodeModule
  ],
  declarations: [QrCodePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Añadir esta línea
})
export class QrCodePageModule {}
