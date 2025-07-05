const persona ={
    nombre: "Pedro",
    apellido: "Perez",
    edad: 10
}

console.log("Nombre", persona["nombre"]);
console.log("Apellido", persona["apellido"]);
console.log("Edad", persona["edad"]);
console.log("---");
for(const clave in persona){
    console.log(clave," : ", persona[clave])
}

const producto = {
    nombre: "Laptop",
    precio: 1000,
    descripcion: "i7 13va generación"
}
for(const prod in producto){
    console.log(prod," : ", producto[prod])
}