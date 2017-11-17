/*
 *  nxn.js
 *
 *  Creado por Damián Cipolat
 *  @damcipolat
 * Valida que la matriz de ADN sea de la forma nxn.
 *
 */

module.exports = class nxnValidator{

  constructor(matrix){

    this.matrix = matrix;

  }

  //Reviso que todas las filas tengan el mismo largo.
  rowsEqualSize(matrix){

    //Obtengo un array con todos largos de cada cadena.
    let lengthArray = matrix.map((adn) => adn.length);

    //Verifico que todos elementos sean iguales al primero.
    if (lengthArray.length>0)
      return lengthArray.every((elem) => (elem==lengthArray[0]));
    else
      return false;

  }  

  validate(){

    //Reviso que todas las filas tengan el mismo largo.
    if (this.rowsEqualSize(this.matrix))    
      return (this.matrix.length == this.matrix[0].length);  
    else
      return false;

  }

}