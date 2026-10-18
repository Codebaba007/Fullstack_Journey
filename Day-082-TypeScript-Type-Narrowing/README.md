# Day 82: TypeScript Type Narrowing and Type Guards

## Overview

Today, I learned about Type Narrowing and Type Guards in TypeScript. These concepts help safely work with variables that can have multiple possible types.

I practiced using `typeof` to check primitive types, the `in` operator to distinguish between object types, and user-defined type guards to create reusable type checks.

## Topics Covered

- Type Narrowing
- `typeof` operator
- Type Narrowing with conditional statements
- Type Narrowing in functions
- The `in` operator
- Object type checking
- User-defined type guards
- The `is` keyword in type predicates

## 1. What Is Type Narrowing?

Type Narrowing is the process of reducing a variable's possible types based on a condition or check.

For example, a variable can have either a string or a number type.

```typescript
let value: string | number;

value = "Hello";
value = 100;
```

TypeScript cannot safely assume that `value` is always a string or always a number.

Type Narrowing allows TypeScript to determine which type is being used in a particular section of code.

## 2. Type Narrowing with typeof

The `typeof` operator checks the type of a value at runtime.

```typescript
let value: string | number = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
} else {
    console.log(value.toFixed(2));
}
```

Inside the `if` block, TypeScript knows that `value` is a string.

Inside the `else` block, TypeScript knows that `value` is a number.

Common `typeof` results:

| JavaScript type | typeof result |
|---|---|
| String | "string" |
| Number | "number" |
| Boolean | "boolean" |
| Undefined | "undefined" |
| Function | "function" |
| Object | "object" |

Note: `typeof null` also returns `"object"`, which is a historical JavaScript behavior.

## 3. Type Narrowing in Functions

Type Narrowing is especially useful when a function accepts a Union Type.

```typescript
function processValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value * 2);
    }
}

processValue("hello");
processValue(25);
```

Output:

```text
HELLO
50
```

The function safely handles both types by checking the value before performing type-specific operations.

## 4. Type Narrowing with the in Operator

The `in` operator checks whether a property exists in an object.

It can help distinguish between different object types.

```typescript
interface Student {
    name: string;
    studentId: number;
}

interface Teacher {
    name: string;
    subject: string;
}
```

Both interfaces have a `name` property, but they have different additional properties.

We can use the `in` operator to distinguish between them.

```typescript
function displayPerson(person: Student | Teacher): void {
    if ("studentId" in person) {
        console.log(person.studentId);
    } else {
        console.log(person.subject);
    }
}
```

If `studentId` exists, TypeScript narrows the type to `Student`.

Otherwise, in this example, it narrows the type to `Teacher`.

## 5. Practical Example: Student and Teacher System

```typescript
interface Student {
    name: string;
    studentId: number;
    department: string;
}

interface Teacher {
    name: string;
    subject: string;
}

function displayDetails(person: Student | Teacher): void {
    if ("studentId" in person) {
        console.log("Name:", person.name);
        console.log("Student ID:", person.studentId);
        console.log("Department:", person.department);
    } else {
        console.log("Name:", person.name);
        console.log("Subject:", person.subject);
    }
}

const student: Student = {
    name: "Mehedi",
    studentId: 101,
    department: "CSE"
};

const teacher: Teacher = {
    name: "Rahim",
    subject: "Mathematics"
};

displayDetails(student);
displayDetails(teacher);
```

The function accepts either a student or a teacher and uses the `in` operator to determine which properties are available.

## 6. User-Defined Type Guards

A user-defined type guard is a function that checks whether a value belongs to a particular type.

TypeScript supports this through a special return type called a type predicate.

The `is` keyword is used in the return type.

```typescript
interface Student {
    name: string;
    studentId: number;
}

interface Teacher {
    name: string;
    subject: string;
}

function isStudent(
    person: Student | Teacher
): person is Student {
    return "studentId" in person;
}
```

The expression `person is Student` tells TypeScript that if the function returns `true`, the value can be treated as a `Student`.

We can then reuse the function:

```typescript
function displayPerson(person: Student | Teacher): void {
    if (isStudent(person)) {
        console.log(person.studentId);
    } else {
        console.log(person.subject);
    }
}
```

This separates the type-checking logic from the code that uses the result.

## 7. Type Narrowing Techniques Compared

| Technique | Purpose |
|---|---|
| `typeof` | Checks primitive types such as strings and numbers |
| `in` | Checks whether an object contains a particular property |
| Custom type guard | Creates a reusable function that checks a type |
| Conditional statements | Allow TypeScript to narrow types based on checks |

## Key Takeaways

- Type Narrowing makes working with Union Types safer.
- `typeof` checks primitive types at runtime.
- Conditional statements allow TypeScript to determine which type is being used.
- The `in` operator checks whether an object contains a property.
- User-defined type guards allow reusable type checks.
- The `is` keyword is used to declare a type predicate.
- Type Narrowing helps prevent errors when working with multiple possible types.

## Day 82 Practice

- [x] Learned Type Narrowing.
- [x] Used `typeof` with Union Types.
- [x] Used conditional statements to narrow types.
- [x] Practiced Type Narrowing in functions.
- [x] Used the `in` operator with object types.
- [x] Learned about user-defined type guards.
- [x] Practiced with a student and teacher system.

## Conclusion

Day 82 focused on Type Narrowing and Type Guards in TypeScript. I learned how to check the types of values, safely access type-specific properties, and create reusable type-checking functions.

These concepts are useful when working with Union Types, API responses, and complex application data.

**Next: Day 83 — Intersection Types (`&`)**