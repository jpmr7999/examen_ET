import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotosVideosPageRoutingModule } from './fotos-videos-routing.module';

import { FotosVideosPage } from './fotos-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotosVideosPageRoutingModule
  ],
  declarations: [FotosVideosPage]
})
export class FotosVideosPageModule {}
