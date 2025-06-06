console.log(document.head);

const titulo = document.getElementById('titulo');
console.log("elemento titulo", titulo);

const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(n=>console.log(n.textContent));

const items = document.querySelectorAll('.item');
items.forEach(elemto=>console.log(MediaElementAudioSourceNode.textContent));


