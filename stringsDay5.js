// DAY 5
// Too many conditionals

function catastrophe(puns) {
    let validPuns = puns.slice().split(',')
    // Remove untrimmed puns
    validPuns = validPuns.filter(pun => pun.trim() === pun)
    // Remove puns containg 'dog', 'bark', or 'bone', case insensitive
    validPuns = validPuns.filter(pun => includesDogWords(pun) === false)
    // Remove puns with total length of a multiple of 5
    validPuns = validPuns.filter(pun => pun.length % 5 !== 0)
    // Sum of the first and last letter charCodes is odd
    validPuns = validPuns.filter(pun => charCodeSum(pun) % 2 === 1 )
    // Middle character cannot be 'e'
    validPuns = validPuns.filter(pun => pun[Math.ceil(pun.length/2)] !== 'e')
    // Must have 2+ capital letters
    validPuns = validPuns.filter(pun => numberOfCapitalLetters(pun) >= 1)
    // Must not contain a capital S
    validPuns = validPuns.filter(pun => !(pun.includes('S')))
    // Must have an even number of lowercase letters
    validPuns = validPuns.filter(pun => oddLowercaseCount(pun) === 0)

    return validPuns
}

function includesDogWords(str) {
    const badWords = ['dog', 'bark', 'bone']
    for (let badWord = 0; badWord < badWords.length; badWord++) {
        let regex = new RegExp(badWords[badWord],"ig")
        if (str.match(regex) !== null) return true;
    }
    return false;
}

function charCodeSum(str) {
    return (str.charCodeAt(0) + str.charCodeAt(str.length-1))
}

function oddLowercaseCount(str) {
    let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    let lowercaseCount = 0

    for(let char = 0; char < str.length; char++) {
        if (lowercaseChars.includes(str[char])){
            lowercaseCount++
        }
    }
    return (lowercaseCount % 2)
}    

function numberOfCapitalLetters(str) {
    return str.replaceAll(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '').length
}