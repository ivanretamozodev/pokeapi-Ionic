import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {

  @Output() onNextPage : EventEmitter<number> = new EventEmitter<number>()
  @Output() onPreviousPage : EventEmitter<number> = new EventEmitter<number>()


  pages: number = 25
  constructor() { }

  ngOnInit() {}

  previousPage(){

    this.onPreviousPage.emit(25) 
    
  }
  
  nextPage() {
  this.onNextPage.emit(25)    
  }
}
