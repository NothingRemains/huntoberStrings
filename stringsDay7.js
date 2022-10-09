// Day 7
// Reverse case and letters

//Creates a dictionary of letter analogues (helper function)
function createDict() {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = lowercase.toUpperCase()
    const lowerReverse = lowercase.split("").reverse().join("")
    const upperReverse = lowerReverse.toUpperCase()
  
    const dict = {}
  
    for(let i = 0; i < lowercase.length; i++) {
        dict[lowercase[i]] = upperReverse[i];
        dict[uppercase[i]] = lowerReverse[i]
    }
    return dict
}

//Uses the helper function to create dictionary, then checks each string, adding the dictionary analogue to the string, or the character itself if it's not in the dictionary, returning the resulting string.
function replaceLetters(str) {
	const dict = createDict()
    let out = ""
    
    for (let i = 0; i < str.length; i++) {
        out = out + (dict[str[i]] || str[i])
    }

    return out
}