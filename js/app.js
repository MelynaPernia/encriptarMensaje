//Creando una funcion cipher con un parametro
var cipher= function(sentence){
  // Declarando una variable sentencesWithoutSpace y almacena cada letra de la frase ingresada
  var sentencesWithoutSpace= sentence.split('');
  //Creando una variable vacía sentenceEncrypted
  var sentenceEncrypted='';
  //Declarando una variable de tipo string llamada lettersAlphabet que contiene el abecedario
  var lettersAlphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Creadno un bucle for que recorre el arreglo sentencesWithoutSpace
  for(var j=0;j<sentencesWithoutSpace.length;j++)
  {
    //Creando una condición para validar si los elementos del arreglo es vacío
      if(sentencesWithoutSpace[j]===" ")
      {
          //Eliminando el elemento que contiene espacio vacío
          sentencesWithoutSpace.splice(j,1);
          //Se decrementa en uno para posicionarnos en la posición actual, ya que se eliminó un elemento.
          j--;
      }
  }

  //En la variable sentence se almacena como string el arreglo sentencesWithoutSpace
  sentence=sentencesWithoutSpace.join('');
  //Creando un bucle para hacer un recorrido de la frase que ya no contiene espacios vacios
  for(var i=0;i<sentence.length;i++)
  {
      //En la variable numberLetterAscii se almacena el número del código ascii que le corresponde a la letra
      numberLetterAscii=(sentence.charAt(i)).charCodeAt();
      //Se almacena en la variable positionAlphabet la posición de la letra que se encuentra en la variable lettersAlphabet
      positionAlphabet=lettersAlphabet.indexOf(sentence.charAt(i));
      //en la variable newPosition le asigna la nueva posicion de la letra.
      newPosition=(positionAlphabet+numberLetterAscii)%26;
      //En una variable de tipo string llamada sentenceEncrypted acumula la nueva letra encontrada.
      sentenceEncrypted+=lettersAlphabet.charAt(newPosition);

  }
  //Escribe la frase encriptada;
  document.write(sentenceEncrypted);

}

//Validacion de para el ingreso de la frase

do
{
  //Creando la variable sentence para ingresar la frase
  var sentence= prompt('¿Cuál es tú frase?')
  //Mientras la longitud de la frase es igual a cero o No es un NaN
}while(sentence.length===0 || !isNaN(sentence))

// Llamando a la función cipher
cipher(sentence);
