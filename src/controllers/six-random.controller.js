import views from "../views/six-random.html"

export default () => {
    const elemento = document.createElement("div")
    elemento.classList = "contenedor-pokemon"
    elemento.innerHTML = views

    return elemento
}