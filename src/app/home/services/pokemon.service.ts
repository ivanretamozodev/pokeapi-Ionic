import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { PokemonResponse, Pokemon } from '../../core/models/pokemons.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = 'https://pokeapi.co/api/v2'

  constructor(private pokemonservice: HttpClient) { }

  getAllPokemons(){
    return this.pokemonservice.get<PokemonResponse>(`${this.baseUrl}/pokemon?limit=1500`)
    .pipe(
      map(this.transformDataInPokemons)
    )
  }

  getPokemonSpecies(id: string){
    return this.pokemonservice.get(`${this.baseUrl}/species/${id}`)
  }

  private transformDataInPokemons(resp : PokemonResponse):Pokemon[]{

   const pokemonData : Pokemon[] = resp.results.map(poke =>{
    
    const urlArr = poke.url.split('/');
    const id = urlArr[6]
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    
    return {
      id,
      name:poke.name,
      pic
    }
   })
   return pokemonData
  }
}
