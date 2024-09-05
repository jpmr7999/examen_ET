import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsappGuidePageRoutingModule } from './whatsapp-guide-routing.module';

import { WhatsappGuidePage } from './whatsapp-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsappGuidePageRoutingModule
  ],
  declarations: [WhatsappGuidePage]
})
export class WhatsappGuidePageModule {}
