import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Registrar el texto que el usuario ingresa
//Variable con el texto del usuario
//Variable con el boton para limpiar el texto

const inputText = document.querySelector("textarea[name='user-input']");
const button =document.getElementById("reset-button");

//Definir las variables de los contadores
let texto;
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
  ".lista[data-testid='word-lenght-average']"
);
  

function capture_input() {
  texto = inputText.value;
}
inputText.addEventListener("input", capture_input);

//Limpiar el valor de la caja de texto
function clear_textarea() {
  inputText.value = "";
  totalCharacter = "";
  totalCharacterNo = "";
  totalWords = "";
  totalNumbers= "";
  totalSum="";
  averageLength="";
  characterCountLi.innerHTML = `Caracteres: ${totalCharacter}`;
  characternoCountLi.innerHTML = `Caracteres sin espacios: ${totalCharacterNo}`;
  wordCountLi.innerHTML = `Palabras: ${totalWords}`;
  numberCountLi.innerHTML= `Números: ${totalNumbers}`;
  numberSumLi.innerHTML= `Suma números: ${totalSum}`;
  averageLengthLi.innerHTML= `Promedio longitud: ${averageLength}`

}


button.addEventListener("click", clear_textarea);

inputText.addEventListener("input", () => {
  totalCharacter = analyzer.getCharacterCount(texto);
  totalCharacterNo = analyzer.getCharacterCountExcludingSpaces(texto);
  totalWords = analyzer.getWordCount(texto);
  totalNumbers = analyzer.getNumberCount(texto);
  totalSum = analyzer.getNumberSum(texto);
  averageLength = analyzer.getAverageWordLength(texto);
  characterCountLi.innerHTML = "Caracteres: " + totalCharacter;
  characternoCountLi.innerHTML = "Caracteres sin espacios: " + totalCharacterNo;
  wordCountLi.innerHTML = "Palabras: " + totalWords;
  numberCountLi.innerHTML= "Números: " + totalNumbers;
  numberSumLi.innerHTML = "Suma: " + totalSum;
  averageLengthLi.innerHTML = "Longitud Promedio: " + averageLength;
});
