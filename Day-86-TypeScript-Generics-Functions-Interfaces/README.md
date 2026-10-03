# Day 86 — TypeScript Generics with Functions & Interfaces

## Overview

Today, I learned how to use **Generics with functions and interfaces**.

I learned how a generic type parameter such as `T` can make functions and interfaces reusable while still preserving TypeScript's type safety.

The main concepts covered were:

- Generic functions with multiple type parameters
- Generic functions with arrays
- Tuples
- Generic interfaces
- Reusing one generic interface with different data types
- Combining generic interfaces with generic functions
- Type inference with generics

---

## 1. Generics with Functions

A generic function can work with different data types without requiring separate functions for each type.

Example:

```ts
function getValue<T>(value: T): T {
    return value;
}
```

The `T` is a type parameter.

It acts as a placeholder for the actual type that will be used.

---

## 2. Generic Functions with Two Types

A function can use more than one generic type parameter.

```ts
function createPair<T, U>(value1: T, value2: U): [T, U] {
    return [value1, value2];
}
```

For example:

```ts
let result = createPair(10, "Mehedi");
```

TypeScript infers:

```text
T = number
U = string
```

Therefore, the result is:

```text
[number, string]
```

The same function can also work with other combinations of types.

---

## 3. Tuples

The return type:

```ts
[T, U]
```

is a tuple.

A tuple allows us to specify the type of each position in an array.

Example:

```ts
let student: [number, string] = [101, "Mehedi"];
```

The first element must be a `number`.

The second element must be a `string`.

So:

```text
[number, string]

      ↓

[ 101, "Mehedi" ]
```

---

## 4. Generic Interfaces

Generics can also be used with interfaces.

Example:

```ts
interface ApiResponse<T> {
    data: T;
    success: boolean;
}
```

Here, `T` represents the type of the `data`.

The interface does not know what `T` will be yet.

---

## 5. Using a Generic Interface with Student

First, create a `Student` interface:

```ts
interface Student {
    id: number;
    name: string;
    cgpa: number;
}
```

Then use it with the generic `ApiResponse` interface:

```ts
let studentResponse: ApiResponse<Student> = {
    data: {
        id: 101,
        name: "Mehedi",
        cgpa: 3.75
    },
    success: true
};
```

When we write:

```ts
ApiResponse<Student>
```

the generic type parameter becomes:

```text
T = Student
```

So TypeScript understands the structure as:

```text
ApiResponse<Student>

├── data
│   └── Student
│       ├── id → number
│       ├── name → string
│       └── cgpa → number
│
└── success → boolean
```

---

## 6. Reusing the Same Generic Interface

The major advantage is that we don't need to create a separate response interface for every data type.

For example, we can create a `Course` interface:

```ts
interface Course {
    code: string;
    title: string;
    credits: number;
}
```

Then reuse the same `ApiResponse<T>`:

```ts
let courseResponse: ApiResponse<Course> = {
    data: {
        code: "CSE101",
        title: "Introduction to Programming",
        credits: 3
    },
    success: true
};
```

Now:

```text
ApiResponse<Course>

        ↓

T = Course
```

The same generic interface works with both `Student` and `Course`.

---

## 7. Generic Functions with Generic Interfaces

Generics can be combined in functions and interfaces.

```ts
function displayResponse<T>(response: ApiResponse<T>): void {
    console.log("Data:", response.data);
    console.log("Success:", response.success);
}
```

The function can accept different types of API responses.

For example:

```ts
displayResponse(studentResponse);
```

TypeScript infers:

```text
T = Student
```

If we pass:

```ts
displayResponse(courseResponse);
```

TypeScript infers:

```text
T = Course
```

The same function works with both.

---

## 8. Complete Example

The complete student example:

```ts
export {};

interface Student {
    id: number;
    name: string;
    cgpa: number;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
}

let studentResponse: ApiResponse<Student> = {
    data: {
        id: 101,
        name: "Mehedi",
        cgpa: 3.75
    },
    success: true
};

function displayResponse<T>(response: ApiResponse<T>): void {
    console.log("Data:", response.data);
    console.log("Success:", response.success);
}

displayResponse(studentResponse);
```

Expected output:

```text
Data: { id: 101, name: 'Mehedi', cgpa: 3.75 }
Success: true
```

---

## 9. Type Inference

TypeScript can automatically determine the generic type.

When we write:

```ts
displayResponse(studentResponse);
```

we don't need to explicitly write:

```ts
displayResponse<Student>(studentResponse);
```

TypeScript sees that:

```text
studentResponse
        ↓
ApiResponse<Student>
        ↓
T = Student
```

This is another example of **type inference**.

---

## Practice Completed

### Student API Response

Created:

```ts
interface Student {
    id: number;
    name: string;
    cgpa: number;
}
```

Created the reusable generic interface:

```ts
interface ApiResponse<T> {
    data: T;
    success: boolean;
}
```

Created a student response:

```ts
let studentResponse: ApiResponse<Student>
```

Created a generic function:

```ts
function displayResponse<T>(response: ApiResponse<T>): void
```

Then passed the student response to the function.

---

## Key Takeaways

- Generics allow reusable code while preserving type safety.
- A generic function can work with many different types.
- Multiple generic parameters can be used, such as `<T, U>`.
- `[T, U]` represents a tuple containing two potentially different types.
- Interfaces can also use generics.
- `ApiResponse<T>` can represent responses containing different types of data.
- `ApiResponse<Student>` makes `T` become `Student`.
- `ApiResponse<Course>` makes `T` become `Course`.
- Generic functions can accept generic interfaces.
- TypeScript can often infer the generic type automatically.

---

## Day 86 Completion

**Topic:** TypeScript Generics with Functions & Interfaces

**Status:** Completed

**Next:** TypeScript Utility Types