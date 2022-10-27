'use strict';

/*Crea una función que redondee un número float a un número específico de decimales. La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales; Segundo parámetro es un int que indique el número de decimales al que redondear.
Evitar usar el método toFixed().
Ejemplo de uso de la función:
const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); //->2.12
const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); //->1.123457*/

function roundTo(num, decimals) {
   return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

console.log(roundTo(1.123456789, 6));