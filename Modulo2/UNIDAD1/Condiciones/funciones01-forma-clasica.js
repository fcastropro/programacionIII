function saludar(){
    console.log("Hola desde una función");
}
saludar();

function suma(){
    console.log("Suma 1 + 2 = ", 1 + 2);
}
function resta(){
    console.log("Resta 10 - 2 = ", 10 - 2);
}
suma();
resta();

// Funcion con parametros y retorno

function dividir(a, b){
    return a / b;
}

let resultado = dividir(40, 8);
console.log("Resultado: ", resultado);

//Hacer una funcion que se le pase un número e imprima la tabla de multiplicar de ese número la tabla de multiplicar de ese número

function tabla(numero){
    let i = 1
    while(i<=10){
        console.log(i," * ", numero, "=", i*numero);
        i++;
    }
}
tabla(5)

