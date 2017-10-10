####Pseudocódigo del programa Encriptar Mensaje
*Pseudocodigo para ingresar*
1. Hacer
  1. Leer sentence

2. Mientras (sentence.length===0 || !isNaN(sentence))

*Pseudocódigo de la función cipher*
1. Funcion cipher
  1. sentencesWithoutSpace= split(sentence);
  2. sentenceEncrypted='';
  3. lettersAlphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  4. Para j=0 Hasta sentencesWithoutSpace.length Con Paso 1 Hacer
    1. Si (sentencesWithoutSpace[j]===" ")
        1. sentencesWithoutSpace.splice(j,1);
        2. j--;
    2. Fin Si
  5. Fin Para
  6. sentence=sentencesWithoutSpace.join;
  7. Para i=0 Hasta sentence.length Con Paso 1 Hacer
    1. numberLetterAscii=(sentence.charAt(i)).charCodeAt();
    2. positionAlphabet=lettersAlphabet.indexOf(sentence.charAt(i));
    3. newPosition=(positionAlphabet+numberLetterAscii)%26;
    4. sentenceEncrypted+=lettersAlphabet.charAt(newPosition);
  8. Fin Para
  9. Escribir sentenceEncrypted;

2. Fin funcion
