/*
 *  nitroBase.js
 *
 *  Creado por Damián Cipolat
 *  @damcipolat
 *  Valido que todas las cadenas tengan bases nitrogenadas permitidas.
 *
 */

//Traigo las bases nitrogenadas.
const basesNitrogenadas = require('../constants.js').nitroBases;

module.exports = class nitrogenateBaseValidator{

  constructor(matrix){

    this.matrix = matrix;

  }

  validateSimbols(adnStr){

    for (let i=0;i<=adnStr.length-1;i++)
      if (!basesNitrogenadas.includes(adnStr[i]))
        return false;

    return true;

  }

  validate(){

    //Armo un array con los resultados de validar cada adn.
    let resu = this.matrix.map((adn) => this.validateSimbols(adn));

    //Reviso que todas las cadenas cumplan.
    return resu.every((stat) => stat==true);

  }

}