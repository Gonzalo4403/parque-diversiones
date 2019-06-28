let btnAgregar = document.getElementById('btn-1'); // guardo el elemento HTML en una variable
let btnFinalizar = document.getElementById('btn-2');

// arrays vacios
let entradas = [];
let compra = [];

btnAgregar.onclick = function() {
  let entrada = document.getElementById('tf').value;
  compra.push(entrada);
  entradas.push(entrada);
  document.getElementById('tf').value = '';
};

btnFinalizar.onclick = function() {
  let total = 0;
  for (let i = 0; i < compra.length; i++) {
    (compra[i] < 14) ? total += 50 : total += 100; // operador ternario, es como un if-else
  }
  console.log(total);  // se puede usar console.log para debugear
  document.getElementById('total').innerHTML = total; // cambia el texto de un elemento HTML
  total = 0;  // blanqueo total y compra para el proximo cliente
  compra = [];
  let i = 0;
  for (let entrada of entradas) {  // el for-of para loopear por un array
    if (entrada < 18) i++;
  }
  let porcentaje = i * 100 / entradas.length;  // regla de tres
  document.getElementById('menores').innerHTML = porcentaje;
  i = 0;
  console.log(entradas);
};
