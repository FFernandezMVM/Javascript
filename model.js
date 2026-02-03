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

class Pelicula extends Multimedia {
    constructor(any, costFix) {
        this.any = any;
        this.costFix = costFix;
    }
calcularRoyalties() {
    return views * costFix;
}
}

class Serie extends Multimedia {
    constructor(capitols) {
    this.capitols = capitols;
    }

    play() {
        return `Marató de ${this.titol} iniciada`;
    }
    calcularRoyalties() {
        return this.capitols * this.getViews() * 0.05;
    }
}

class Usuari {
    mylist = [];

afegirALlista(item) {
    this.mylist.push(item);
}
tempsTotalConsumit() {
    let minuts = 0;
    for (let item of this.mylist) {
        minuts += item.durada;
    }
    let hores = minuts / 60;
    return hores;
}
}
