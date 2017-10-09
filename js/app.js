//creando una funcion cipher
var cipher= function(sentence){
  // declarando una variablen sentencesWithoutSpace y almaceno cada letra de la frase ingresada
  var sentencesWithoutSpace= sentence.split('');
  //creando una variable vacia para alamcenar cada letra encriptada
  var sentenceEncrypted='';
  //declarando una variable lettersAlphabet que contiene el abecedario
  var lettersAlphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// creadno un for para hacer el recorrido de las letras para eliminar los espacios vacios
  for(var j=0;j<sentencesWithoutSpace.length;j++)
  {
    //consicion para comparar si la letra es un espacio vacio
      if(sentencesWithoutSpace[j]===" ")
      {
        //eliminando el elemento que contiene espacio vacío

          sentencesWithoutSpace.splice(j,1);
          //se decremeneta para posicionarnos en la posicion actual, ya que se eliminó un elemento.
          j--;
      }
  }

  //pasar una cadena sentencesWithoutSpace a un string de nombre sentence
  sentence=sentencesWithoutSpace.join('');

  //hacer un recorrido de la frase que ya no contiene espacios vacios

  for(var i=0;i<sentence.length;i++)
  {
    //se almacena en numberLetterAscii el numero del codigo ascii que le corresponde a la letra
      numberLetterAscii=(sentence.charAt(i)).charCodeAt();
      //Busca la posicion de la letra en la variable lettersAlphabet donde se encuentran todos las letras del abecedario
      positionAlphabet=lettersAlphabet.indexOf(sentence.charAt(i));
      //Halla la nueva posicion en la variable lettersAlphabet
      newPosition=(positionAlphabet+numberLetterAscii)%26;
      //acumula la nueva letra encontrada.
      sentenceEncrypted+=lettersAlphabet.charAt(newPosition);

  }
  //Imprime la frase encriptada
  document.write(sentenceEncrypted);

}
//validacion de para el ingreso de la frase
do
{
  //Ingresa la frase
  var sentence= prompt('¿Cuál es tú frase?')
  //si la frase ingresada es vacia o es un numero
}while(sentence.length===0 || !isNaN(sentence))

cipher(sentence);
