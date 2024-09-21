import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmAsistenciaPageRoutingModule } from './confirm-asistencia-routing.module';

import { ConfirmAsistenciaPage } from './confirm-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmAsistenciaPageRoutingModule
  ],
  declarations: [ConfirmAsistenciaPage]
})
export class ConfirmAsistenciaPageModule {}
