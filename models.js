class Multimedia {
    #views;
    constructor(titol, durada, views = 0) {
        this.titol = titol;
        this.durada = durada;
        this.#views = views;
    }
}
function play(titol, durada) {
    console.log("Reproduint")
    views +1;
}

console.log(play);

function getViews(views) {
    console.log("El nombre actual de views es", views);
}
#calcularCostServer(durada) {
    console.log("El precio es...", 60*0.01)
}