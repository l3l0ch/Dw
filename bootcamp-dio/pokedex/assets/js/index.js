
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// function convertPokemonTypesToLi(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }



function convertPokemonToHtmlLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.num}</span>
            <span class="name">${(pokemon.name).toUpperCase()}</span>

            <div class="datail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                    <img src=${pokemon.photo} alt=${pokemon.name}>
            </div>
    </li>
     
    `
}     
const listaPokemonsHtml = document.getElementById('pokemonsList');
var limit = 8; // limite de elementos por pagina
var offset = 0; // paginação

pokeApi.getPokemons()
    .then(function (pokemonsList = []) {
        // pegando cada elemento de lista e convertando em html li
        // o join ('') troca o separador default da lista por
        // alguma coisa, no caso nada
        // listaPokemonsHtml.innerHTML = pokemonsList.map(convertPokemonToHtmlLi).join('')
        console.log(pokemonsList);
        for (let i =0; i <pokemonsList.length; i++) {
            listaPokemonsHtml.innerHTML += convertPokemonToHtmlLi(pokemonsList[i]);
        }
        // console.log(pokemonsList[0].types[0].type.name)

        // console.log(pokemonsList[0].sprites.front_default)
})
function page(){
    const prox_page = pokeApi.getPokemons(offset, limit)
        .then(function (pokemonsList){
            listaPokemonsHtml.innerHTML = pokemonsList.map(convertPokemonToHtmlLi).join('')
        
    })
    return prox_page
}
reset()
const max = 150;
function load(){
    offset += limit;
    let rec = offset + limit;
    if ( rec > max ){
        limit = 1;
        page().then((response) =>{
            const butLoad = document.getElementsByClassName('btn-load')[0];
            butLoad.parentElement.removeChild(butLoad);
            return;
        })
    
    }
    else{
        page()
    }
        
}
function back(){
    offset -= limit;
    if (offset < 0){
        offset = 0;
        limit = 8;
    }
    const prox_page = pokeApi.getPokemons(offset, limit)
        .then(function (pokemonsList){
            listaPokemonsHtml.innerHTML = pokemonsList.map(convertPokemonToHtmlLi).join('')
        })
    listaPokemonsHtml.innerHTML = prox_page
}

function reset(){
    offset = 0;
    limit =8;
    const prox_page = pokeApi.getPokemons(offset, limit)
        .then(function (pokemonsList){
            listaPokemonsHtml.innerHTML = pokemonsList.map(convertPokemonToHtmlLi).join('')
        })
    listaPokemonsHtml.innerHTML = prox_page
}

