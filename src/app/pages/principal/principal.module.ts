import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';
import { PrincipalPage } from './principal.page';
import { ComponentsModule } from "../../components/components.module";
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule,
    ComponentsModule,
    QRCodeModule,
  ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule { }
