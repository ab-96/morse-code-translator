import {translator} from './morse-translator.js';
import {it, expect} from '@jest/globals';

it ("should translate x to -..-", () => {
    const result = translator("x");
    expect(result).toBe("-..-");
})

it ("should translate a to .-", () => {
    const result = translator("a");
    expect(result).toBe(".-");
})

it ("should translate yes to -.--/./...", () => {
    const result = translator("yes");
    expect(result).toBe("-.--/./...");
})