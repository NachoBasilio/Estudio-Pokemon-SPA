import {page} from '../controllers/index'

let secction = document.getElementById('contenido')

export const router = (router) => {
    switch(router){
        case '#/':{
            secction.innerHTML = ''
            return secction.appendChild(page.home())
        }
        case '#/creatuequipo':{
                secction.innerHTML = ''
                return secction.appendChild(page.creatuequipo())
            }
        case '#/six-random':{
            secction.innerHTML = ''
            return secction.appendChild(page.sixrandom())
        }
        case '#/buscador':{
            secction.innerHTML = ''
            return secction.appendChild( page.buscador())
        }
        default:
            console.log("404")
    }
}