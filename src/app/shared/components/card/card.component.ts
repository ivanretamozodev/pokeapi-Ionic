import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../core/models/pokemons.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() pokemons : Pokemon[] = []
  @Input() pages: number = 0
  @Input() search: string = ""

  constructor() { }

  ngOnInit() {
    console.log(this.search);
    
  }

}
