import {translator} from './morse-translator.js';
import {it, expect} from '@jest/globals';

it ("should translate x to -..-", () => {
    const result = translator("x");
    expect(result).toBe("-..-");
})

// it ("should translate A to .-", () => {
//     const result = translator("A");
//     expect(result).toBe(".-");
// })

// it ("should translate yes to -.--/./...", () => {
//     const result = translator("yes");
//     expect(result).toBe("-.--/./...");
// })