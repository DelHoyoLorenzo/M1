'use strict'
// No cambies los nombres de las funciones.
// Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /* pseudocodigo:
  paso 1: seleccionar un pivot con un Math.random()
  paso 2: pregunto si mi valor array[i] es menor al pivot, lo pusheo a la izq[], si es mayor a la derecha[]
  paso 3: si no tengo mas elementos en mi array hago recursion
  paso 4: quickSort(izq) + pivot + quickSort(derecha) */
function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    let pivot = array[0];
    let left = [];
    let right = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
  }
  

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /* divido el array a la mitad pero usando math floor
  o con slice
  divido hasta que no tenga opciones
  se usar recursion para dividir el array completamente en dos pedazos
  y despues para ordenar(unir = merge) 
  el merge compara mayor y menor y une
  se compara el elemento 0 de un array con el elemento 0 del otro */
function divide(array){
    //corte:
    if(array.length<=1){
     return array;
     }else{
      let medio= Math.floor(array.length/2);
      let izq=array.slice(0,medio);
      let der=array.slice(medio);
    }
    return ordenar(divide(izq),divide(der));
   }
}

function ordenar(izq,der){
  
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
