# Day 85 — TypeScript Generics

## Overview

Today, I learned about **Generics** in TypeScript. Generics allow me to create reusable functions that work with different data types while maintaining type safety.

I practiced generic functions, type parameters, type inference, and using generics with arrays.

## What I Learned

### 1. The Problem Generics Solve

Without generics, I might need separate functions for different data types.

```ts
function getNumber(value: number): number {
    return value;
}

function getString(value: string): string {
    return value;
}

function getBoolean(value: boolean): boolean {
    return value;
}
```

These functions perform the same operation but are written separately for different types.

Generics solve this problem by allowing one function to work with multiple types.

### 2. What Are Generics?

Generics allow us to create reusable functions and types that work with different data types without losing type safety.

A generic function uses a type parameter, commonly represented by `T`.

```ts
function getValue<T>(value: T): T {
    return value;
}
```

Here:

- `<T>` declares a generic type parameter.
- `value: T` means the parameter has type `T`.
- `: T` means the function returns a value of type `T`.

The letter `T` is a placeholder for a type. It is not a special built-in type.

### 3. Using Generic Functions

A generic function can work with different types.

```ts
function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<number>(100));
console.log(getValue<string>("Hello"));
console.log(getValue<boolean>(true));
```

Output:

```text
100
Hello
true
```

The same function works with numbers, strings, and booleans.

We can explicitly specify the type using `<number>`, `<string>`, or `<boolean>`.

### 4. Type Inference with Generics

TypeScript can automatically determine the generic type from the argument.

```ts
function getValue<T>(value: T): T {
    return value;
}

let numberResult = getValue(100);
let stringResult = getValue("Hello");
```

In the first call, TypeScript infers `T` as `number`.

In the second call, TypeScript infers `T` as `string`.

We don't need to explicitly write the generic type when TypeScript can infer it.

### 5. Type Inference with Arrays

TypeScript can automatically infer the types of arrays from their initial values.

```ts
let numbers = [10, 20, 30];
let names = ["Mehedi", "Rahim", "Karim"];
```

TypeScript infers:

- `numbers` as `number[]`
- `names` as `string[]`

These are equivalent to explicitly declaring the types:

```ts
let numbers: number[] = [10, 20, 30];
let names: string[] = ["Mehedi", "Rahim", "Karim"];
```

Both approaches are valid.

Type inference is useful when the type is obvious from the initial values. Explicit types are useful when we want to specify the expected type, such as when creating an empty array.

### 6. Generics with Arrays

Generics can also be used with arrays.

```ts
function getFirst<T>(items: T[]): T {
    return items[0];
}

let numbers = [10, 20, 30];
let names = ["Mehedi", "Rahim", "Karim"];

console.log(getFirst(numbers));
console.log(getFirst(names));
```

Output:

```text
10
Mehedi
```

Here:

- `T[]` represents an array of values of type `T`.
- `: T` means the function returns an element of that type.
- When we pass a number array, TypeScript infers `T` as `number`.
- When we pass a string array, TypeScript infers `T` as `string`.

The function works with both arrays while preserving their element types.

### 7. Type Inference and Generics Together

Type inference and generics work together.

Consider:

```ts
function getFirst<T>(items: T[]): T {
    return items[0];
}

let scores = [10, 20, 30];

let result = getFirst(scores);
```

The process is:

1. TypeScript infers `scores` as `number[]`.
2. The array is passed to `getFirst()`.
3. TypeScript infers `T` as `number`.
4. The function returns a value of type `number`.
5. The variable `result` is inferred as `number`.

We don't have to explicitly declare the array type or specify the generic type argument in this example.

### 8. Explicit Types vs Type Inference

Both approaches are valid.

**Explicit type declaration:**

```ts
let numbers: number[] = [10, 20, 30];
let result = getFirst<number>(numbers);
```

**Type inference:**

```ts
let numbers = [10, 20, 30];
let result = getFirst(numbers);
```

TypeScript can infer the types in the second example.

However, explicitly declaring the type can be useful when the type cannot be determined clearly from the initial values.

For example:

```ts
let scores: number[] = [];
```

An empty array has no initial elements from which to infer the intended element type.

### 9. Generic Function Parameters

A generic function can accept a value of any inferred type while maintaining the relationship between its input and output.

```ts
function identity<T>(value: T): T {
    return value;
}
```

The function returns the same value it receives, preserving its type.

This is useful when building reusable functions that should work with different data types.

## Practice: Reusable Data Functions

### Task 1 — identity()

Create a generic function named `identity`.

Requirements:
- Accept one parameter of type `T`.
- Return the same value.
- Test it with a number, string, and boolean.

### Task 2 — getFirstItem()

Create a generic function named `getFirstItem`.

Requirements:
- Accept an array of type `T[]`.
- Return the first item.
- Test it with an array of numbers and an array of strings.

### Task 3 — displayValue()

Create a generic function named `displayValue`.

Requirements:
- Accept a generic value of type `T`.
- Print the value using `console.log()`.
- Test it with at least two different data types.

### Bonus Practice

Call `getFirstItem()` with an empty array.

Observe what happens when the code is compiled and executed.

An empty array has no first element, so the function may return `undefined` at runtime.

## Key Takeaways

- Generics allow reusable functions to work with different data types.
- `T` is a type parameter and acts as a placeholder for a type.
- Generic functions preserve type information.
- TypeScript can infer generic types from function arguments.
- TypeScript can infer array types from their initial values.
- `T[]` represents an array of values of type `T`.
- Explicit type declarations are still useful when the intended type is not obvious.
- Generics and type inference work together to reduce unnecessary type annotations.

## Day 85 Completion

**Topic:** TypeScript Generics  
**Status:** Completed  
**Next:** Generics with Functions and Interfaces