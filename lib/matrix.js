/*
 *  matrix.js
 *
 *  Creado por Damián Cipolat
 *  @damcipolat
 *  Modulo con funciones para convertir el array de ADN en matriz y procesarlo.
 *
 */

//Recibo un array de strings y lo transformo a una matriz.
module.exports.adnArrayToMatrix = (adnArray)=>{
 
 let finalMtx = [];
 
 adnArray.forEach((adn)=>{
     
    let tmpArray = [];
     
    for(let i=0;i<=adn.length-1;i++)
       tmpArray.push(adn[i]);
    
    finalMtx.push(tmpArray);
     
 });

 return finalMtx;
 
}

//Extraigo la columa y la devuelvo como un array plano.
module.exports.extractCol = (matriz,nCol)=>{
    
  let groups = [];

  //Extraigo la columna entera.
  for (let i =0;i<=matriz.length-1;i++)
      groups.push(matriz[i][nCol]);
  
  return groups;

}

//Extraigo la fila y la devuelvo como un array plano.
module.exports.extractRow = (matriz,nRow)=>{
    
  let groups = [];

  //Extraigo la fila entera.
  for (let i =0;i<=matriz.length-1;i++)
      groups.push(matriz[nRow][i]);
  
  return groups;

}

//Extraigo las diagonal de la mitad superior en base al n° de columna.
module.exports.extractDiagSupCol = (matriz,nCol)=>{

  let line = [];

  for (let i=0;i<=matriz.length-nCol-1;i++)
    line.push(matriz[i][i+nCol]);

  return line;

}

//Extraigo la diagonal de la mitad inferior en base al n° de fila.
module.exports.extractDiagInfRow = (matriz,nRow)=>{

  let line = [];

  for (let i=0;i<=matriz.length-nRow-1;i++)
      line.push(matriz[i+nRow][i]);

  return line;

}