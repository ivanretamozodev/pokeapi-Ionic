import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Output() onInputSearch: EventEmitter<string> = new EventEmitter()

  constructor( private menu : MenuController ) { }

  ngOnInit() {}

  searchInput(value: string){
    this.onInputSearch.emit(value)
  }

}
