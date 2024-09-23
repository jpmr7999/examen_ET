import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoPrincipalPage } from './alumno-principal.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoPrincipalPageRoutingModule {}
