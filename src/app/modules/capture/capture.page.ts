import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../home/services/pokemon.service';
import { RatioPokemon } from '../../core/models/PokemonCapture.model';

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
  ratioCapture : number
  randomNumber : number

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

    this.pokemonService.getCaptureRatioOfPokemons(this.pokemonId).subscribe(ratio => this.ratioCapture = ratio)
    
    this.randomNumber = Math.trunc(Math.random()*100 + 1)

    console.log(this.randomNumber);
    

  }

  StartGame(){
    this.isPlaying = true
    setInterval(()=>{
      this.isDeciding= true
    },500)
    this.isCapturated()
  }

  isCapturated(){
    if (this.randomNumber >= this.ratioCapture ) {
      console.log("you win");
      
    }else{
      console.log("you lose");
      
    }
  }
  
}
