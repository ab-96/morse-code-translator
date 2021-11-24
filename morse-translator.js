//Translate each letter to morse code

export const translator = (message) => {
    //console.log("message", message)
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
    return morseCode[message]

    // if (message === "a") return morseCode.a;
    // if (message === "b") return morseCode.b;
    // if (message === "a") return morseCode.a;
    // if (message === "b") return morseCode.b;

}

export const translateWords = (message) => {
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

    let word = message.split("");
    console.log(word)

    const translated = word.map(letter => {
       
        letter = morseCode[letter];
        return letter;
        //console.log(letter);
        //console.log(letter.join('/'))
        
    })
    return translated.join("/")

 
}


const input = document.querySelector(".input-box");

