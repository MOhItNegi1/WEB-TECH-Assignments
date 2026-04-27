// Q1
type AddFunc = (a: number, b: number) => number;
const add: AddFunc = (a, b) => a + b;
console.log(add(10, 20));

// Q2
type MultiplyFunc = (a: number, b: number) => number;
const multiply: MultiplyFunc = (a, b) => a * b;
console.log(multiply(5, 4));

// Q3
type PrintFunc = (msg: string) => void;
const printMessage: PrintFunc = (msg) => console.log(msg);
printMessage("Hello");

// Q4
function addValues(a: number, b: number): number;
function addValues(a: string, b: string): string;
function addValues(a: any, b: any): any {
    return a + b;
}
console.log(addValues(10, 20));
console.log(addValues("Hi ", "AP"));

// Q5
function printValue(value: string): void;
function printValue(value: number): void;

function printValue(value: any): void {
    console.log(value);
}

printValue("Hello");
printValue(100);


//Q6

function getLength(value: string): number;
function getLength(value: any[]): number;

function getLength(value: any): number {
    return value.length;
}

console.log(getLength("Hello"));      // 5
console.log(getLength([1, 2, 3, 4])); // 4