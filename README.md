# NodeJS-ADN-Mutante

![N|Solid](https://cdn1.lockerdomecdn.com/uploads/20f62ebf6c55abdb90df4ca43968f6dfbbeb1f9180a828d324a96327525042f9_large)

- ### Enunciado:
Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar contra los X-Men.
Te ha contratado a ti para que desarrolles un proyecto que detecte si un humano es mutante basándose en su secuencia de ADN.
Para eso te ha pedido crear un programa con un método o función con la siguiente firma:

##### boolean isMutant(string dna);

En donde recibirás como parámetro un array de Strings que representan cada fila de una matriz de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representa cada base nitrogenada del ADN.

###### NO MUTANTE

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | T | T |
| A | G | A | C | G | G |
| G | C | G | T | C | A |
| T | C | A | C | T | G |

###### MUTANTE

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | G | T |
| A | G | A | A | G | G |
| C | C | C | C | T | A |
| T | C | A | C | T | G |

Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras
iguales, de forma oblicua, horizontal o vertical.

Ejemplo (Caso mutante):

##### String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};

En este caso el llamado a la función isMutant(dna) devuelve “true”.
Desarrolla el algoritmo de la manera más eficiente posible.

## Desafío:

Programa (en cualquier lenguaje de programación) que cumpla con el método pedido por Magneto.

## Resultado:

```sh
Para ejecutar:
$ node app.js
```

Ejemplo de uso:
```sh
//Incluyo el modulo que analiza las mutaciones.
const mutant = require('./lib/mutants.js');

//Matriz de ADN.
let adn = ['AAAT','CCGG','AAAA','GGCC'];

//Reviso si es mutante o no.
console.log(mutant.isMutant(adn));
```
