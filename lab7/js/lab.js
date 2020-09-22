/*
 * Author: Sebastian Tamiano & Marta Gubanova
 * Created: 19 September
 * License: Public Domain
 */


 // Function
function randomizeName(userName) {
var nameArray = userName.toLowerCase().split("");
console.log("nameArray =", nameArray);
var shuffledArray = shuffleArray(nameArray);
console.log("shuffledArray =", shuffledArray);
var shuffledString = shuffledArray.join("");
var newName = toTitleCase(shuffledString);
return newName;
 }
