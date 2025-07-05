
const saludar = ()=> {
    console.log("Hola desde arrow funtion");
}
saludar();

const cuadrado1 = (num)=> {
    console.log("cuadrado de ", num, " igual a ", num*num);
}
cuadrado1(6);

const cuadrado = x => x * x;
console.log("5x5=",cuadrado(5));


const cuadrado1In = ()=> {
    let num = prompt("Ingrese número");
    
    alert("El cuadrado es "+num*num);
}
cuadrado1In();