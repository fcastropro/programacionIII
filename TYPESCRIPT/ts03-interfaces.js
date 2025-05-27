var empleado = {
    nombre: "Bob",
    apellido: "Marley"
};
console.log("empleado ", empleado);
function login(credencial) {
    console.log("Bienvenido", credencial.usuario);
}
var miUsuario = {
    clave: '123',
    usuario: "Jesus"
};
login(miUsuario);
function calcularArea(figura, tipo) {
    if (tipo === "cuadrado") {
        return figura.base * figura.base;
    }
    else if (tipo === "rectangulo") {
        return figura.base * figura.altura;
    }
}
var cuadrado = { base: 5, altura: 5 };
var rectangulo = { base: 4, altura: 10 };
console.log("Área del cuadrado:", calcularArea(cuadrado, "cuadrado"));
console.log("Área del rectángulo:", calcularArea(rectangulo, "rectangulo"));
