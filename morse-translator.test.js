import {translateWords, translator} from './morse-translator.js';
import {it, expect} from '@jest/globals';

it ("should translate x to -..-", () => {
    const result = translator("x");
    expect(result).toBe("-..-");
})

it ("should translate a to .-", () => {
    const result = translator("a");
    expect(result).toBe(".-");
})

it ("should translate h to ....", () => {
    const result = translator("h");
    expect(result).toBe("....");
})

it ("should translate yes to -.--....", () => {
    const result = translateWords("yes");
    expect(result).toBe("-.--....");
})
