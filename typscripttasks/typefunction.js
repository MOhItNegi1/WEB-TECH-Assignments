"use strict";
const add = (a, b) => a + b;
console.log(add(10, 20));
const multiply = (a, b) => a * b;
console.log(multiply(5, 4));
const printMessage = (msg) => console.log(msg);
printMessage("Hello");
function addValues(a, b) {
    return a + b;
}
console.log(addValues(10, 20));
console.log(addValues("Hi ", "AP"));
function printValue(value) {
    console.log(value);
}
printValue("Hello");
printValue(100);
function getLength(value) {
    return value.length;
}
console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3, 4])); // 4
