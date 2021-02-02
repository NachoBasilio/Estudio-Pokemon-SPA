export const router = (router) => {
    switch(router){
        case '#/':
            console.log("Home")
            break
        case '#/about':
            console.log("hacerca de")
            break
        case '#/more':
            console.log("Mas")
            break
        default:
            console.log("404")
    }
}