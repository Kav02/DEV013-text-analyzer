import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Registrar el texto que el usuario ingresa
//Variable con el texto del usuario

const inputText = document.querySelector("textarea[name='user-input']");
let texto;
let totalCharacter;
let totalCharacterNo;
let totalWords;
let totalNumbers;
let totalSum;
let averageLength;

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
  characterCountLi.textContent = `Caracteres: ${totalCharacter}`;
  characternoCountLi.textContent = `Caracteres sin espacios: ${totalCharacterNo}`;
  wordCountLi.textContent = `Palabras: ${totalWords}`;
  numberCountLi.textContent= `Números: ${totalNumbers}`;
  numberSumLi.textContent= `Suma números: ${totalSum}`;
  averageLengthLi.textContent= `Promedio longitud: ${averageLength}`

}

const button =document.getElementById("reset-button")
button.addEventListener("click", clear_textarea);

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

inputText.addEventListener("input", () => {
  totalCharacter = analyzer.getCharacterCount(texto);
  totalCharacterNo = analyzer.getCharacterCountExcludingSpaces(texto);
  totalWords = analyzer.getWordCount(texto);
  totalNumbers = analyzer.getNumberCount(texto);
  totalSum = analyzer.getNumberSum(texto);
  averageLength = analyzer.getAverageWordLength(texto);
  characterCountLi.textContent = `Caracteres: ${totalCharacter}`;
  characternoCountLi.textContent = `Caracteres sin espacios: ${totalCharacterNo}`;
  wordCountLi.textContent = `Palabras: ${totalWords}`;
  numberCountLi.textContent= `Numeros: ${totalNumbers}`;
  numberSumLi.textContent= `Suma números: ${totalSum}`;
  averageLengthLi.textContent= `Promedio longitud: ${averageLength}`
});
