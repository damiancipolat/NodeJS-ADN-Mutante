/*
 *  mutation.js
 *
 *  Creado por Damián Cipolat
 *  @damcipolat
 *  Incluye funciones para validar las mutaciones.
 *
 */

//Incluyo los modulos.
const validator  = require('./validator.js');
const matrix     = require('./matrix.js');

//Extraigo las diagonales de la matriz
const extractDiags = (matriz) => {

  let tiras = [];

  //Traigo la diagonal superior.
  matriz.forEach((col,i) => tiras.push(matrix.extractDiagSupCol(matriz,i)) );

  //Traigo la diagonal inferior.
  matriz.forEach((row,i)=>{ 

    if (i>0)
      tiras.push(matrix.extractDiagInfRow(matriz,i)); 

  });

  return tiras;

}

//Extraigo las columnas.
const extractCols = (matriz)=>{

  return matriz.map((col,i) => matrix.extractCol(matriz,i) );

}


//Extraigo las filas.
const extractRows = (matriz)=>{

  return matriz.map((col,i) => matrix.extractRow(matriz,i) );

}

//Recorre buscando secuencias consecutivas con una cantidad mayor o igual a tope.
const checkConsecutive = (lineArray,tope) => {

  let last   = '';
  let actual = '';
  let count  = 0;

  for (let i=0;i<=lineArray.length-1;i++){
          
      last   = (i==0)?lineArray[0]:lineArray[i-1];
      actual = lineArray[i];
      
      if (last==actual){
          count++;
                      
        if (count==tope)
          return true;
          
      }
      
  }

  return false;

}

//Dice si es una matriz es mutante o no.
module.exports.isMutant = (matriz)=>{

    //Traigo las diagonales.
    let diags = extractDiags(matriz);

    //Traigo las columnas.
    let cols  = extractCols(matriz);

    //Traigo las filas.
    let rows  = extractRows(matriz);

    //Filtro las filas que son consecutivas.
    return ( [...diags,...cols,...rows].find((line) => checkConsecutive(line,4)).length > 0);
}