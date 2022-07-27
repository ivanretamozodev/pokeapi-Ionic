import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [MenuComponent,CardComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[
    MenuComponent,
    CardComponent
  ]
})
export class SharedModule { }
