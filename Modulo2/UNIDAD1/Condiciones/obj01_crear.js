// Manipulación de Objeto
let alumno = {
    nombre: "Juan",
    apellido: "Ampies",
    direccion: "Av. Amazonas",
    telefono: 39389433434
}

console.log(alumno);
console.log("apellido del alumno: ", alumno.apellido);
console.log("nombre del alumno: ",alumno["nombre"]);
//Modificar propiedades
alumno.apellido = "Lopez";
alumno["direccion"] = "Av. Bolivar";

console.log(alumno);

alumno.promedio =9;

console.log(alumno);

delete alumno.promedio

console.log(alumno);

alumnoClonado = {...alumno}
alumnoClonado.nombre = "Antonio";
alumnoClonado.apellido = "Apellido";
console.log(alumnoClonado);

//multiplicar precio unitario * Cantidad y sumarle IVA
//y asignar el valor de subtotal
item = {
    precioUnitario:23,
    cantidad:3,
    iva: 3.4,
    nombre: "Laptop",
    subtotal: 0
}

item.subtotal=(item.precioUnitario*item.cantidad)+(item.precioUnitario*0.15);
console.log("El subtotal es: "+item.subtotal)
//imprimir item
console.log("imprimir item")
for(const clave in item)
{
    console.log(clave," = ",item[clave]);
}

//listar las claves o propiedades
console.log(Object.keys(item));

//listar los valores
console.log(Object.values(item));

usuario = {
    nombre: "Luis",
    saludar: function(){
        return "Hola soy " + this.nombre;
    }
}
console.log(usuario.saludar());
//objetos animados

categoria = {
    nombre: "Electronica",
    productos: ["Laptop", "Monitor", "Teclado", {cantidad: 12, marca: "Sony"}],
    descripcion: {
        capacidad: "16hz",
        tamano: "12 pulgadas"
    }
}

console.log(categoria);