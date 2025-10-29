const a  = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log("Name: " + a.name);
a.greet();
let str = "Apple, Banana, Cherry";

console.log(str.slice(0,5));
console.log(str.substring(7,13));
console.log(str.replace("Banana", "Orange"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.concat(" is my favorite fruit."));
console.log(str.indexOf("Cherry"));
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.split(", "));
console.log(str.indexOf("Banana"));
console.log(str.lastIndexOf("a"));
console.log(str.search("Cherry"));
console.log(str.startsWith("Apple"));
console.log(str.endsWith("Cherry"));
console.log(str.includes("Banana"));
console.log(str.repeat(2));