//Incluyo el modulo que analiza las mutaciones.
const mutant = require('./lib/mutants.js');

//Matriz de ADN.
let adn = ['AAAT','CCGG','AAAA','GGCC'];

//Reviso si es mutante o no.
console.log(mutant.isMutant(adn));