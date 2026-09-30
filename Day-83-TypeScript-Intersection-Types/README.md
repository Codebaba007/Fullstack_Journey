# Day 83: TypeScript Intersection Types

## Overview

Today, I learned about Intersection Types in TypeScript. Intersection Types allow multiple types to be combined into a single type using the `&` operator.

I practiced combining type aliases and interfaces, creating objects with intersection types, and using intersection types in functions. I also learned the difference between Union Types (`|`) and Intersection Types (`&`).

## Topics Covered

- Intersection Types
- The intersection operator (`&`)
- Combining multiple type aliases
- Combining interfaces
- Intersection Types with objects
- Intersection Types with functions
- Union Types (`|`) vs Intersection Types (`&`)
- Conflicting properties in Intersection Types

## 1. What Are Intersection Types?

Intersection Types combine multiple types into one.

The `&` operator is used to combine types. The resulting type must satisfy all the combined type requirements.

```typescript
type Person = {
    name: string;
    age: number;
};

type Student = {
    studentId: number;
    department: string;
};

type CSEStudent = Person & Student;
```

The `CSEStudent` type contains all properties from both `Person` and `Student`.

Its required properties are:
- `name`
- `age`
- `studentId`
- `department`

## 2. Creating Objects with Intersection Types

An object using an intersection type must contain all the required properties from the combined types.

```typescript
type Person = {
    name: string;
    age: number;
};

type Student = {
    studentId: number;
    department: string;
};

type CSEStudent = Person & Student;

const student1: CSEStudent = {
    name: "Mehedi",
    age: 23,
    studentId: 101,
    department: "CSE"
};

console.log(student1);
```

If a required property is missing, TypeScript reports an error.

## 3. Combining More Than Two Types

Intersection Types can combine multiple types using the `&` operator.

```typescript
type Person = {
    name: string;
};

type Student = {
    studentId: number;
};

type Programmer = {
    programmingLanguage: string;
};

type CSEStudent = Person & Student & Programmer;

const student: CSEStudent = {
    name: "Mehedi",
    studentId: 101,
    programmingLanguage: "TypeScript"
};

console.log(student);
```

The resulting type requires all three properties.

## 4. Intersection Types with Interfaces

Intersection Types can also combine interfaces.

```typescript
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    salary: number;
}

type StaffMember = Person & Employee;

const staff: StaffMember = {
    name: "Rahim",
    age: 30,
    employeeId: 501,
    salary: 40000
};

console.log(staff);
```

The `StaffMember` type combines the properties of both interfaces.

## 5. Intersection Types with Functions

Intersection Types can be used as function parameter types.

```typescript
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    salary: number;
};

type StaffMember = Person & Employee;

function displayEmployee(employee: StaffMember): void {
    console.log("Name:", employee.name);
    console.log("Employee ID:", employee.employeeId);
    console.log("Salary:", employee.salary);
}

const staff: StaffMember = {
    name: "Rahim",
    age: 30,
    employeeId: 501,
    salary: 40000
};

displayEmployee(staff);
```

The function accepts an object that satisfies both the `Person` and `Employee` types.

## 6. Union Types vs Intersection Types

Union Types and Intersection Types serve different purposes.

| Union Types (`|`) | Intersection Types (`&`) |
|---|---|
| Represent either one type or another | Combine multiple type requirements |
| A value can match one of the alternatives | A value must satisfy all combined types |
| Commonly used for multiple possible values | Commonly used to combine object structures |
| Example: `string \| number` | Example: `Person & Student` |

### Union Type Example

```typescript
let id: string | number;

id = 101;
id = "STU101";
```

The variable can contain either a string or a number.

### Intersection Type Example

```typescript
type Person = {
    name: string;
};

type Student = {
    studentId: number;
};

type CSEStudent = Person & Student;

const student: CSEStudent = {
    name: "Mehedi",
    studentId: 101
};
```

The object must contain both `name` and `studentId`.

## 7. Conflicting Properties in Intersection Types

Intersection Types combine requirements, but they do not automatically resolve conflicting property types.

```typescript
type A = {
    id: string;
};

type B = {
    id: number;
};

type Combined = A & B;
```

The `id` property must satisfy both `string` and `number` simultaneously.

Since an ordinary value cannot satisfy both types, the resulting property type is effectively impossible to use.

This is why incompatible property definitions should be avoided when combining types.

## 8. Practical Application: Student Employee System

The practice exercise involved creating three type aliases:

```typescript
type Person = {
    name: string;
    age: number;
};

type Student = {
    studentId: number;
    department: string;
};

type Employee = {
    employeeId: number;
    salary: number;
};
```

These types were combined into a single type:

```typescript
type StudentEmployee = Person & Student & Employee;
```

A `StudentEmployee` object must contain all six properties.

The exercise also involved creating a function that accepts a `StudentEmployee` object and displays selected information.

## Key Takeaways

- Intersection Types combine multiple types using the `&` operator.
- The resulting type must satisfy all combined requirements.
- Multiple type aliases can be combined into one type.
- Interfaces can also be combined using Intersection Types.
- Intersection Types can be used with objects and function parameters.
- Union Types (`|`) represent alternatives, while Intersection Types (`&`) combine requirements.
- Conflicting property types can make an intersection impossible to satisfy.

## Day 83 Practice

- [x] Learned the Intersection Type operator.
- [x] Combined multiple type aliases.
- [x] Combined interfaces using Intersection Types.
- [x] Created objects using Intersection Types.
- [x] Used Intersection Types in functions.
- [x] Compared Union Types and Intersection Types.
- [x] Learned about conflicting properties.
- [x] Practiced with a student employee system.

## Conclusion

Day 83 focused on Intersection Types in TypeScript. I learned how to combine multiple type definitions into one, use the combined types with objects and functions, and understand how Intersection Types differ from Union Types.

These concepts are useful for describing complex objects and reusing type definitions in larger applications.

**Next: Day 84 — Enums and When to Use Them**