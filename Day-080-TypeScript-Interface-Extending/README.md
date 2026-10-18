# Day 80: TypeScript Interface Extending

## Overview

Today, I learned how to extend interfaces in TypeScript using the `extends` keyword. Interface inheritance allows one interface to inherit properties from another, helping organize and reuse type definitions.

## Topics Covered

- Interface inheritance
- The `extends` keyword
- Parent and child interfaces
- Extending an interface that already extends another interface
- Using extended interfaces to define objects
- Using interfaces as function parameter types

## 1. Interface Inheritance

An interface can inherit properties from another interface using the `extends` keyword.

```typescript
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    department: string;
}
```

The `Student` interface inherits `name` and `age` from `Person` and adds its own `department` property.

A `Student` object must contain all three properties.

## 2. Extending an Extended Interface

An interface can extend another interface that already inherits properties from a different interface.

```typescript
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    department: string;
}

interface CSEStudent extends Student {
    programmingLanguage: string;
}
```

The `CSEStudent` interface inherits all properties from both `Student` and `Person`.

Its properties are:
- `name`
- `age`
- `department`
- `programmingLanguage`

This creates a chain of inheritance.

## 3. Creating Objects from Extended Interfaces

An object using an extended interface must contain all required properties inherited from its parent interfaces.

```typescript
const student1: CSEStudent = {
    name: "Mehedi",
    age: 23,
    department: "CSE",
    programmingLanguage: "TypeScript"
};

const student2: CSEStudent = {
    name: "Rahim",
    age: 22,
    department: "CSE",
    programmingLanguage: "Python"
};

console.log(student1);
console.log(student2);
```

Both objects satisfy the `CSEStudent` interface because they contain all four required properties.

## 4. Using Extended Interfaces in Functions

Extended interfaces can also be used as function parameter types.

```typescript
function displayStudent(student: CSEStudent): void {
    console.log(student.name);
    console.log(student.programmingLanguage);
}

displayStudent(student1);
displayStudent(student2);
```

The function accepts a `CSEStudent` object and can access the properties inherited from its parent interfaces.

## 5. Extending an Interface Independently

Different interfaces can extend the same parent interface.

```typescript
interface Person {
    name: string;
    age: number;
}

interface Teacher extends Person {
    subject: string;
}

interface Student extends Person {
    department: string;
}
```

Both `Teacher` and `Student` inherit `name` and `age` from `Person`, but each adds its own properties.

## Key Takeaways

- The `extends` keyword allows an interface to inherit properties from another interface.
- A child interface inherits the required properties of its parent.
- An interface can extend another child interface.
- Multiple interfaces can extend the same parent interface.
- Extended interfaces can be used for objects and function parameters.
- Interface inheritance helps reduce repeated type definitions and keeps code organized.

## Day 80 Practice

- [x] Created interfaces using `extends`.
- [x] Extended an interface that already extended another interface.
- [x] Created objects using an extended interface.
- [x] Used an extended interface as a function parameter.
- [x] Practiced interface inheritance with a student management example.

## Conclusion

Day 80 focused on interface inheritance in TypeScript. I learned how to reuse properties through parent and child interfaces, build inheritance chains, and apply extended interfaces to objects and functions.

**Next:** Day 81 — Union Types (`|`)