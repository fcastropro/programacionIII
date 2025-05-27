var cantidad = 19;
var nombre = "JOSE ZAMBRANO";
var opcion = true;
console.log("cantidad", cantidad);
console.log("nombre", nombre);
console.log("opcion", opcion);

let opcional:any = "comodin any";

opcional=100;

//Tipos de datos compuestos

let equipos: string[] = ["Barcelona", "Real Madrid", "Ecuador", "Vino Tinto", "La liga"];
console.log("Equipos",equipos);

let edades: Array<number> = [10,12,23,456]
console.log("Edades ", edades);

//tuplas
let persona: [string, number] = ["Pedro", 6161616];
console.log("Alumno ", persona);

// Enums
enum Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
}

let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);

