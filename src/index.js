const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (i = 1; i <= expr.length / 10; i++) {
        let str = expr.slice((i - 1) * 10, i * 10);
        let letter = '';
        for (j = 0; j < 10; j += 2) {
            if (Number.parseInt(str.slice(j, j + 2)) === 10) {
                letter += ".";
            } else if (Number.parseInt(str.slice(j, j + 2)) === 11) {
                letter += "-";
            }
        }
        if (!letter) {
            result += " ";
        } else { result += MORSE_TABLE[letter] };
    }
    return result;
}

module.exports = {
    decode
}