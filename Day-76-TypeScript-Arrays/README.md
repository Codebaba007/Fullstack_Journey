# Day 76 — TypeScript Arrays

## Overview

Day 76 focused on using TypeScript's type system with arrays.

The main goal was to understand how TypeScript can describe what kind of values an array is allowed to contain and how those types continue through familiar JavaScript array methods.

The concepts covered were:

- Typed arrays
- `string[]`
- `number[]`
- `boolean[]`
- Array type inference
- Typed array methods
- `forEach()`
- `map()`
- `filter()`
- Union types
- Arrays containing multiple allowed types

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

# 1. Typed Arrays

JavaScript arrays can contain values without explicitly declaring their type.

TypeScript allows us to specify what type of values an array should contain.

Example:

```typescript
const students: string[] = [
    "Rahim",
    "Nusrat",
    "Tanvir"
];
```

The `string[]` means:

> An array containing strings.

---

# 2. Number Arrays

A number array can be declared with:

```typescript
const scores: number[] = [
    80,
    75,
    92,
    88
];
```

This means:

```text
scores
  ↓
number[]
  ↓
array of numbers
```

A number can be added:

```typescript
scores.push(95);
```

But a string cannot:

```typescript
scores.push("100");
```

because the array is declared as:

```text
number[]
```

---

# 3. Boolean Arrays

Boolean arrays contain `true` and `false`.

```typescript
const results: boolean[] = [
    true,
    false,
    true,
    true
];
```

Valid:

```typescript
results.push(false);
```

Invalid:

```typescript
results.push("true");
```

The difference is:

```text
true
```

is a Boolean, while:

```text
"true"
```

is a string.

---

# 4. Array Type Inference

TypeScript can also infer the type of an array automatically.

Example:

```typescript
const names = [
    "Rahim",
    "Nusrat",
    "Tanvir"
];
```

TypeScript infers:

```text
names → string[]
```

Similarly:

```typescript
const scores = [80, 75, 92];
```

is inferred as:

```text
scores → number[]
```

Therefore, explicit annotation is not always necessary.

---

# 5. Explicit vs Inferred Arrays

### Explicit

```typescript
const scores: number[] = [
    80,
    75,
    92
];
```

### Inferred

```typescript
const scores = [
    80,
    75,
    92
];
```

Both allow TypeScript to understand that `scores` contains numbers.

The difference is that in the first example, the programmer explicitly provides the type.

---

# 6. `forEach()` with Typed Arrays

JavaScript's `forEach()` works normally with TypeScript arrays.

Example:

```typescript
const scores: number[] = [
    80,
    75,
    92,
    88
];

scores.forEach((score) => {
    console.log(score);
});
```

Because `scores` is:

```text
number[]
```

TypeScript knows that:

```text
score → number
```

The parameter does not need a separate annotation.

---

# 7. `map()` with Typed Arrays

`map()` transforms every item in an array.

Example:

```typescript
const scores: number[] = [
    80,
    75,
    92
];

const doubledScores = scores.map((score) => {
    return score * 2;
});
```

TypeScript follows the types through the operation:

```text
scores
   ↓
number[]
   ↓
score
   ↓
number
   ↓
score * 2
   ↓
number
```

Therefore:

```text
doubledScores → number[]
```

---

# 8. `filter()` with Typed Arrays

`filter()` selects items that satisfy a condition.

Example:

```typescript
const scores: number[] = [
    80,
    55,
    92,
    40,
    88
];

const passingScores = scores.filter((score) => {
    return score >= 60;
});
```

Since the original array contains numbers:

```text
score → number
```

The resulting array is:

```text
passingScores → number[]
```

---

# 9. Practicing Familiar JavaScript Methods with TypeScript

Day 76 connected TypeScript with array methods already learned during the JavaScript journey.

The methods practiced were:

```text
forEach()
map()
filter()
```

The important difference is that TypeScript now understands the types flowing through these operations.

Example:

```text
number[]
   ↓
forEach()
   ↓
number

number[]
   ↓
map()
   ↓
number[]

number[]
   ↓
filter()
   ↓
number[]
```

---

# 10. Union Types

Sometimes an array legitimately needs to contain more than one type.

TypeScript allows this with a union type.

The union operator is:

```text
|
```

Example:

```typescript
const studentData: (string | number)[] = [
    "Mehedi",
    23,
    "CSE",
    3.5
];
```

This means:

> Every item in the array can be either a string or a number.

Therefore:

```typescript
studentData.push("Bangladesh");
```

is valid.

And:

```typescript
studentData.push(2026);
```

is also valid.

But:

```typescript
studentData.push(true);
```

is invalid because `boolean` is not included in the union.

---

# 11. Understanding `(string | number)[]`

The syntax:

```typescript
(string | number)[]
```

can be understood as:

```text
Array
  ↓
Each item can be:
  ↓
string OR number
```

Compare:

```typescript
string[]
```

which means:

```text
Array of strings only
```

with:

```typescript
(string | number)[]
```

which means:

```text
Array of strings OR numbers
```

---

# 12. Practice Example

A mixed student data array:

```typescript
const studentData: (string | number)[] = [
    "Mehedi",
    23,
    "CSE",
    3.5
];
```

Valid additions:

```typescript
studentData.push("Bangladesh");
studentData.push(2026);
```

Invalid addition:

```typescript
studentData.push(true);
```

because:

```text
Allowed:
string
number

Not allowed:
boolean
```

---

# Key Takeaways

1. `string[]` means an array of strings.
2. `number[]` means an array of numbers.
3. `boolean[]` means an array of Booleans.
4. TypeScript can infer the type of an array from its values.
5. Type information flows through array methods.
6. `forEach()` receives items with the inferred array type.
7. `map()` can produce a new typed array.
8. `filter()` preserves the element type of the filtered array.
9. `|` creates a union type.
10. `(string | number)[]` allows strings and numbers in the same array.
11. Values outside the declared union are rejected by TypeScript.

---

## Day 76 Completion

- [x] Learn typed arrays
- [x] Learn `string[]`
- [x] Learn `number[]`
- [x] Learn `boolean[]`
- [x] Practice array type inference
- [x] Use `forEach()` with typed arrays
- [x] Use `map()` with typed arrays
- [x] Use `filter()` with typed arrays
- [x] Understand union types
- [x] Create arrays using `(string | number)[]`
- [x] Test TypeScript's type checking

---

## Next Day

**Day 77 — TypeScript Objects**

The next step is applying TypeScript types to objects and eventually using structured student data similar to the objects already used throughout the JavaScript journey.