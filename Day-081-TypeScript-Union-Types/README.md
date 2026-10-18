# Day 81: TypeScript Union Types

## Overview

Today, I learned about Union Types in TypeScript. Union Types allow a variable, function parameter, or object property to accept more than one type.

I also practiced using Union Types with variables, functions, and interfaces, and learned how `typeof` can help narrow down a value's type.

## Topics Covered

- Union Types
- The union operator (`|`)
- Multiple types in a single variable
- Union Types in function parameters
- Union Types in interfaces
- Type checking with `typeof`
- Introduction to Type Narrowing

## 1. What Are Union Types?

A Union Type allows a variable to accept values of multiple specified types.

The `|` symbol is used to combine types.

```typescript
let studentId: number | string;

studentId = 101;
studentId = "STU101";
```

Both assignments are valid because the variable can hold either a number or a string.

## 2. Union Types with Multiple Types

A Union Type can contain more than two types.

```typescript
let studentInfo: string | number | boolean;

studentInfo = "Mehedi";
studentInfo = 23;
studentInfo = true;
```

The variable can accept any of the three declared types.

However, assigning a value of an unlisted type, such as an array, produces a TypeScript error.

## 3. Union Types in Functions

Union Types can also be used in function parameters.

```typescript
function displayId(id: number | string): void {
    console.log(id);
}

displayId(101);
displayId("STU101");
```

The function accepts either a number or a string.

Passing a boolean would produce a type error because it isn't included in the parameter's Union Type.

## 4. Union Types in Interfaces

Union Types can be used for properties inside interfaces.

```typescript
interface Student {
    name: string;
    id: number | string;
    department: string;
}

const student1: Student = {
    name: "Mehedi",
    id: 101,
    department: "CSE"
};

const student2: Student = {
    name: "Rahim",
    id: "STU102",
    department: "CSE"
};
```

Both objects satisfy the interface, even though their IDs have different types.

## 5. Introduction to Type Narrowing

When a variable has multiple possible types, TypeScript may prevent operations that are only valid for one of those types.

For example:

```typescript
let value: string | number;

value = "Hello";

// TypeScript cannot guarantee that value is a string.
```

We can use `typeof` to check the value's type.

```typescript
if (typeof value === "string") {
    console.log(value.toUpperCase());
} else {
    console.log(value.toFixed(2));
}
```

TypeScript understands that `value` is a string inside the first branch and a number inside the `else` branch.

This process is called Type Narrowing.

## 6. Practical Application: Student Information System

The practice exercise involved creating a student interface with the following properties:

- `name`: string
- `id`: number or string
- `age`: number
- `status`: "active" or "inactive"

The exercise also included creating student objects and a function that accepts either a number or a string as an ID.

## Key Takeaways

- Union Types allow a value to have multiple possible types.
- The `|` operator combines types.
- Union Types work with variables, function parameters, and interface properties.
- TypeScript prevents unsafe operations when a variable has multiple possible types.
- `typeof` can be used to check a value's type.
- Type Narrowing allows TypeScript to understand which type is being used in a particular branch.

## Day 81 Practice

- [x] Learned the Union Type operator.
- [x] Used Union Types with variables.
- [x] Used Union Types in function parameters.
- [x] Applied Union Types to interface properties.
- [x] Learned the basics of Type Narrowing.
- [x] Completed the student information exercise.

## Conclusion

Day 81 focused on Union Types in TypeScript. I learned how to allow multiple types for a single variable, use them in functions and interfaces, and check types with `typeof`.

These concepts will be useful when working with more complex data in React and full-stack applications.

**Next:** Day 82 — Type Narrowing and Type Guards