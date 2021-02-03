import buscador from "../controllers/buscador.controller"
import home from "../controllers/home.controller"

let secction = document.getElementById('contenido')



export const router = (router) => {
    switch(router){
        case '#/':{
            secction.innerHTML = ''
            return secction.appendChild(home())
        }
            break
        case '#/creatuequipo':
            console.log("hacerca de")
            break
        case '#/six-random':
            console.log("Mas")
            break
        case '#/buscador':{
            secction.innerHTML = ''
            return secction.appendChild(buscador())
        }
            break
        default:
            console.log("404")
    }
}