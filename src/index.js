import "./style.css"
import "./router/index.router"
import { router } from "./router/index.router"

const atrapaHast = () => {
    router(window.location.hash)
}

window.addEventListener("hashchange", atrapaHast)

