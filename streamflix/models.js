export class Multimedia {
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

export class Pelicula extends Multimedia {
    constructor(any, costFix, views) {
        super(any, costFix)
        this.any = any;
        this.costFix = costFix;
    }
calcularRoyalties() {
    return this.getViews() * this.costFix;
}
}

export class Serie extends Multimedia {
    constructor(capitols, titol, durada) {
        super(titol, durada * capitols)
    this.capitols = capitols;
    }

    play() {
        super.play
        return `Marató de ${this.titol} iniciada`;
    }
    calcularRoyalties() {
        return this.capitols * this.getViews() * 0.05;
    }
}

export class Usuari {
    mylist = [];

        afegirALlista(item) {
        this.mylist.push(item);
    }
tempsTotalConsumit(durada) {
    let minuts = durada;
    for (let item of this.mylist) {
        minuts += item.durada;
        }
    let hores = durada / 60;
    return hores;
    }
}

