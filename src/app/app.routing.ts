import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PATHS } from './shared/global-variables';

const routes: Routes = [
  {
    path: '**',
    redirectTo: PATHS.artistList
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PATHS.artistList
  },
  {
    path: '',
    children: [{
      path: PATHS.artistList,
      loadChildren: () => import('./artist/artist.module').then((m) => m.ArtistModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
