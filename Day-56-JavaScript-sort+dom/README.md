# Day 56 — JavaScript `sort()`

## Overview

Day 56 focused on the JavaScript `sort()` method and how it can be used to organize arrays containing numbers, strings, and objects.

The lesson covered the comparison function used by `sort()`, ascending and descending order, sorting objects by their properties, alphabetical string sorting, and the fact that `sort()` modifies the original array.

The main goal was to understand how `sort()` makes decisions when comparing two values and how the same concept can be applied to real application data.

---

## Objective

By the end of this lesson, I should be able to:

- Sort numbers in ascending order.
- Sort numbers in descending order.
- Understand the comparison function used by `sort()`.
- Understand what `a` and `b` represent inside the comparison function.
- Sort arrays of objects using object properties.
- Sort strings alphabetically.
- Sort strings in reverse alphabetical order.
- Combine `sort()` with previously learned array methods.
- Understand that `sort()` mutates the original array.

---

## Technologies

- JavaScript
- HTML
- Browser Console

---

## Concepts Learned

### 1. `sort()`

`sort()` is an array method used to reorder the elements of an array.

For example:

```javascript
const numbers = [40, 10, 30, 20];

numbers.sort((a, b) => {
    return a - b;
});
```

The resulting order is:

```text
10
20
30
40
```

---

### 2. The Comparison Function

The comparison function tells `sort()` how two elements should be ordered.

```javascript
(a, b) => {
    return a - b;
}
```

The `a` and `b` parameters represent two values being compared.

They are supplied by `sort()` while it performs the comparisons.

The function does not decide which values `a` and `b` represent.

---

### 3. Ascending Numerical Order

The common pattern for sorting numbers from smallest to largest is:

```javascript
numbers.sort((a, b) => {
    return a - b;
});
```

For example:

```text
3.62 - 3.75 = -0.13
```

The comparison result helps `sort()` determine which value should come first.

The general pattern is:

```text
a - b
→ ascending order
```

---

### 4. Descending Numerical Order

To sort numbers from largest to smallest:

```javascript
numbers.sort((a, b) => {
    return b - a;
});
```

The general pattern is:

```text
b - a
→ descending order
```

Example:

```text
40
30
20
10
```

---

## 5. Sorting Objects

`sort()` can also be used with arrays containing objects.

Example student data:

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

The students can be sorted by CGPA:

```javascript
students.sort((a, b) => {
    return a.cgpa - b.cgpa;
});
```

Result:

```text
Tanvir Hasan - 3.62
Rahim Ahmed - 3.75
Nusrat Jahan - 3.88
```

For descending order:

```javascript
students.sort((a, b) => {
    return b.cgpa - a.cgpa;
});
```

Result:

```text
Nusrat Jahan - 3.88
Rahim Ahmed - 3.75
Tanvir Hasan - 3.62
```

---

## 6. Understanding `a` and `b` With Objects

When using:

```javascript
students.sort((a, b) => {
    return a.cgpa - b.cgpa;
});
```

`a` represents one student object and `b` represents another student object being compared.

Therefore:

```javascript
a.cgpa
```

means the CGPA of student `a`.

And:

```javascript
b.cgpa
```

means the CGPA of student `b`.

The comparison therefore becomes:

```text
CGPA of A - CGPA of B
```

This allows `sort()` to determine the correct order of the student objects.

---

## 7. Sorting Strings

Strings can be compared using:

```javascript
localeCompare()
```

For example:

```javascript
students.sort((a, b) => {
    return a.name.localeCompare(b.name);
});
```

This sorts the students alphabetically by their names.

Result:

```text
Nusrat Jahan
Rahim Ahmed
Tanvir Hasan
```

---

## 8. Reverse Alphabetical Order

The comparison can be reversed:

```javascript
students.sort((a, b) => {
    return b.name.localeCompare(a.name);
});
```

Result:

```text
Tanvir Hasan
Rahim Ahmed
Nusrat Jahan
```

The same ascending/descending idea used with numbers can therefore be applied to strings.

---

## 9. `sort()` Mutates the Original Array

An important behavior of `sort()` is that it changes the original array.

For example:

```javascript
students.sort((a, b) => {
    return a.cgpa - b.cgpa;
});
```

After this operation, the `students` array itself has been reordered.

`sort()` does not automatically create a separate untouched copy of the array.

This is important to remember when working with application data.

---

## Practical Exercises

### Exercise 1 — Numerical Sorting

Create an array of numbers and sort it:

- From lowest to highest.
- From highest to lowest.

---

### Exercise 2 — Student CGPA Sorting

Using the student array:

- Sort students by CGPA in ascending order.
- Sort students by CGPA in descending order.
- Print their names and CGPAs.

Expected ascending order:

```text
Tanvir Hasan - 3.62
Rahim Ahmed - 3.75
Nusrat Jahan - 3.88
```

Expected descending order:

```text
Nusrat Jahan - 3.88
Rahim Ahmed - 3.75
Tanvir Hasan - 3.62
```

---

### Exercise 3 — Alphabetical Sorting

Sort the students alphabetically by name.

Expected:

```text
Nusrat Jahan
Rahim Ahmed
Tanvir Hasan
```

Then sort them in reverse alphabetical order.

Expected:

```text
Tanvir Hasan
Rahim Ahmed
Nusrat Jahan
```

---

### Exercise 4 — Combine `sort()` With `forEach()`

After sorting the students, use `forEach()` to display their complete information.

Expected format:

```text
Name: Nusrat Jahan
CGPA: 3.88
Department: Software Engineering

Name: Rahim Ahmed
CGPA: 3.75
Department: Computer Science

Name: Tanvir Hasan
CGPA: 3.62
Department: Computer Science
```

---

## Key Patterns

### Numbers — Ascending

```javascript
array.sort((a, b) => {
    return a - b;
});
```

### Numbers — Descending

```javascript
array.sort((a, b) => {
    return b - a;
});
```

### Objects — Ascending by Number Property

```javascript
array.sort((a, b) => {
    return a.property - b.property;
});
```

### Objects — Descending by Number Property

```javascript
array.sort((a, b) => {
    return b.property - a.property;
});
```

### Objects — Alphabetical String Property

```javascript
array.sort((a, b) => {
    return a.property.localeCompare(b.property);
});
```

### Objects — Reverse Alphabetical String Property

```javascript
array.sort((a, b) => {
    return b.property.localeCompare(a.property);
});
```

---

## Previous Concepts Used

Day 56 builds on concepts learned throughout the JavaScript journey:

- Arrays
- Objects
- Object properties
- Functions
- Function parameters
- Arrow functions
- Callback functions
- Return values
- `forEach()`
- Array methods
- `console.log()`

---

## What I Learned

Day 56 taught me how to use `sort()` to organize different types of data.

I learned how the comparison function controls the ordering of values and how `a` and `b` represent the values being compared.

I learned that `a - b` is commonly used for ascending numerical sorting, while `b - a` produces descending order.

I also learned how to sort objects using their properties and how `localeCompare()` can be used when sorting strings.

Finally, I learned that `sort()` mutates the original array, which is important when working with application data.

---

## Day Status

**Completed**

---

## Next

Continue with practical array and object data-processing patterns before moving back into deeper DOM manipulation and dynamic interfaces.

---

> Consistency is the foundation of progress.