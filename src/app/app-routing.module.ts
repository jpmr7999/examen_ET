import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./pages/qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },
  {
    path: 'fecha-asistencia',
    loadChildren: () => import('./pages/fecha-asistencia/fecha-asistencia.module').then( m => m.FechaAsistenciaPageModule)
  },
  {
    path: 'confirm-asistencia',
    loadChildren: () => import('./pages/confirm-asistencia/confirm-asistencia.module').then( m => m.ConfirmAsistenciaPageModule)
  },
  {
    path: 'ver-asistencia',
    loadChildren: () => import('./pages/ver-asistencia/ver-asistencia.module').then( m => m.VerAsistenciaPageModule)
  },
  {
    path: 'alumno-principal',
    loadChildren: () => import('./pages/alumno-principal/alumno-principal.module').then( m => m.AlumnoPrincipalPageModule)
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./pages/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
