const KEY = 'streamflix_db_v1';

export class StreamService {
    guardarCataleg(llistaMultimedia) {
        let cataleg = JSON.stringify(llistaMultimedia);
        localStorage.setItem(KEY, cataleg);
        console.log('Dades guardades: ${llistaMultimedia.length} items.');
    }

    carregarCataleg(){
        const catalegJSON = localStorage.getItem(KEY);

        return JSON.parse(catalegJSON);
    }

}