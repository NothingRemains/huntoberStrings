// DAY 3
// Function that replaces any of the key characters in a string with " "

function splitCharacters(str, decryptKey) {
    let keyCharsArray = decryptKey.split("")
    for (let i = 0; i < keyCharsArray.length; i++) {
        str = str.replaceAll(keyCharsArray[i] , ' ')
    }
    return str
}