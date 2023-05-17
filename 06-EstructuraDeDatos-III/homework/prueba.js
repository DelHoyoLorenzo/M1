array=[5,1,4,2,8];
console.log(array.length);
function divide(array){
   //corte:
   if(array.length<=1){
     return array;
   }else{
   let medio= Math.floor(array.length/2);
   divide(array.slice(0,medio+1));
   divide(array.slice(medio,array.lenght+1));
   }
 }
 console.log(divide(array));