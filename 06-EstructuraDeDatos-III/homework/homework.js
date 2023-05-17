'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value=value;
   this.left=null;
   this.right=null;
}

BinarySearchTree.prototype.insert = function(value){
   
   let newBST = new BinarySearchTree(value);

   if(value < this.value){
      if(this.left===null){
            this.left = newBST;
         }else{
            this.left.insert(value);
         }
      }else{
         if(this.right===null){
            this.right = newBST;
         }else{
            this.right.insert(value);
         }
      }
};

BinarySearchTree.prototype.size = function(){
   let suma=1;
   if(this.left && this.left.size()){suma++;}  
   if(this.right && this.right.size()){suma++; } 
   return suma;
};

BinarySearchTree.prototype.contains = function(value){ //contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
                                                         // esta funcion recorre todo el arbol, no se enfoca solamente en el lado izq o derecho
      if(value === this.value){
         return true;
      }else if(this.left && this.left.contains(value)){
               return true;
            }else if(this.right && this.right.contains(value)){
                     return true;
            }else{
               return false;
            } 
}


BinarySearchTree.prototype.depthFirstForEach = function(cb,param){
  
   switch(param){
      case 'pre-order':
         cb(this.value); //una vez que ejecuto mi valor en el nodo donde estoy parado se lo mando a la izq, el objetivo es que todos los nodos ejecuten el cb
         this.left && this.left.depthFirstForEach(cb,param);  // a esto se le llama shortcircuit (&&)
         this.right && this.right.depthFirstForEach(cb,param);
         break;
      case 'post-order':
         this.left && this.left.depthFirstForEach(cb,param);
         this.right && this.right.depthFirstForEach(cb,param);
         cb(this.value);
         break;
      default:
         this.left && this.left.depthFirstForEach(cb,param);
         cb(this.value);
         this.right && this.right.depthFirstForEach(cb,param);
         break;
   }
      
    
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, almacen=[]){ //usar una Queue
   cb(this.value);

   if(this.left){
      almacen.push(this.left);
   }

   if(this.right){
      almacen.push(this.right);
   }

   if(almacen.length){
      almacen.shift().breadthFirstForEach(cb,almacen);
   }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
