/*
 *  mutant.js
 *
 *  Creado por Damián Cipolat
 *  @damcipolat
 *  Modulo con algoritmos para detectar si es mutante o no.
 *
 */

//Incluyo el modulo con los algoritmos que revisan las mutaciones.
const mutation = require('./mutation.js');
const matriz   = require('./matrix.js');

class mutant{

    //Dice si el array de adn es mutante o no.
    isMutant(adnArray){

      //Transformo el de array de strings a una matriz.
      let adnMatriz = matriz.adnArrayToMatrix(adnArray);

      //Reviso si es mutante o no.
      return mutation.isMutant(adnMatriz);

    }

}

module.exports = new mutant();