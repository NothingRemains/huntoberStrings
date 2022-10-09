// Day 1:
// Inverse leetspeak-ish letters

function unLeetSpeak(str){
    // An array to contain the letters of the decoded string, to be returned later
    let decoded = []

    // An object that contains the translation for each letter (i.e., 0 should become O in the string).  It would be possible to just do 0 through 9 and use a function with Object.keys to reverse them instead of defining the reverse (O => 0), but the code would be much less clear.
    let dict = {
        '0': 'O',
        '1': 'I',
        '2': 'Z',
        '3': 'E',
        '4': 'h',
        '5': 'S',
        '6': 'G',
        '7': 'L',
        '8': 'B',
        '9': 'q',
        'O': '0',
        'I': '1',
        'Z': '2',
        'E': '3',
        'h': '4',
        'S': '5',
        'G': '6',
        'L': '7',
        'B': '8',
        'q': '9'
    }
    
    // Loops through the string and checks if each character is in dict, defined above.  If it is, we push the translated letter to the array.  If it isn't, the else pushes the letter itself instead.
    for (let letter = 0; letter < str.length; letter++) {
    		if (str[letter] in dict) {
            // Pushes the dict translation to decoded if it exists
        	decoded.push(dict[str[letter]])
        } else {
        	decoded.push(str[letter])
        }
    }

    return decoded.join("");
}