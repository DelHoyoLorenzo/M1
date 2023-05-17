'use strict';

function BinarioADecimal(num) {
  let array = num.toString().split('').map(Number);
  let i = array.length-1;
  let suma = 0;
  let j=0;

   while(i>-1){
      if(array[i]===1){
         suma += 2**j;
      }
      i--;
      j++;
  }
  return suma;
}

function DecimalABinario(num) {
   let i=0;
   let array=[];
  while(num >= 1){
   if(num % 2 >= 0.5){
      array.unshift(1);
   }else{
      array.unshift(0);
   }
   num=Math.trunc(num/2);
  }
  return array.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
