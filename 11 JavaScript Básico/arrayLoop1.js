const lista = ["JavaScript", "HTML", "CSS"];

const body = document.querySelector('body');

for(let index = 0; index < lista.length; index++) {
  body.innerHTML += "<li>"+ lista[index] +"</li>";
}

function adicionarConsole(item) {
  console.log(item);
  /*body.innerHTML += "<li>"+ lista[index] +"</li>";*/
}

lista.forEach(adicionarConsole);

// retorna o total
const total = lista.length;

// remove o último
const ultimo = lista.pop();

// remove o primeiros
const primeiro = lista.shift();

// adiciona ao final
lista.push('PHP');

console.log(lista);