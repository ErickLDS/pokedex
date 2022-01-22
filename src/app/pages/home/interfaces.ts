export interface IPokemonData {
    id: number,
    name: string,
    sprites: {
        other: {
            'official-artwork': {
                front_default: string
            }
        },
    },
    types: Array<any>,
    is_default: boolean,
    stats: Array<{
        base_stat: number,
        stat: {
            name: string
        }
    }>
}

export interface IPokemonInfo {
    evolution_chain: {
        url: string
    },
    habitat: {
        name: string
    },
    is_baby: boolean,
    is_legendary: boolean,
    is_mythical: boolean,
    varieties: Array<{
        pokemon: IPokemonURL
    }>,
    generation: {
        url: string
    },
    base_happiness: number
}

export interface IEvolution {
    chain: {
        evolution_details: Array<IEvolutionDetails>,
        evolves_to: any,
        species: IPokemonURL
    }
}

export interface IEvolutionDetails {
    gender: any,
    held_item: any,
    item: any,
    known_move: any,
    known_move_type: any,
    location: any,
    min_affection: any,
    min_beauty: any,
    min_happiness: any,
    min_level: any,
    needs_overworld_rain: any,
    party_species: any,
    party_type: any,
    relative_physical_stats: any,
    time_of_day: any,
    trade_species: any,
    trigger: {
        name: string
    }
}

export interface IListPokemons {
    results: IPokemonURL[],
    pokemons: IPokemonData[]
}

export interface IPokemonURL {
    name: string,
    url: string 
}