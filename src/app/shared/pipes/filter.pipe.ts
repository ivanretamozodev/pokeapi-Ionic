import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../core/models/pokemons.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Pokemon[], page: number, search: string ): Pokemon[] {
    if (search.length === 0 ) {
      return value.slice(page,page+25)
    }else{
    
    const searchPoke = value.filter(poke => poke.name.includes(search))

    return searchPoke.slice(page,page+25)
    }
  }

}
