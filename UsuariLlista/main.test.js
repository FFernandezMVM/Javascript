import { describe, test, expect } from "bun:test";
import { Multimedia, Pelicula, Serie, Usuari } from "./models";

describe("📺 StreamFlix Core Tests", () => {
    test("Multimedia: Els views han de ser privats i començar a 0", () => {
        const video = new Multimedia("Intro", 5);
        expect(video.getViews()).toBe(0);
        expect(video.views).toBeUndefined();
    });

    test("Multimedia: Play ha d'incrementar els views", () => {
        const video = new Multimedia("Demo", 10);
        video.play();
        video.play();
        expect(video.getViews()).toBe(2);
    });

    test("Pelicula: Calcul de Royalties Correcte", () => {
        const peli = new Pelicula("Matrix", 120, 1999, 2.0);
        peli.play();
        peli.play();
        peli.play();
        expect(peli.calcularRoyalties()).toBe(6.0);
    });

    test("Serie: Polimorfisme i Royalties complexos", () => {
        const friends = new Serie("Friends", 30, 10);

        expect(friends.durada).toBe(300);
        expect(friends.play()).toBe("Marató");

        expect(friends.calcularRoyalties()).toBe(0.5);
    });

    test("Usuari: Calcul de temps total", () => {
        const user = new Usuari("Alice");
        const peli = new Pelicula("Inception", 148, 2010, 1);
        const serie = new Serie("Breaking Bad", 47, 5);

        user.afegirALlista(peli);
        user.afegirALlista(serie);

        expect(user.tempsTotalConsumit()).toBe(6.38);
    });
});