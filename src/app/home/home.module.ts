import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DisplayPageModule } from '../modules/display/display.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  exports:[
    
  ],
  declarations: [HomePage,PaginatorComponent ]
})
export class HomePageModule {}
