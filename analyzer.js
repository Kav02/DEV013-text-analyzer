const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const nwords = text.split(" ");
    if (nwords){
      let words = 0;
      for (let i = 0; i< nwords.length; i++){
        words++;
      }
      return words;
    }
    else {
      return 0;
    }
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length; //Se usa length para obtener el total de caracteres
    
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //Remover los espacios
    
    const withoutSpaces = text
      .replace(/[^\w]/g, "") //Busca lo que no son letras, ni numeros y los reemplaza por un vacío. [^] Sirve para indicar que busque lo opuesto. \w es para alfanumérico y \s espacios en blanco 
    //.replace(/\s/g, ""); // Busca los espacios en blanco /\s/, la g indica global para que busque todos y "" elimina estos espacios
    return withoutSpaces.length; //Contar sin espacios
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //Total de caracteres sin espacios dividido entre la cantidad de palabras
    const sumCaracteres = text.replace(/ /g,"").length;
    const sumWords = analyzer.getWordCount(text);
    const averageWords = sumCaracteres / sumWords;
    const promedioPalabras = averageWords.toFixed(2);
    return Number(promedioPalabras);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    /* \b: Busca límite de palabra. \d+: Busca los numeros (0-9). (\.\d+)?: Busca un punto seguido de uno o más numeros. 
    El ? al final es para que sea opcional, busca enteros o decimales. 
    | es un "o" y busca la coincidencia en el otro lado del punto. 
    \d+\b Busca el final del numero.*/
    const countNumbers = (text.match(/\b\d+(\.\d+)?\b|\.\d+\b/g) || []).length; //d+ busca los numeros y || [] devuelve un array vacio
    return countNumbers;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;
    for (const matrizNumbers of text.match(/\b\d+(\.\d+)?\b|\.\d+\b/g) || []) { //Se usa for of porque debe recorrer el array
      sum += Number(matrizNumbers);
    }
    return sum;
    
  },
};

export default analyzer;
