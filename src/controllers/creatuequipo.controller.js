import views from "../views/crea-tu-equipo.html"



export default  () => {
    const elemento = document.createElement("div")
    elemento.classList = "contenedor-pokemon"
    elemento.innerHTML = views


    return elemento
}