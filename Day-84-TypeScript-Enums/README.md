# Day 84 — TypeScript Enums

## Overview

Today, I learned about **Enums** in TypeScript. Enums allow me to define a set of named constants and use them throughout my code.

I practiced numeric enums, string enums, and using enums as function parameter types.

## What I Learned

### 1. What Is an Enum?

An enum (enumeration) is a TypeScript feature that allows us to define a group of named constants.

Enums are useful when a variable should have one value from a fixed set of options.

Example:

```ts
enum StudentStatus {
    Active,
    Inactive,
    Graduated
}
```

Here, `StudentStatus` contains three members:
- `Active`
- `Inactive`
- `Graduated`

### 2. Numeric Enums

By default, TypeScript assigns numbers to enum members, starting from `0`.

```ts
enum StudentStatus {
    Active,
    Inactive,
    Graduated
}

let status: StudentStatus = StudentStatus.Active;

console.log(status);
```

Output:

```text
0
```

The default values are:

| Enum Member | Value |
|---|---:|
| Active | 0 |
| Inactive | 1 |
| Graduated | 2 |

We can also assign numbers manually.

```ts
enum StudentStatus {
    Active = 1,
    Inactive = 2,
    Graduated = 3
}
```

### 3. String Enums

String enums allow us to assign string values to enum members.

```ts
enum StudentStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Graduated = "GRADUATED"
}

let status: StudentStatus = StudentStatus.Active;

console.log(status);
```

Output:

```text
ACTIVE
```

Unlike numeric enums, string enum members need explicit string values.

### 4. Using Enums in Functions

Enums can be used as function parameter types.

```ts
enum StudentStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Graduated = "GRADUATED"
}

function displayStatus(status: StudentStatus): void {
    if (status === StudentStatus.Active) {
        console.log("The student is currently enrolled.");
    } else if (status === StudentStatus.Inactive) {
        console.log("The student is not currently enrolled.");
    } else {
        console.log("The student has graduated.");
    }
}

displayStatus(StudentStatus.Active);
displayStatus(StudentStatus.Graduated);
```

Output:

```text
The student is currently enrolled.
The student has graduated.
```

The function accepts only values belonging to `StudentStatus`.

### 5. Understanding If, Else If, and Else

The `if`, `else if`, and `else` statements allow a program to make decisions.

- `if` executes when its condition is true.
- `else if` checks another condition if the previous condition was false.
- `else` executes when none of the preceding conditions are true.

Only one branch of an `if/else if/else` chain executes during a single function call.

However, calling the function multiple times can execute different branches.

For example:

```ts
displayStatus(StudentStatus.Active);
displayStatus(StudentStatus.Graduated);
```

The first call executes the `if` block, while the second call executes the `else` block.

### 6. Enums vs Union Types

Both enums and union types can represent a fixed set of values.

**Union type:**

```ts
type StudentStatus = "active" | "inactive" | "graduated";
```

**Enum:**

```ts
enum StudentStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Graduated = "GRADUATED"
}
```

Union types are often sufficient for simple sets of string choices. Enums provide named members that can be referenced throughout a program.

## Practice Project: Student Enrollment System

I practiced creating a small student enrollment system using a string enum.

### Requirements

1. Create an enum named `EnrollmentStatus`.
2. Add three members:
   - `Enrolled = "ENROLLED"`
   - `OnLeave = "ON_LEAVE"`
   - `Completed = "COMPLETED"`
3. Create a function named `showEnrollmentStatus`.
4. Accept an `EnrollmentStatus` parameter.
5. Use `if`, `else if`, and `else` to display a different message for each status.
6. Call the function with all three enum members.

### Bonus Practice

Create a `Student` interface containing:
- `name: string`
- `status: EnrollmentStatus`

Create a student object and display the student's name and enrollment status.

## Key Takeaways

- Enums define a set of named constants.
- Numeric enums assign numbers automatically, starting from `0`.
- Numeric enum values can be assigned manually.
- String enums require explicit string values.
- Enums can be used as function parameter types.
- `if`, `else if`, and `else` execute only one branch per function call.
- Multiple function calls can execute different branches.
- Union types are another option for representing a fixed set of choices.

## Day 84 Completion

**Topic:** TypeScript Enums  
**Status:** Completed  
**Next:** Generics