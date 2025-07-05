let mensaje = "Hola como estás?"; // string
let edad = 10; //number
let activo = true;// boolean
let vacio = null;// null
let x;// undefined

console.log("Mensaje ", mensaje, "tipo de variable: ", typeof mensaje);
console.log("Edad ", mensaje, "tipo de variable: ", typeof edad);
console.log("Activo ", activo, "tipo de variable: ", typeof activo);
console.log("vacio ", activo, "tipo de variable: ", typeof vacio);
console.log("x ", x, "tipo de variable: ", typeof x);
console.log("2. variables no primitivas");
const persona = {
    nombre: "Fernando",
    Apellido: "Castro"
}
console.log("Apellido", persona.Apellido, "tipo de variable: ", typeof persona);

const frutas = ["peras", "manzana", "naranja", "piña"];
console.log("Frutas ", frutas, "tipo de variable: ", typeof frutas);
const hoy = new Date();
console.log("Fecha actual ", hoy, "tipo de variables: ", typeof hoy);
console.log("Expresiones regulares");
const regex = /[a-z]+/;
console.log(regex.test("99999"));

console.log("CONVERSIONES");
a = "10";
b = 5;
multiplicaciones = a * b;
console.log("a ", a, "tipo de variable: ", typeof a);
console.log("b ", b, "tipo de variable: ", typeof b);



