// Day 4
// Remove every n-th letter (n) from a string (str) and return it!

function removeIndexedLetters(str, n) {
	return str.split("").filter((_,ind) => (ind+1)%n !== 0 ).join("")
}