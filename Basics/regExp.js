 // /patter/moduler

let text = "visit Microsoft and microsoft!";
console.log(text.search("microsoft"));
console.log(text.search(/MICROSOFT/i));

console.log(text.replace(/MICROSOFT/i, "W3Schools"));
console.log(text.replace(/MICROSOFT/gi, "W3Schools"));