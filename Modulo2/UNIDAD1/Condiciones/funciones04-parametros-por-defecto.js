console.log(" funciones con parametros por defecto");
function saludar(nombre = "Invitado"){
    console.log("Bienvenido : ", nombre);
}

saludar("Pedro Fulano");
saludar();

function multiplicar(num1 = 5, num2 = 10){
    console.log("Multiplicacion de : ",num1,"*",num2,"=",num1*num2);
}

multiplicar(3,4);
multiplicar();

function areaTriangulo(base = 2, altura = 4){
    console.log("Area Triangulo de : (",base,"*",altura,")/2=",(base*altura)/2);
}

areaTriangulo(5,8);
areaTriangulo();

let notas = [8, 5, 8, 7, 9];
function promedio() {
    let sum = 0;
    for (const nota of notas) {
        sum = nota + sum;
    }
    console.log("promedio = " + (sum / notas.length));
}

promedio();

