'use strict';

/*Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función:
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }*/

const myObj = {
    NamE: 'Charles', 
    ADDress: 'Home Street'
  }

function toLowerCaseKeys(obj) {
   return Object.keys(obj).reduce((acc, key) => {
    acc[key.toLocaleLowerCase()] = obj[key];
    return acc;
  }, {})
}

toLowerCaseKeys(myObj);