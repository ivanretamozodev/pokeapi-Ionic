import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../home/services/pokemon.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
})
export class CapturePage implements OnInit {

  pokemonId : string = ""
  pokemonName : string = ""

  //variables of game

  isDeciding : boolean = false
  isPlaying : boolean = false

  //clases of css
  reduce: string = "reduce"
  noPlaying: string = "noPlaying"
  deciding: string = "deciding"

  constructor( private activatedRoute : ActivatedRoute,
               private pokemonService: PokemonService ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(({id,name}) => {
      this.pokemonName = name
      this.pokemonId = id
    })

    

  }

  StartGame(){
    this.isPlaying = true
    setInterval(()=>{
      this.isDeciding= true
    },500)
  }

  
}
