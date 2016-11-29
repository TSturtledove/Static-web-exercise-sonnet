// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML
console.log(theSonnet);

// Find and output the starting position of the word "orphans"

console.log("orphans", theSonnet.indexOf("orphans"))


// Output the number of characters in the sonnet
var numOfCharacters = theSonnet.length
console.log("numOfCharacters", numOfCharacters)


// Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = theSonnet.replace(/winter/i, "yuletide")
console.log(newSonnet)

// Replace all occurances of the string "the" with "a large"
newSonnet = newSonnet.split(" the ").join(" a large ").split("The ").join("A large ")
console.log(newSonnet)

// Set the content of the sonnet div with the new string

//this replaces the html

document.getElementById("sonnet").innerHTML = newSonnet
