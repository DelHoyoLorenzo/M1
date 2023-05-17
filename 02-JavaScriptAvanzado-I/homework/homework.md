# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //10
   console.log(a); //8
   var f = function (a, b, c) {
      b = a;
      console.log(b);// 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); //10 mal, es 9 porque dentro del Lexical Enviroment (LE) de la primer funcion nos pasan por parametro el valor de b que es 9
};
c(8, 9, 10);
console.log(b);//10
console.log(x); // 5 mal, es 1, porque el var x=10 esta adentro de la funcion y muere ahi, corresponde al LE global el cual x es 1
```

```javascript
console.log(bar);//undefined
console.log(baz);//undefined mal, tira error
foo();
function foo() {
   console.log('Hola!');//no se puede correr | mal, imprime hola, por ser funcion statement las eleva el hoisting entonces no hay problema
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);// franco
```

```javascript
var instructor = 'Tony';
console.log(instructor);//tony
(function () { // esta funcion es una funcion que como se crea se invoca en el mismo momento, raro xd
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);//mal, es franco porque para la function instructor tiene scope local y le da el valor de franco totalmente valido, solo para la function
   }
})();
console.log(instructor);//tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco'; //scope global para el let
if (true) {
   var instructor = 'The Flash'; //este var pisa al anterior
   let pm = 'Reverse Flash'; //scope local para el let
   console.log(instructor);//the flash
   console.log(pm);//reverse flash
}
console.log(instructor);//tony mal, the flash es, porque ya se piso el segundo var instructor
console.log(pm);//franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // NaN mal, es 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 //$45
"4" - 2//2
"4px" - 2// mal, es NaN porque no resta numeros, js no puede transformar el primer elemento en un numero
7 / 0// infinity es un tipo de numero
{}[0]//error mal, es undefined
parseInt("09")//09
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//0 mal, es 5 porque 0 lo considera como false
[3]+[3]-[10]//undefined mal, es 23 ?? concatena 3con3 dando 33 - 10 ya que el - solo resta, no tiene otra funcion
3>2>1//false porque La evaluación de operadores en JavaScript se realiza de izquierda a derecha. En este caso, la expresión 3 > 2 > 1 se evalúa primero como true > 1. /*El operador > devuelve un valor booleano, que puede ser true o false. En este caso, 3 > 2 es true, que se evalúa a 1. Entonces, la expresión se convierte en true > 1.  */
[] == ![]//error mal,?? un array vacio es igual en valor a un no array
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined
   console.log(foo());//nada | mal, es 2 ??? porque el hoisting tira para arriba el var como undefined y las funciones declarados como statement

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) { //aca el food es false pasado por parametro, entonces abajo no entra al if porque if de false no entra
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test()); //mal, es undefinded ??? porque estoy guardando la funcion, no lo que esta adentro
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing(); // 1 4 3 2 porque ya que tenga un event loop quiere decir que sale de la pila de compilacion y se ejecuta el resto
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
