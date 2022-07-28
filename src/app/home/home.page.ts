import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from '../core/models/pokemons.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  public pokemons : Pokemon[] = []
  public pages: number = 0
  public search: string = ""

  constructor(private pokemonservice : PokemonService) {}

  searchInput(value: string){
    
    this.search = value
    console.log(this.search);
    
  }

  nextPage(event: number){
    if (this.pages >= 125) {
      return
    }else{
      this.pages+=event
    }
  }

  previousPage(event){
    if (this.pages === 0) {
      return
    }
    this.pages-=event
  }

  ngOnInit(): void {
    
  this.pokemonservice.getAllPokemons()
  .subscribe(resp => this.pokemons= resp)
    
  }
}
