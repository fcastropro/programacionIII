document.getElementById('agregar').addEventListener('click', () => {
    const texto = document.getElementById('tarea').ariaValueMax;
    if(texto.trim() !== ''){
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('listaTareas').appendChild(li);
        document.getElementById('tarea').value = '';
    }
});