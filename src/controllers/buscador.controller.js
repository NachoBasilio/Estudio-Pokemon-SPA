import views from "../views/buscador.html"
const url = "https://pokeapi.co/api/v2/pokemon/"


const llamaPokemon = async (num) =>{
    const llamado = await fetch(`${url}${num}`)
    const pokemon = await llamado.json()
    console.log(pokemon)
    return pokemon
}


export default async () => {
    const elemento = document.createElement("div")
    elemento.classList = "buscador"
    elemento.innerHTML = views
    
    const boton = elemento.querySelector(".buscador-button")
    

    boton.addEventListener("click", async () => {
        let input = elemento.querySelector(".buscador-input").value
        const pokemon = await llamaPokemon(input)
        const pokemonURL = pokemon.sprites.front_default
        const pokemonContenedor = elemento.querySelector(".pokemon-buscador")
        const pokemonSriptNodo = document.createElement("img")
        pokemonSriptNodo.classList = "pokemon-img"
        pokemonSriptNodo.src = pokemonURL
        pokemonContenedor.innerHTML = ''
        pokemonContenedor.appendChild(pokemonSriptNodo)
    })

    return elemento
}