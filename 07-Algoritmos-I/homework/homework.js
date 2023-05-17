'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let aux=2;
  let array=[1];
  while(num !== 1){
    if(num % aux === 0){
      num= num/aux;
      array.push(aux);
    }else{
      aux++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:           intercambiar elementos pegados
  let j=0;

  while(j<array.length){
    
    for(let i=0; i<array.length; i++){ //este ej puede ser con dos for anidados donde i arranca en 0 y j en i + 1
      if(array[i]>array[i+1]){
        let aux=array[i];
        array[i]=array[i+1];
        array[i+1]=aux;
      }
    }
    j++;
  }
   return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:            inserta los elementos en un nuevo array, mantendiendola ordenada a medida q avanza
 

  for(let i=1; i<array.length; i++){
    let j=i;
    while(array[j-1]>array[j] && j > 0){
      let aux=array[j];
      array[j]=array[j-1];
      array[j-1]=aux;
      j--;
    }

  }
  return array;
  }




      /* for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j - 1] > array[j]) {
        // Realizamos el intercambio de elementos si están en el orden incorrecto
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        j--;
      }
    }
    return array;
  } */
  
  



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:  //busco el elemento mas chico de mi lista y lo intercambio con el primer elemento, asi sucesivamente
  
  for(let i=0; i<array.length; i++){
    let posMin=i;
    let min=array[i];
    for(let j=i+1; j<array.length; j++){
      if(array[j]<min){
        min=array[j];
        posMin=j;
      }//aca obtengo el min
    }//aca afuera los intercambio
    let aux=array[i];
    array[i]=array[posMin];
    array[posMin]=aux;
    }
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
