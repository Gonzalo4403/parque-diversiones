let btnAgregar = document.getElementById('btn-1'); // guardo el elemento HTML en una variable
let btnFinalizar = document.getElementById('btn-2');

let clienteMin = 9999;
let clienteMax = 0;

// arrays vacios
let entradas = []; // array para todas las ventas
let compra = [];  // array para una compra

btnAgregar.onclick = function() {
  let entrada = document.getElementById('tf').value;
  console.log(entrada);
  compra.push(entrada);
  console.log(compra);
  entradas.push(entrada);
  console.log(entradas);
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
  let cont = 0;
  for (let entrada of entradas) {  // el for-of para loopear por un array
    if (entrada < 18) cont++;
    if (entrada < clienteMin) clienteMin = entrada;
    console.log(`Cliente mas joven ${clienteMin}`);
    if (entrada > clienteMax) clienteMax = entrada;
    console.log(`Cliente mas viejo ${clienteMax}`);
  }
  let porcentaje = cont * 100 / entradas.length;  // regla de tres
  document.getElementById('menores').innerHTML = porcentaje;
  cont = 0;
  console.log(entradas);  // DEBUG
  document.getElementById('cliente-min').innerHTML = clienteMin;
  document.getElementById('cliente-max').innerHTML = clienteMax;
};
