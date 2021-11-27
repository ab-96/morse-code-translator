//English to Morse Code function
import {translateWords} from './morse-translator.js';

const output = document.querySelector(".output");
const input = document.querySelector("input");
const translate = document.querySelector(".translate")
const reset = document.querySelector(".reset")


translate.addEventListener("click", () => {
    output.innerHTML = translateWords(input.value);
})

reset.addEventListener("click", () => {
    output.innerHTML = "";
    input.value = "";
})
