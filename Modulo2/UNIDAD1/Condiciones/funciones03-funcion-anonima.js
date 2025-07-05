console.log("funcion anonima");
setTimeout(function(){
    console.log("Hola desde funcion ser Time");

}, 3000);

let mensaje = function(){
    return "Mensaje desde una funcion anonima";
}
console.log(mensaje()); 