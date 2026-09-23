# Day 75 — TypeScript Functions

## Overview

Day 75 focused on applying TypeScript's type system to functions.

The goal was to take familiar JavaScript functions and understand how TypeScript adds type information to their parameters and return values.

The main concepts covered were:

- Typed function parameters
- Function return types
- Type checking function arguments
- Optional parameters
- Default parameters
- Return-type inference
- Understanding input types vs output types

---

## Daily TypeScript Workflow

Each TypeScript day uses its own folder.

The basic workflow is:

```text
Day folder
    ↓
index.ts
    ↓
tsc index.ts
    ↓
index.js
    ↓
node index.js
```

TypeScript is installed globally, so it does not need to be installed again for each day.

---

# 1. Typed Function Parameters

JavaScript functions can be written as:

```javascript
function add(a, b) {
    return a + b;
}
```

TypeScript allows us to specify the expected types of the parameters:

```typescript
function add(a: number, b: number) {
    return a + b;
}
```

Here:

```text
a → number
b → number
```

The function expects both arguments to be numbers.

---

# 2. Function Return Types

We can explicitly specify the type that a function should return.

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

The structure is:

```text
function add(
    a: number,
    b: number
): number
```

The first two types describe the parameters.

The final `number` describes the return value.

Therefore:

```text
a → number
b → number
return value → number
```

---

# 3. Type Checking Function Arguments

Consider:

```typescript
function multiply(a: number, b: number): number {
    return a * b;
}
```

This is valid:

```typescript
multiply(6, 4);
```

because both arguments are numbers.

But:

```typescript
multiply("6", "4");
```

produces a TypeScript type error because the function expects numbers but receives strings.

---

## TypeScript Error vs Runtime Behavior

An important observation from Day 75 was that JavaScript can sometimes still produce a result even when TypeScript reports a type error.

For example:

```typescript
multiply("6", "4");
```

JavaScript can perform numeric multiplication after converting the strings.

Conceptually:

```text
"6" → 6
"4" → 4

6 × 4 → 24
```

Therefore JavaScript may produce:

```text
24
```

even though TypeScript reports that the function arguments are incorrectly typed.

The important lesson is:

```text
TypeScript
    ↓
Checks the code and reports type problems

JavaScript
    ↓
Actually executes the code
```

A runtime result does not mean the TypeScript code is correctly typed.

---

# 4. Optional Parameters

A parameter can be marked as optional using `?`.

```typescript
function greet(name?: string): string {
    if (name) {
        return "Hello " + name;
    }

    return "Hello Guest";
}
```

Now both calls are allowed:

```typescript
greet("Mehedi");
```

and:

```typescript
greet();
```

The `?` means the parameter may be omitted.

Conceptually:

```text
name?: string
      ↓
string
   or
undefined
```

Because the parameter may be missing, the function can check whether a value exists.

---

# 5. Default Parameters

A parameter can also have a default value.

```typescript
function greet(name: string = "Guest"): string {
    return "Hello " + name;
}
```

Calling:

```typescript
greet("Mehedi");
```

produces:

```text
Hello Mehedi
```

Calling:

```typescript
greet();
```

uses the default value:

```text
Hello Guest
```

The structure is:

```typescript
name: string = "Guest"
```

This means:

```text
name → string
default value → "Guest"
```

---

# 6. Optional vs Default Parameters

### Optional Parameter

```typescript
name?: string
```

The parameter may be missing.

The function can decide how to handle the missing value.

### Default Parameter

```typescript
name: string = "Guest"
```

If the caller does not provide a value, `"Guest"` is automatically used.

Simple mental model:

```text
Optional
    ↓
May be missing

Default
    ↓
May be omitted, but a fallback value is provided
```

---

# 7. Return-Type Inference

A return type does not always need to be explicitly written.

For example:

```typescript
function add(a: number, b: number) {
    return a + b;
}
```

We did not write:

```typescript
: number
```

after the parameter list.

TypeScript can determine the return type from the returned expression.

Since:

```text
a → number
b → number
```

and:

```text
a + b
```

produces a number, TypeScript infers:

```text
return value → number
```

---

# 8. String Return-Type Inference

Consider:

```typescript
function getStudentName() {
    return "Mehedi";
}
```

TypeScript sees that the returned value is a string.

Therefore:

```text
getStudentName()
        ↓
     string
```

---

# 9. Boolean Return-Type Inference

One important concept from Day 75 was understanding that the parameter type and return type are separate.

Example:

```typescript
function isAdult(age: number) {
    return age >= 18;
}
```

Here:

```text
age → number
```

because the function expects an age.

But:

```typescript
age >= 18
```

is a comparison.

A comparison produces:

```text
true
```

or:

```text
false
```

Therefore TypeScript infers:

```text
isAdult()
   ↓
boolean
```

The complete flow is:

```text
age
 ↓
number

age >= 18
 ↓
boolean

isAdult(age)
 ↓
boolean
```

This demonstrates that:

> The parameter type does not determine the return type.

The return type comes from the value produced by the `return` expression.

---

# 10. Examples

### Number → Number

```typescript
function square(number: number) {
    return number * number;
}
```

```text
Input → number
Output → number
```

---

### No Parameter → String

```typescript
function getMessage() {
    return "Hello TypeScript";
}
```

```text
Input → none
Output → string
```

---

### Number → Boolean

```typescript
function isAdult(age: number) {
    return age >= 18;
}
```

```text
Input → number
Output → boolean
```

---

# 11. Function Type Flow

A useful mental model is:

```text
              FUNCTION
                 │
       ┌─────────┴─────────┐
       ↓                   ↓
    INPUTS               OUTPUT
       ↓                   ↓
 parameter types      return type
```

For example:

```typescript
function isPassing(cgpa: number) {
    return cgpa >= 2.00;
}
```

becomes:

```text
cgpa
 ↓
number
 ↓
comparison
 ↓
boolean
```

---

# 12. Key Takeaways

1. TypeScript allows function parameters to have explicit types.
2. Function return types can also be explicitly specified.
3. TypeScript checks whether arguments match the declared parameter types.
4. `?` makes a function parameter optional.
5. Default parameters provide fallback values.
6. TypeScript can infer function return types automatically.
7. Parameter types and return types are independent.
8. A comparison such as `age >= 18` produces a Boolean.
9. TypeScript can report a type error even when JavaScript can still execute the code.
10. TypeScript helps catch incorrect data usage before runtime.

---

## Day 75 Completion

- [x] Typed function parameters
- [x] Function return types
- [x] Function argument type checking
- [x] Optional parameters
- [x] Default parameters
- [x] Return-type inference
- [x] Number-returning functions
- [x] String-returning functions
- [x] Boolean-returning functions
- [x] Understand parameter types vs return types
- [x] Practice TypeScript compiler workflow

---

## Next Day

**Day 76 — TypeScript Arrays**

The next step will be applying TypeScript's type system to collections of values and learning how to tell TypeScript what kind of data an array contains.