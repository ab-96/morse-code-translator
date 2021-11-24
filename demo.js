const output = document.querySelector(".output");
const input = document.querySelector("input");
const translate = document.querySelector(".translate")
const reset = document.querySelector(".reset")

const translateWords = (message) => {
    const morseCode = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
    }
    const word = message.split("");
    const translated = word.map(letter => {

        const newLetter = letter.toLowerCase();
        letter = morseCode[newLetter];
        return letter;
    })
    return translated.join("/");
}

translate.addEventListener("click", () => {
    output.innerHTML = translateWords(input.value);
})

reset.addEventListener("click", () => {
    output.innerHTML = "";
    input.value = "";
})
