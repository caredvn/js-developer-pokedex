const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    pokemon.abilities = pokeDetail.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)

    const habitatUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeDetail.id}/`
    return fetch(habitatUrl)
        .then((response) => response.json())
        .then((habitat) => {
            pokemon.habitat = habitat.habitat.name
            pokemon.shape = habitat.shape.name
            pokemon.eggGroups = habitat.egg_groups.map((egg_groupsSlot) => egg_groupsSlot.name)
            return pokemon
        })
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)

}