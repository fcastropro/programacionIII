console.log("Declaración de Arreglos");
let arreglo = [2,3,2,3,267,4]
for(let num of arreglo){
    console.log(" numero : ", num);
}
let vacio = new Array();
for(let v of vacio){
    console.log(" elemento : ", v);
}
console.log(vacio);

//Acceder a un elemento
console.log("elemento 0 :", arreglo[0]);
console.log("elemento 1 :", arreglo[1]);
console.log("Array de Numeros ", arreglo);

arreglo[2] = 98;
arreglo[6] = 198;
arreglo[8] = 198;

console.log("Array de Numeros ", arreglo);

arreglo.push(50)

console.log("Array de Numeros ", arreglo);
arreglo.unshift(70);

console.log("Array de Numeros ", arreglo);

arreglo.pop();
arreglo.shift();

console.log("Array de Numeros ", arreglo);