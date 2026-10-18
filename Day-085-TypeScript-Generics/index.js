function getValue(value) {
    return value;
}
console.log(getValue(42)); // Output: 42
console.log(getValue("Hello, TypeScript!")); // Output: Hello, TypeScript
console.log(getValue(true));
function getFirst(items) {
    return items[0];
}
let numbers = [10, 20, 30];
let names = ["Mehedi", "Rahim", "Karim"];
console.log(getFirst(numbers));
console.log(getFirst(names));
function life(value) {
    return value;
}
let result1 = life(100);
let result2 = life("TypeScript Generics");
console.log(result1);
console.log(result2);
export {};
