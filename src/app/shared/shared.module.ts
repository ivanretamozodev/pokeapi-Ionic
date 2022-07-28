import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [MenuComponent,CardComponent, FilterPipe],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    CardComponent
  ]
})
export class SharedModule { }
