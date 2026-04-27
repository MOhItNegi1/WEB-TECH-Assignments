// 1
interface Person {
    name: string;
    age: number;
}

const p1: Person = {
    name: "Pavan",
    age: 22
};

console.log(p1);


// 2
let statusvalue: "active" | "inactive";

statusvalue = "active";
statusvalue = "inactive";


// 3
interface Car {
    brand: string;
    model: string;
}

const car1: Car = {
    brand: "Toyota",
    model: "Innova"
};

const car2: Car = {
    brand: "Honda",
    model: "City"
};

console.log(car1, car2);


// 4
interface User {
    name: string;
}

const user1: User = {
    name: "AP"
};

console.log(user1);