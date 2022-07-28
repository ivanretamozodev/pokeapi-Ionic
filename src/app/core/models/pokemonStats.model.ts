export interface PokemonStatsResponse {
   
   
    
    stats:                    Stat[];
  
}



export interface Species {
    name: string;
    url:  string;
}





export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export interface Type {
    slot: number;
    type: Species;
}
