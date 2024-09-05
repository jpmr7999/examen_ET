import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuePageRoutingModule } from './que-routing.module';

import { QuePage } from './que.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuePageRoutingModule
  ],
  declarations: [QuePage]
})
export class QuePageModule {}
