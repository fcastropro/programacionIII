function saludar(nombre: string): string{
    return `Hola, ${nombre}`;
}

console.log(saludar("Betty Marmol"));

//Parametros opcionales
function obtenerApellido(apellido?: string){
    return `Mi apellido, ${apellido ?? "invitado"}`;
}

console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());

//Parametros opcionales
function obtenerEdad(edad: number=18): string{
    return `Mi edad, ${edad} años`;
}

console.log(obtenerEdad(25));
console.log(obtenerEdad());

// funciones tipo flecha
const sumar=(a: number, b: number): number =>{
    return a+b;
}
console.log("la suma es :", sumar(5,4));

function mostrarInformacion(informacion: string): void{
    console.log(informacion);
}

mostrarInformacion("Suceso en Norte de Quito");

//Tipar funciones como variables
let operacion: (x: number, y: number)=>number;
operacion = function(a,b){
    return a+b;
}
console.log("resultado suma ", operacion(15,30));

//función que reciba un arreglo string y salude a cada persona
let nombres: string[] = ["Carlos", "Elian", "Ecuador", "Fernando", "La liga"];
function saludar2(personas: string[]): void {
    for (let persona of personas) {
        console.log("Hola", persona);
    }
}

saludar2(nombres);
