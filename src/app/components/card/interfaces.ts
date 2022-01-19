export interface IPokemon {
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
    is_default: boolean
}

export interface IListPokemons {
    results: IPokemonURL[],
    pokemons: IPokemon[]
    pokemons_url: IPokemonURL[]
}

export interface IPokemonURL {
    name: string,
    url: string 
}