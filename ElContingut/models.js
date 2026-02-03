class Multimedia {
    #views;
    constructor(titol, durada, views = 0) {
        this.titol = titol;
        this.durada = durada;
        this.#views = views;
    }
    play() {
        console.log("Reproduint...");
        this.#views++;
    }
    getViews(views) {
        return this.#views;
    }

    #calcularCostServer() {
        return this.durada * 0.01;
    }
}


