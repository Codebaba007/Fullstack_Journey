# Day 88 — Practical TypeScript Review

## Overview

Today was a **practical TypeScript review day**.

Instead of learning a completely new TypeScript feature, I combined concepts from the previous days into a small Student Management data system.

The concepts reviewed were:

- Interfaces
- Enums
- Intersection types
- Union types
- Type narrowing
- Generics
- Generic interfaces
- Generic functions
- Utility types
- `Partial`
- `Pick`
- `Omit`
- Type inference

---

## 1. Student Interface

Created the base `Student` interface:

```ts
interface Student {
    id: number;
    name: string;
    cgpa: number;
    department: string;
}
```

This defines the basic structure of a student.

---

## 2. Student Status Enum

Created an enum for student status:

```ts
enum StudentStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Graduated = "GRADUATED"
}
```

This gives the student status a fixed set of possible values.

---

## 3. Intersection Type

Combined the `Student` interface with a `status` property:

```ts
type StudentRecord = Student & {
    status: StudentStatus;
};
```

The resulting `StudentRecord` contains:

```text
id
name
cgpa
department
status
```

Example:

```ts
let student: StudentRecord = {
    id: 101,
    name: "Mehedi",
    cgpa: 3.75,
    department: "CSE",
    status: StudentStatus.Active
};
```

---

## 4. Generic API Response

Created a reusable generic interface:

```ts
interface ApiResponse<T> {
    data: T;
    success: boolean;
}
```

This allows the same response structure to work with different types.

For example:

```ts
let response: ApiResponse<StudentRecord> = {
    data: student,
    success: true
};
```

Here:

```text
T = StudentRecord
```

---

## 5. Generic Function

Created a generic function for displaying API responses:

```ts
function displayResponse<T>(response: ApiResponse<T>): void {
    console.log("Success:", response.success);
    console.log("Data:", response.data);
}
```

Then:

```ts
displayResponse(response);
```

TypeScript can infer the generic type automatically.

---

## 6. Union Types and Type Narrowing

Reviewed union types using a function that accepts either a number or string:

```ts
function displayStudentId(id: number | string): void {
    if (typeof id === "number") {
        console.log("Numeric ID:", id);
    } else {
        console.log("String ID:", id);
    }
}
```

Tested with:

```ts
displayStudentId(101);
displayStudentId("CSE-101");
```

The `typeof` check narrows the type inside each branch.

---

## 7. Partial

Reviewed `Partial` for creating update objects.

```ts
type StudentUpdate = Partial<StudentRecord>;
```

Now all properties become optional.

For example:

```ts
let update: StudentUpdate = {
    cgpa: 3.90
};
```

Only the property that needs to be updated is required.

---

## 8. Pick

Reviewed `Pick` for selecting specific properties.

```ts
type StudentSummary = Pick<StudentRecord, "id" | "name">;
```

This creates a type containing only:

```text
id
name
```

Example:

```ts
let summary: StudentSummary = {
    id: 101,
    name: "Mehedi"
};
```

---

## 9. Omit

Reviewed `Omit` for removing specific properties.

```ts
type StudentWithoutDepartment =
    Omit<StudentRecord, "department">;
```

The resulting type contains everything from `StudentRecord` except `department`.

Example:

```ts
let studentWithoutDepartment: StudentWithoutDepartment = {
    id: 101,
    name: "Mehedi",
    cgpa: 3.75,
    status: StudentStatus.Active
};
```

---

# Review Challenges

## Challenge 1 — Teacher Interface

Create a `Teacher` interface containing:

```text
id: number
name: string
subject: string
```

---

## Challenge 2 — Union and Type Narrowing

Create a union:

```ts
Student | Teacher
```

Then create a function that determines whether the supplied person is a student or teacher.

Use type narrowing to access the appropriate properties.

---

## Challenge 3 — Generic Function

Create:

```ts
getFirstItem<T>(items: T[]): T
```

Test it with:

- `number[]`
- `string[]`

---

## Challenge 4 — Partial

Create:

```ts
type StudentUpdate = Partial<StudentRecord>;
```

Create update objects containing only selected properties.

---

## Challenge 5 — Pick

Create a type containing only:

```text
id
name
department
```

using `Pick`.

---

## Challenge 6 — Generic API

Create:

```ts
ApiResponse<T>
```

and use it with the `Teacher` interface.

The goal is to create:

```ts
ApiResponse<Teacher>
```

---

# Concepts Connected Today

```text
Student
   │
   ├── Interface
   │
   ├── StudentStatus Enum
   │
   └── Intersection
          │
          ↓
     StudentRecord
          │
          ├── Generic API Response
          │
          ├── Generic Functions
          │
          ├── Partial
          ├── Pick
          └── Omit
```

---

# Key Takeaways

- Interfaces describe object structures.
- Enums provide a fixed set of named values.
- Intersection types combine multiple type requirements.
- Union types allow a value to be one of multiple types.
- Type narrowing determines the specific type inside a condition.
- Generics allow reusable functions and interfaces.
- Generic interfaces can work with many different data types.
- `Partial` makes properties optional.
- `Pick` selects specific properties.
- `Omit` removes specific properties.
- TypeScript can often infer generic types automatically.

---

## Compilation

The standard TypeScript workflow remains:

```bash
tsc index.ts
node index.js
```

---

## Day 88 Completion

**Topic:** Practical TypeScript Review

**Status:** Completed

**Main Goal:** Combine previously learned TypeScript concepts into practical code.

**Next:** Final TypeScript Mini-Project