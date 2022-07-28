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
    path: 'details',
    loadChildren: () => import('./../modules/details/details.module').then( m => m.DetailsPageModule)
  },
/*   {
    path: 'display',
    loadChildren: () => import('./modules/display/display.module').then( m => m.DisplayPageModule)
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
