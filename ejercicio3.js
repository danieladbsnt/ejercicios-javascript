'use strict';

/*Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales*/
const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

const arrNoCapitales = arrCities.filter(city => {
    if (!city.capital) return console.log(city);
});