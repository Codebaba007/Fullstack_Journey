# Day 89 — TypeScript Final Mini-Project

## Overview

Today, I completed the final planned TypeScript mini-project.

The project is a small **Student Management Data System** designed to combine the major TypeScript concepts learned throughout the TypeScript journey.

The project does not use a UI. The focus is on strongly typed data structures, reusable types, generics, and type safety.

---

## Concepts Used

- Interfaces
- Enums
- Intersection Types
- Union Types
- Type Narrowing
- Generics
- Generic Interfaces
- Generic Functions
- `Partial`
- `Pick`
- `Omit`
- Type Inference

---

# 1. Student Interface

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

# 2. Teacher Interface

Created a `Teacher` interface:

```ts
interface Teacher {
    id: number;
    name: string;
    subject: string;
}
```

Both `Student` and `Teacher` contain `id` and `name`, but they have different additional properties.

---

# 3. Student Status Enum

Created an enum to represent valid student statuses:

```ts
enum StudentStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Graduated = "GRADUATED"
}
```

This prevents arbitrary status strings from being used.

---

# 4. Intersection Type

Combined the `Student` interface with a status property:

```ts
type StudentRecord = Student & {
    status: StudentStatus;
};
```

`StudentRecord` now contains:

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

# 5. Generic API Response

Created a reusable generic interface:

```ts
interface ApiResponse<T> {
    data: T;
    success: boolean;
}
```

It can store different types of data while maintaining type safety.

For example:

```ts
let studentResponse: ApiResponse<StudentRecord> = {
    data: student,
    success: true
};
```

Here:

```text
T = StudentRecord
```

---

# 6. Generic Function

Created a generic function to display API responses:

```ts
function displayResponse<T>(response: ApiResponse<T>): void {
    console.log("Success:", response.success);
    console.log("Data:", response.data);
}
```

The generic type can be inferred automatically when the function is called:

```ts
displayResponse(studentResponse);
```

---

# 7. Union Type

Created a union type allowing either a student or teacher:

```ts
type Person = Student | Teacher;
```

This means a variable of type `Person` can contain either a `Student` or a `Teacher`.

---

# 8. Type Narrowing

Created a function that determines whether the person is a student or teacher:

```ts
function displayPerson(person: Person): void {
    console.log("ID:", person.id);
    console.log("Name:", person.name);

    if ("cgpa" in person) {
        console.log("Student CGPA:", person.cgpa);
        console.log("Department:", person.department);
    } else {
        console.log("Teacher Subject:", person.subject);
    }
}
```

The `"cgpa" in person` check narrows the type.

Conceptually:

```text
Student | Teacher
       ↓
Does it have "cgpa"?
       ↓
 ┌─────┴─────┐
 YES         NO
  ↓           ↓
Student     Teacher
```

---

# 9. Partial

Created an update type using `Partial`:

```ts
type StudentUpdate = Partial<StudentRecord>;
```

All properties become optional.

This allows an update to contain only the properties that need to change.

Example:

```ts
let update: StudentUpdate = {
    cgpa: 3.90
};
```

---

# 10. Pick

Created a student summary using `Pick`:

```ts
type StudentSummary = Pick<
    StudentRecord,
    "id" | "name" | "department"
>;
```

This keeps only the selected properties.

Example:

```ts
let summary: StudentSummary = {
    id: 101,
    name: "Mehedi",
    department: "CSE"
};
```

---

# 11. Omit

Created a student type without the CGPA:

```ts
type StudentWithoutCGPA = Omit<
    StudentRecord,
    "cgpa"
>;
```

Example:

```ts
let studentWithoutCGPA: StudentWithoutCGPA = {
    id: 101,
    name: "Mehedi",
    department: "CSE",
    status: StudentStatus.Active
};
```

---

# 12. Generic Array Function

Created a generic function that returns the first item of an array:

```ts
function getFirstItem<T>(items: T[]): T {
    return items[0];
}
```

Created an array of `StudentRecord` objects:

```ts
let students: StudentRecord[] = [
    student,
    {
        id: 102,
        name: "Rahim",
        cgpa: 3.60,
        department: "CSE",
        status: StudentStatus.Active
    }
];
```

Then:

```ts
let firstStudent = getFirstItem(students);

console.log("First Student:", firstStudent);
```

TypeScript can infer:

```text
StudentRecord[]
      ↓
getFirstItem<T>()
      ↓
T = StudentRecord
      ↓
StudentRecord
```

---

# Project Structure

```text
Student Management System
│
├── Student Interface
│
├── Teacher Interface
│
├── StudentStatus Enum
│
├── StudentRecord Intersection Type
│
├── Person Union Type
│
├── Type Narrowing
│
├── ApiResponse<T>
│
├── Generic Functions
│
├── Partial
│
├── Pick
│
└── Omit
```

---

# TypeScript Journey Summary

This final project brought together the major concepts learned during the TypeScript phase:

```text
Type Annotations
      ↓
Arrays
      ↓
Objects
      ↓
Type Aliases
      ↓
Interfaces
      ↓
Interface Extending
      ↓
Union Types
      ↓
Type Narrowing
      ↓
Intersection Types
      ↓
Enums
      ↓
Generics
      ↓
Generic Functions & Interfaces
      ↓
Utility Types
      ↓
Practical Review
      ↓
Final Mini-Project
```

---

# Key Takeaways

- Interfaces describe the structure of objects.
- Enums provide a fixed set of named values.
- Intersection types combine multiple type requirements.
- Union types allow multiple possible types.
- Type narrowing allows TypeScript to determine the specific type inside a condition.
- Generics make functions and interfaces reusable.
- Generic interfaces can work with different data types.
- `Partial` makes properties optional.
- `Pick` selects specific properties.
- `Omit` removes specific properties.
- TypeScript can infer many types automatically.
- Different TypeScript features can be combined to build strongly typed application data structures.

---

# Compilation

The standard workflow used throughout the TypeScript journey:

```bash
tsc index.ts
node index.js
```

---

# Final TypeScript Status

**Day:** 89

**Topic:** TypeScript Final Mini-Project

**Status:** Completed

**TypeScript Foundation:** Completed

The next stage of the roadmap is:

```text
TypeScript
    ↓
React + TypeScript
    ↓
Next.js
    ↓
Node.js / Express
```