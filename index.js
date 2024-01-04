import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Registrar el texto que el usuario ingresa
//Variable con el texto del usuario
//Variable con el boton para limpiar el texto

const textarea = document.querySelector("textarea[name='user-input']");
const button =document.getElementById("reset-button");

//Definir las variables de los contadores

let totalCharacter;
let totalCharacterNo;
let totalWords;
let totalNumbers;
let totalSum;
let averageLength;

//Colocar el resultado

const characterCountLi = document.querySelector(
  ".lista[data-testid='character-count']"
);
const characternoCountLi = document.querySelector(
  ".lista[data-testid='character-no-spaces-count']"
);
const wordCountLi = document.querySelector(".lista[data-testid='word-count']");
const numberCountLi = document.querySelector(
  ".lista[data-testid='number-count']"
);
const numberSumLi = document.querySelector(".lista[data-testid='number-sum']");
const averageLengthLi = document.querySelector(
  ".lista[data-testid='word-length-average']"
);
  

//function capture_input() {
//  texto = textarea.value;
//}
//textarea.addEventListener("input", capture_input);
textarea.addEventListener("input", () => {
  totalCharacter = analyzer.getCharacterCount(textarea.value);
  totalCharacterNo = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  totalWords = analyzer.getWordCount(textarea.value);
  totalNumbers = analyzer.getNumberCount(textarea.value);
  totalSum = analyzer.getNumberSum(textarea.value);
  averageLength = analyzer.getAverageWordLength(textarea.value);
  characterCountLi.innerHTML = "Caracteres: " + totalCharacter;
  characternoCountLi.innerHTML = "Caracteres sin espacios: " + totalCharacterNo;
  wordCountLi.innerHTML = "Palabras: " + totalWords;
  numberCountLi.innerHTML= "Números: " + totalNumbers;
  numberSumLi.innerHTML = "Suma: " + totalSum;
  averageLengthLi.innerHTML = "Longitud Promedio Palabra: " + averageLength;
});
  
//Limpiar el valor de la caja de texto
function clear_textarea() {
  textarea.value = "";
  totalCharacter = 0;
  totalCharacterNo = 0;
  totalWords = 0;
  totalNumbers = 0;
  totalSum = 0;
  averageLength = 0;
  characterCountLi.innerHTML = "Caracteres: " + totalCharacter;
  characternoCountLi.innerHTML = "Caracteres sin espacios: " + totalCharacterNo;
  wordCountLi.innerHTML = "Palabras: " + totalWords;
  numberCountLi.innerHTML= "Números: " + totalNumbers;
  numberSumLi.innerHTML = "Suma: " + totalSum;
  averageLengthLi.innerHTML = "Longitud Promedio: " + averageLength;
}
button.addEventListener("click", clear_textarea);
