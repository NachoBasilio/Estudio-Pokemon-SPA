import buscador from "../controllers/buscador.controller"
import home from "../controllers/home.controller"
import sixrandom from "../controllers/six-random.controller"
import creatuequipo from "../controllers/creatuequipo.controller"

let secction = document.getElementById('contenido')



export const router = (router) => {
    switch(router){
        case '#/':{
            secction.innerHTML = ''
            return secction.appendChild(home())
        }
        case '#/creatuequipo':{
                secction.innerHTML = ''
                return secction.appendChild(creatuequipo())
            }
        case '#/six-random':{
            secction.innerHTML = ''
            return secction.appendChild(sixrandom())
        }
        case '#/buscador':{
            secction.innerHTML = ''
            return secction.appendChild(buscador())
        }
        default:
            console.log("404")
    }
}