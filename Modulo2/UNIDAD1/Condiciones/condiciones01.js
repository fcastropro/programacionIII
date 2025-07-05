let a = prompt("Ingrese el primer número");
let b = prompt("Ingrese el segundo número");
a = Number(a);
b = Number(b);
if(a>b) {
    alert("El primer número es mayor.");
}else if(a<b){
    alert("El segundo número es mayor.");
}else{
    alert("son iguales");
}