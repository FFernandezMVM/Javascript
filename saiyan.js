class Frieza {
    static destruirPlaneta() {
    console.log("Frieza ha destruido el planeta");
}
}

class Saiyan{
    // contador a 0
    static poblacio = 0;
constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    // Se aumenta la población 
    Saiyan.poblacio++;

    if (Saiyan.poblacio >= 10) 
    {
        Frieza.destruirPlaneta()
    }
}
}