/*
 *  string.js
 *
 *  Creado por Damián Cipolat
 *  @damcipolat
 *  Valida que todos los elementos de la cadena sean strings.
 *
 */

module.exports = class stringsValidator{

  constructor(matrix){

    this.matrix = matrix;

  }

  validate(){

    return this.matrix.every((adn) => (typeof adn ==='string') );

  }

}