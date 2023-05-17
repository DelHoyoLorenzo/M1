'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length=0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this._length++;
  }else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this._length++;
  }
}; //no retorna nada porque simplemente su funcion es agregar nodos a la lista y no debe retornar nada necesariamente

LinkedList.prototype.remove = function() {//como no recibo parametro por q no es necesario, no debo crear nada. Para crear un nodo si o si necesitaria un value
  if (this.head === null) {
    return null;
  } // o if(this._head === 0) return null
  let current = this.head;
  let prev = null;
  while (current.next !== null) {
    prev = current;
    current = current.next;
  }
  if (prev === null) { //o sea que solo hay un nodo en la lista
    let aux = current.value;
    this.head = null;
    return aux;
  } else {
    let aux= current.value;
    prev.next = null;
    return aux;
  }
 
}

LinkedList.prototype.search = function(parametro){
  let current = this.head;

  if(!current) return null;
  
  while(current !== null){
    if(typeof parametro==="function"){
      if(parametro(current.value)){
        return current.value;
      }
    }
  if(parametro===current.value){
        return current.value;
      }
    current=current.next;
  }
  return null;
  
}

/* LinkedList.prototype.search = function(parametro){
  let current = this.head;
  if(typeof parametro !== "function"){
    while(parametro !== current.value){
      current=current.next
    }
    return current;
  }else{
      while(parametro(current.value)){
        current=current.next;
      }
      return current;
    }
 
return null;

} */



/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets= [];
  this.numBuckets = 35;
}
let tabla= new HashTable();

HashTable.prototype.hash = function(key){ //key es un string
  //separo el string letra por letra y con el codigo numerico sumo
  if(typeof key === "string"){
    let suma=0;
    for(let i=0; i<key.split('').length;i++){
      suma+= key.split('')[i].charCodeAt();
    }
    return suma % this.numBuckets;
  }else{
    return 'key debe ser un string';
  }
}

HashTable.prototype.set = function(key,value){
  if(typeof key !== "string"){
    throw new TypeError('error');
  }else{
    if(!this.buckets[this.hash(key)]){ //colision: en este caso si entra una palabra escrita end istinto orden como la suma del hash va a ser igual, se va a almacenar igual en el mismo lugar del array, almacenamos muchos elementos en el mismo objeto en el mismo lugar del array
      this.buckets[this.hash(key)] = {};
      }
      this.buckets[this.hash(key)][key]=value;
      
  }
  return this.buckets[this.hash(key)][key];  //por que si saco este return el programa testea bien igual
                                            
}

HashTable.prototype.get = function(key){
 // let index= this.hash(key);
  return this.buckets[this.hash(key)][key];  
}

HashTable.prototype.hasKey = function(key){
  if(this.buckets[this.hash(key)][key]){
    return true;
  }else{
    return false;
  } // puede ser tmb return this.buckets[this.hash(key)].hasOwnProperty(key);
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
