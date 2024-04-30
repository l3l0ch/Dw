// Esse arquivo tem que ser processado antes do principal na pagina
// é só linkar ele antes da chamada do js principal


const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.num = pokeDetail.id
    pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    pokemon.type = pokeDetail.types[0].type.name
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

// converte a response com a url dos detalhes de cada poke para json
pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = function (offset = 0, limit = 11) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
                .then( function (response){
                    return response.json()
                })
                .then( function (jsonBody){
                    return jsonBody.results
                })// cria uma lista com as urls com detalhes de cada poke
                .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
                // Esperar a lista de requisições serem resolvidas
                .then((detailRequest) => {
                    return Promise.all(detailRequest) //lista de json de detalhes
                })
                .then ((pokemonDetails) => {
                    return pokemonDetails
                })
                .catch((error) =>{ console.log(error)})
}

// Promise.all([
// 	fetch('https://pokeapi.co/api/v2/pokemon/1'),
// 	fetch('https://pokeapi.co/api/v2/pokemon/2'),
// 	fetch('https://pokeapi.co/api/v2/pokemon/3'),
// 	fetch('https://pokeapi.co/api/v2/pokemon/4'),
// ]).then((results) => {
// 	console.log(results)
// })
