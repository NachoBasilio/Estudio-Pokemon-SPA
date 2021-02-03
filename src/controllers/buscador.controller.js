import views from "../views/buscador.html"


export default () => {
    const elemento = document.createElement("div")
    elemento.classList = "buscador"
    elemento.innerHTML = views

    return elemento
}