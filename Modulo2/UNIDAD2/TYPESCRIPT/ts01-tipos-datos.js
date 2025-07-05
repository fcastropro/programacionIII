var cantidad = 19;
var nombre = "JOSE ZAMBRANO";
var opcion = true;
console.log("cantidad", cantidad);
console.log("nombre", nombre);
console.log("opcion", opcion);
var opcional = "comodin any";
opcional = 100;
//Tipos de datos compuestos
var equipos = ["Barcelona", "Real Madrid", "Ecuador", "Vino Tinto", "La liga"];
console.log("Equipos", equipos);
var edades = [10, 12, 23, 456];
console.log("Edades ", edades);
//tuplas
var persona = ["Pedro", 6161616];
console.log("Alumno ", persona);
// Enums
var Estados;
(function (Estados) {
    Estados[Estados["PENDIENTE"] = 0] = "PENDIENTE";
    Estados[Estados["ENVIADO"] = 1] = "ENVIADO";
    Estados[Estados["ENTREGADO"] = 2] = "ENTREGADO";
})(Estados || (Estados = {}));
var miEstado = Estados.ENTREGADO;
console.log(miEstado);
