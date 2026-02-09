const KEY = 'streamflix_db_v1';

export  class StreamService {
    guardarCataleg(llistaMultimedia) {
        let cataleg = JSON.stringify(llistaMultimedia);
        localStorage.setItem("cataleg", JSON.stringify(llistaMultimedia));
        console.log(`Dades guardades: ${llistaMultimedia.length} items.`)
    }
carregarCataleg() {
    const catalegJSON = localStorage.getItem(KEY);
    return JSON.parse(catalegJSON);
    
}
    esborrarTot() {
        localStorage.removeItem("cataleg");
    }
}   