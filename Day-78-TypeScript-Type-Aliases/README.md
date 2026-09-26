# Day 78 — TypeScript Type Aliases

## Overview

Day 78 focused on **Type Aliases** in TypeScript. Type aliases allow us to give names to types and reuse them throughout our code.

Instead of repeatedly writing the same object structure, we can define it once and use it for multiple objects and arrays.

## Topics Covered

- Type aliases using `type`
- Defining object types
- Reusing type aliases
- Type checking with aliases
- Type aliases with arrays
- Using `forEach()` with typed arrays

---

## 1. What Is a Type Alias?

A type alias gives a name to an existing type.

Syntax:

```typescript
type TypeName = someType;
```

For example:

```typescript
type Student = {
    name: string;
    age: number;
    cgpa: number;
};
```

Here, `Student` is a type alias describing the structure of a student object.

---

## 2. Using Type Aliases with Objects

Once a type alias is defined, it can be reused for multiple objects.

```typescript
type Student = {
    name: string;
    age: number;
    cgpa: number;
};

const student1: Student = {
    name: "Mehedi",
    age: 23,
    cgpa: 3.5
};

const student2: Student = {
    name: "Rahim",
    age: 22,
    cgpa: 3.7
};
```

Both objects follow the same `Student` structure.

This avoids repeating the object type for every student.

---

## 3. Type Checking

TypeScript checks whether objects follow the structure defined by the type alias.

```typescript
type Student = {
    name: string;
    age: number;
    cgpa: number;
};
```

Valid object:

```typescript
const student: Student = {
    name: "Mehedi",
    age: 23,
    cgpa: 3.5
};
```

Invalid property type:

```typescript
const student: Student = {
    name: "Mehedi",
    age: 23,
    cgpa: "3.5"
};
```

The second example produces a TypeScript error because `cgpa` must be a number.

Required properties must also be present in the object.

---

## 4. Type Aliases with Arrays

Type aliases can also be used to define arrays of objects.

```typescript
type Student = {
    name: string;
    age: number;
    cgpa: number;
};

const students: Student[] = [
    {
        name: "Mehedi",
        age: 23,
        cgpa: 3.5
    },
    {
        name: "Rahim",
        age: 22,
        cgpa: 3.7
    },
    {
        name: "Nusrat",
        age: 21,
        cgpa: 3.9
    }
];
```

`Student[]` means an array containing objects that follow the `Student` type.

Every student in the array must have the required properties with the correct types.

---

## 5. Using Array Methods with Type Aliases

We can use JavaScript array methods with typed arrays.

For example, `forEach()` can iterate through the student array.

```typescript
students.forEach((student) => {
    console.log(student.name);
});
```

TypeScript automatically understands that `student` follows the `Student` type.

Therefore, we can safely access its properties:

```typescript
students.forEach((student) => {
    console.log(student.name);
    console.log(student.cgpa);
});
```

---

## 6. Complete Example

```typescript
export {};

type Student = {
    name: string;
    age: number;
    department: string;
    cgpa: number;
};

const students: Student[] = [
    {
        name: "Mehedi",
        age: 23,
        department: "CSE",
        cgpa: 3.5
    },
    {
        name: "Rahim",
        age: 22,
        department: "CSE",
        cgpa: 3.7
    },
    {
        name: "Nusrat",
        age: 21,
        department: "Software Engineering",
        cgpa: 3.9
    }
];

students.forEach((student) => {
    console.log(student.name);
    console.log(student.cgpa);
});
```

---

## 7. Key Syntax to Remember

### Define a type alias

```typescript
type Student = {
    name: string;
    age: number;
};
```

### Use the type alias

```typescript
const student: Student = {
    name: "Mehedi",
    age: 23
};
```

### Create an array of typed objects

```typescript
const students: Student[] = [];
```

### Iterate through the array

```typescript
students.forEach((student) => {
    console.log(student.name);
});
```

---

## 8. What I Learned

- A type alias gives a reusable name to a type.
- The `type` keyword is used to define a type alias.
- Type aliases can describe object structures.
- The same type alias can be reused for multiple objects.
- TypeScript checks object properties against the defined type.
- Type aliases can be used with arrays.
- `Student[]` represents an array of Student objects.
- Array methods such as `forEach()` work with typed arrays.
- TypeScript can infer the type of callback parameters from the array.

---

## Practice Checklist

- [x] Define a type alias using `type`
- [x] Create an object using a type alias
- [x] Reuse a type alias for multiple objects
- [x] Understand type checking
- [x] Create an array using a type alias
- [x] Use `forEach()` with typed objects
- [x] Print object properties from an array

---

## Day 78 Summary

```text
TypeScript Type Aliases
        |
        |-- Define types using type
        |
        |-- Object type aliases
        |
        |-- Reuse types
        |
        |-- Type checking
        |
        |-- Typed arrays
        |
        |-- forEach() with typed objects
```

**Day 78 completed:** Type Aliases and their use with objects and arrays.