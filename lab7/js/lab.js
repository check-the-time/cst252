/*
 * Author: Sebastian Tamiano & Marta Gubanova
 * Created: 22 September
 * License: Public Domain
 */

function sortUserName(userName) {
return userName.toLowerCase().split("").sort().join("");
}

function main() {
var userName = window.prompt("ALPHABETIZ-O-RAY! Enter any word to alphabotize it!");
document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
var sortedName = sortUserName(userName);
document.writeln("ZAP! Here's your alphabetized word: " + sortedName + "</br></br>");
}

main();
