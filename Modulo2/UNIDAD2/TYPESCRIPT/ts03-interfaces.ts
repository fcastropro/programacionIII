interface Persona{
    nombre: string,
    apellido: string,
}


let empleado: Persona = {
    nombre: "Bob",
    apellido: "Marley"
}
console.log("empleado ", empleado);

interface Credenciales{
    clave: string,
    usuario: string,
}
function login(credencial: Credenciales): void{
    console.log("Bienvenido", credencial.usuario);
}
let miUsuario: Credenciales = {
    clave:'123',
    usuario:"Jesus"
}
login(miUsuario);

//hacer una interface Figura que tenga base y altura y lo pase a una funcion y tipo de figura (cuadrada y rectangulo)
//se le pase a una funcion segun el tipo se le pase calcule el area
interface Figura{
    base: number,
    altura: number,
}

function calcularArea(figura: Figura, tipo: "cuadrado" | "rectangulo"): number {
    if (tipo === "cuadrado") {
        return figura.base * figura.base;
    } else if (tipo === "rectangulo") {
        return figura.base * figura.altura;
    }
}

const cuadrado: Figura = { base: 5, altura: 5 };
const rectangulo: Figura = { base: 4, altura: 10 };

console.log("Área del cuadrado:", calcularArea(cuadrado, "cuadrado"));
console.log("Área del rectángulo:", calcularArea(rectangulo, "rectangulo"));
