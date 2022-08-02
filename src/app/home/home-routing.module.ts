import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
  ,
  {
    path: 'details/:id/:name',
    loadChildren: () => import('./../modules/details/details.module').then( m => m.DetailsPageModule)
  },
   {
    path: 'capture/:id/:name',
    loadChildren: () => import('./../modules/capture/capture.module').then(m => m.CapturePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
