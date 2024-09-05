import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsappGuidePage } from './whatsapp-guide.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsappGuidePage
  },
  {
    path: 'que',
    loadChildren: () => import('./que/que.module').then( m => m.QuePageModule)
  },  {
    path: 'install',
    loadChildren: () => import('./install/install.module').then( m => m.InstallPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'msg',
    loadChildren: () => import('./msg/msg.module').then( m => m.MsgPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'fotos-videos',
    loadChildren: () => import('./fotos-videos/fotos-videos.module').then( m => m.FotosVideosPageModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./grupos/grupos.module').then( m => m.GruposPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsappGuidePageRoutingModule {}
