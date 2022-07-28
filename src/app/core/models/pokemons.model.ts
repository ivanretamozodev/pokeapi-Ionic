export interface PokemonResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
}

export interface Pokemon {
    id: string,
    name: string,
    pic: string
}

//pokemon details interface

export interface PokemonSpecie {
  
   
    color:                  Color;
    flavor_text_entries:    FlavorTextEntry[];
    is_legendary:           boolean;
    is_mythical:            boolean;

    
}

export interface Color {
    name: string;
    url:  string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language:    Color;
    version:     Color;
}
