function getDay() {
  let fechas = [];
  let fechaActual = new Date();
  let diasAgregados = 12;
  fechaActual.setDate(fechaActual.getDate() + diasAgregados);
  dia = fechaActual.getDate();
  mes = fechaActual.getMonth() + 1; // +1 porque los meses empiezan en 0
  anio = fechaActual.getFullYear();
  fechaActual.setDate(fechaActual.getDate() - fechaActual.getDay());
  console.log("Ubicado en:");
  console.log(`${dia}/${mes}/${anio}`);
  console.log("//////////////////////////////////");
  for (let i = 1; i < 6; i++) {
    let dateToAdd = new Date();
    dateToAdd.setDate(dateToAdd.getDate() + diasAgregados);
    dateToAdd.setDate(fechaActual.getDate() + i);
    fechas.push(dateToAdd);
  }
  return fechas;
}

let fechas = getDay();
console.log("///////////////");
console.log("Dias que se puede entrenar");
for (let i = 0; i < fechas.length; i++) {
  let fecha = fechas[i];
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1; // +1 porque los meses empiezan en 0
  let anio = fecha.getFullYear();
  console.log(`${dia}/${mes}/${anio}`);
}
