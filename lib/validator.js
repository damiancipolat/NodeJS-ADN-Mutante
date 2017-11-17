//Incluyo las clases con los validators.
const strValidator   = require('./validators/string.js');
const nitroValidator = require('./validators/nitroBase.js');
const nxnValidator   = require('./validators/nxn.js');

//Revisa si el array de ADN cumple con las validaciones.
module.exports.validateADN = (adnArray)=>{

  //Implemento el patron strategy para validar el array de ADN.
  let validArray = [strValidator, nitroValidator, nxnValidator];

  return validArray.every((validFn) => new validFn(adnArray).validate());

}