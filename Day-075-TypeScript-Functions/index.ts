function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10)); 
function multiply(a: number, b: number): number {
    return a * b;
}
console.log(multiply(6, 4));
console.log(multiply(10, 3));
function greet(name?: string): string {
    if (name) {
        return "Hello " + name;
    }

    return "Hello Guest";
}
console.log(greet("John"));
console.log(greet());

function welcomeStudent(Name?: string): string {
    if(Name){
        return "Welcome " + Name;
    }
    return "Welcome Guest";
}
console.log(welcomeStudent("Mehedi"));
function introduce(name: string = "Student", age: number = 18): string {
    return "My name is " + name + " and I am " + age + " years old.";
}
console.log(introduce("Mehedi", 23));

console.log(introduce("Rahim"));

console.log(introduce());
function square(number: number) {
    return number * number;
}

function getMessage() {
    return "Hello TypeScript";
}

function isAdult(age: number) {
    return age >= 18;
}