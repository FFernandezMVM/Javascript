class Multimedia {
    #views;
    constructor(titol, durada, views = 0) {
        this.titol = titol;
        this.durada = durada;
        this.#views = views;
    }
}
function play() {
    console.log("Reproduint")
    this.views +1;
}
console.log(play);

function getViews(views) {
    console.log("El nombre actual de views es", views);
}

calcularCostServer(durada) {
    durada * 0.01
}
