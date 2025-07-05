// Eventos AddEventos
function mostrarAlerta(){
    alert("Este botón usa un evento en línea");
}

function agregarProducto(){
    const ul = document.getElementById('listaProductos1');
    const li = document.createElement('li');
    li.textContent = "Producto agregado desde un evento inline";
    ul.appendChild(li);
}

document.getElementById('boton').addEventListener('click',() => {
    alert('¡Clic detectado!');
});

document.getElementById('campo').addEventListener('input',(e) => {
    console.log('Escribiendo:', e.target.value);
});

document.getElementById('btnAgregar').addEventListener('click',     () => {
    const ul = document.getElementById('listaProductos2');
    const li = document.createElement('li');
    li.textContent = "Item agregado desde un evento con addEventListener";
    ul.appendChild(li);
})