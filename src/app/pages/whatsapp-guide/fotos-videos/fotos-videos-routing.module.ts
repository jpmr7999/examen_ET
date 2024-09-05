import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotosVideosPage } from './fotos-videos.page';

const routes: Routes = [
  {
    path: '',
    component: FotosVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotosVideosPageRoutingModule {}
