# Day 54 - JavaScript `every()`

## Overview

Day 54 focused on learning the JavaScript `every()` array method.

The `every()` method is used when we want to check whether **all items in an array satisfy a specific condition**.

Unlike `map()`, `filter()`, and `find()`, the `every()` method does not return an array or an object.

It returns a **boolean value**:

- `true` → every item satisfies the condition
- `false` → at least one item does not satisfy the condition

---

## Project Objective

The objective of Day 54 was to use `every()` to determine whether all students in a student array meet a specific CGPA requirement.

The project continued using the student data from previous JavaScript lessons.

---

## Technologies Used

- HTML
- JavaScript
- Browser Console

---

# Concepts Learned

## 1. JavaScript `every()`

The `every()` method checks whether **every item in an array passes a condition**.

Basic structure:

```javascript
array.every((item) => {
    return condition;
});
```

The callback runs for the items in the array.

If every callback execution returns `true`, `every()` returns:

```text
true
```

If even one item returns `false`, `every()` returns:

```text
false
```

---

## 2. Understanding the Return Value

Example:

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.every((number) => {
    return number >= 10;
});

console.log(result);
```

Output:

```text
true
```

Every number is greater than or equal to `10`.

---

## 3. When One Item Fails

Consider:

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.every((number) => {
    return number >= 30;
});

console.log(result);
```

Output:

```text
false
```

The reason is that:

```text
10 >= 30 → false
```

Since the requirement is that **every item** must satisfy the condition, the final result becomes `false`.

---

## 4. `every()` Returns a Boolean

One important concept learned was that `every()` returns:

```text
true
```

or:

```text
false
```

It does not return:

- the matching object
- an array of matching objects
- the number of matching objects

For example:

```javascript
const numbers = [10, 20, 30];

const result = numbers.every((number) => {
    return number >= 10;
});

console.log(result);
```

Output:

```text
true
```

Therefore, we can directly use the result inside an `if` statement:

```javascript
if (result) {
    console.log("All students qualified");
} else {
    console.log("Not all students qualified");
}
```

---

## 5. `every()` with Student Objects

The student data used during the lesson:

```javascript
const students = [
    {
        name: "Rahim Ahmed",
        cgpa: 3.75,
        department: "Computer Science"
    },
    {
        name: "Nusrat Jahan",
        cgpa: 3.88,
        department: "Software Engineering"
    },
    {
        name: "Tanvir Hasan",
        cgpa: 3.62,
        department: "Computer Science"
    }
];
```

We can check whether every student has a CGPA of at least `3.50`:

```javascript
const allStudentsQualified = students.every((student) => {
    return student.cgpa >= 3.50;
});

console.log(allStudentsQualified);
```

Output:

```text
true
```

All three students satisfy the requirement.

---

## 6. Increasing the Requirement

The requirement can be increased:

```javascript
const allStudentsQualified = students.every((student) => {
    return student.cgpa >= 3.75;
});

console.log(allStudentsQualified);
```

The result is:

```text
false
```

The reason is:

```text
Rahim Ahmed   → 3.75 → true
Nusrat Jahan  → 3.88 → true
Tanvir Hasan  → 3.62 → false
```

Because Tanvir does not meet the `3.75` requirement, `every()` returns `false`.

---

## 7. `every()` Stops When It Finds a Failure

`every()` does not necessarily need to check every item.

Conceptually:

```text
Student 1 → condition true
             ↓
Student 2 → condition true
             ↓
Student 3 → condition false
             ↓
         STOP
             ↓
          false
```

Once one item fails the condition, the answer is already known.

This is similar to how `some()` can stop once it finds a successful match.

---

## 8. `some()` vs `every()`

These two methods are closely related.

### `some()`

Asks:

```text
"Does AT LEAST ONE item satisfy the condition?"
```

Example:

```javascript
const result = students.some((student) => {
    return student.cgpa >= 3.80;
});
```

Result:

```text
true
```

because Nusrat has a CGPA of `3.88`.

---

### `every()`

Asks:

```text
"Do ALL items satisfy the condition?"
```

Example:

```javascript
const result = students.every((student) => {
    return student.cgpa >= 3.80;
});
```

Result:

```text
false
```

because Rahim and Tanvir do not meet the requirement.

---

## 9. Mental Model

A simple way to remember the difference:

```text
some()
   ↓
"Is there at least ONE?"

YES → true
NO  → false
```

```text
every()
   ↓
"Are ALL of them okay?"

YES → true
NO  → false
```

Another useful comparison:

```text
some()
→ stops when it finds TRUE

every()
→ stops when it finds FALSE
```

---

# Practical Experience

A student qualification check was created using `every()`.

The requirement was initially:

```text
CGPA >= 3.60
```

All students passed:

```text
Rahim Ahmed   → 3.75 → PASS
Nusrat Jahan  → 3.88 → PASS
Tanvir Hasan  → 3.62 → PASS

Result → true
```

The requirement was then increased to:

```text
CGPA >= 3.70
```

Now:

```text
Rahim Ahmed   → 3.75 → PASS
Nusrat Jahan  → 3.88 → PASS
Tanvir Hasan  → 3.62 → FAIL

Result → false
```

This demonstrated how `every()` evaluates the entire collection as an **all-or-nothing condition**.

---

# Testing

## Test 1 — Requirement: 3.60

```javascript
const allStudentsQualified = students.every((student) => {
    return student.cgpa >= 3.60;
});

console.log(allStudentsQualified);
```

Expected output:

```text
true
```

---

## Test 2 — Requirement: 3.70

```javascript
const allStudentsQualified = students.every((student) => {
    return student.cgpa >= 3.70;
});

console.log(allStudentsQualified);
```

Expected output:

```text
false
```

Tanvir Hasan has a CGPA of `3.62`, so not every student satisfies the condition.

---

# Previous Concepts Used

Day 54 also reinforced several concepts learned previously:

- Arrays
- Objects
- Object properties
- Callback functions
- Arrow functions
- Function parameters
- `return`
- Boolean values
- Conditions
- Comparison operators
- Array methods
- `some()`
- `every()`

---

# What I Learned

- `every()` checks whether **all array items** satisfy a condition.
- `every()` returns a boolean.
- `true` means every item passed.
- `false` means at least one item failed.
- The callback receives the current array item.
- `every()` can work with arrays containing objects.
- Object properties can be used inside the callback condition.
- `some()` asks whether at least one item passes.
- `every()` asks whether all items pass.
- `some()` can stop when it finds `true`.
- `every()` can stop when it finds `false`.

---

# Project Structure

```text
Day-54/
│
├── index.html
├── script.js
└── README.md
```

---

# Day Status

**Day 54 — Completed ✅**

Concept learned:

```text
JavaScript every()
```

The student qualification exercise was completed and tested using different CGPA requirements.

---

# Next Steps

Continue with more JavaScript array methods and gradually combine them with the methods already learned.

The next lesson introduces:

```text
JavaScript sort()
```

This will focus on arranging values and objects into a specific order.

---

> **Day 54 Takeaway:** `every()` answers one simple question — **"Do ALL items satisfy this condition?"**