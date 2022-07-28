import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeElement } from 'src/app/core/models/pokemonType.model';
import { PokemonService } from 'src/app/home/services/pokemon.service';
import { FlavorTextEntry} from '../../core/models/pokemons.model';
import { Stat } from '../../core/models/pokemonStats.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  pokemonSpecieText : FlavorTextEntry[] = []
  namePokemon: string = ""
  idPokemon: string = ""
  tipesPokemon: TypeElement[] = []
  statsPokemon: Stat[]
  constructor(private http : PokemonService,
              private activatedroutes : ActivatedRoute
    ) { }



  ngOnInit() {

    this.activatedroutes.params.subscribe(({name,id}) => {this.namePokemon = name,this.idPokemon = id} )
    console.log(this.idPokemon);
    
    this.http.getTypesOfPokemos(this.idPokemon
    ).subscribe(types => this.tipesPokemon = types)
      
    this.http.getStatsOfPokemons(this.idPokemon).subscribe(stats => this.statsPokemon = stats )
    
  }
  


}
