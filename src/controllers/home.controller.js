import views from "../views/home.html"

export default () => {
    const elemento = document.createElement("div")
    elemento.innerHTML = views

    return elemento
}