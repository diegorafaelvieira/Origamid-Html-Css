const ativar = document.querySelector(".ativar");

/** @param {MouseEvent} event */  // interface -> para saber o que tem dentro de event
function ativarAoclick(event) {
  console.log('Clicou em:', ativar);
  console.log(event.x); // valor horizontal
  console.log(event.y); // valor vertical
  console.log(event.timeStamp); // tempo que demorou o click
  console.log(event.currentTarget); // elemento que é adicionado o evento
}

ativar.addEventListener('click', ativarAoclick);

console.log(ativar);