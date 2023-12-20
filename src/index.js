import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Registrar el texto que el usuario ingresa
//Variable con el texto del usuario

const inputText = document.querySelector("textarea[name='user-input']");
let texto;
function capture_input(){
  texto = inputText.value;
}
inputText.addEventListener('input',capture_input);

//Limpiar el valor de la caja de texto
function clear_textarea(){
  inputText.value = '';
}
document.getElementById('reset-button').addEventListener('click',clear_textarea);

//Colocar el resultado

const characterCountLi = document.querySelector(".lista[data-testid='character-count']");
const characternoCountLi = document.querySelector(".lista[data-testid='character-no-spaces-count']");
const wordCountLi = document.querySelector(".lista[data-testid='word-count']");
const numberCountLi = document.querySelector(".lista[data-testid='number-count']");
const numberSumLi = document.querySelector(".lista[data-testid='number-sum']");
const wordAverageLi = document.querySelector(".lista[data-testid='word-lenght-average']");

inputText.addEventListener('input',() => {  
  const totalCharacter = analyzer.getCharacterCount(texto);
  const totalCharacterNo = analyzer.getCharacterCountExcludingSpaces(texto);
  const totalWords = analyzer.getWordCount(texto);
  characterCountLi.textContent = `Caracteres: ${totalCharacter}`;
  characternoCountLi.textContent = `Caracteres sin espacios: ${totalCharacterNo}`;
  wordCountLi.textContent = `Palabras: ${totalWords}`;

  console.log(totalCharacter);
});