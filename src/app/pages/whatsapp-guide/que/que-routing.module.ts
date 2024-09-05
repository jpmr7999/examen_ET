import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuePage } from './que.page';

const routes: Routes = [
  {
    path: '',
    component: QuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuePageRoutingModule {}
