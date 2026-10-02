export{};

function getValue<T>(value: T):T {
    return value;
}
console.log(getValue<number>(42)); // Output: 42
console.log(getValue<string>("Hello, TypeScript!")); // Output: Hello, TypeScript
console.log(getValue<boolean>(true));

function getFirst<T>(items: T[]): T {
    return items[0];
}

let numbers = [10, 20, 30];
let names = ["Mehedi", "Rahim", "Karim"];

console.log(getFirst(numbers));
console.log(getFirst(names));

function life<T>(value: T): T {
    return value;
}
let result1 = life<number>(100);
let result2 = life<string>("TypeScript Generics");
console.log(result1);
console.log(result2);