# Day 55 - JavaScript sort()

## Overview

Day 55 focuses on the JavaScript `sort()` array method.

The `sort()` method is used to arrange the elements of an array into a specific order. While basic `sort()` can be used for strings, numerical sorting requires a comparison function to correctly determine the order of numbers.

This lesson builds on the array methods learned in previous days and introduces the concept of comparing two values to determine their position within an array.

The Student Information project was used to practice sorting objects based on their `cgpa` property.

---

## Project Objective

The objectives of Day 55 were:

- Understand the `sort()` method
- Understand how `sort()` arranges array elements
- Sort strings alphabetically
- Understand the default behavior of `sort()` with numbers
- Understand comparison functions
- Understand the `a` and `b` callback parameters
- Sort numbers in ascending order
- Sort numbers in descending order
- Sort objects using object properties
- Sort students based on CGPA
- Understand the difference between ascending and descending order
- Understand that `sort()` changes the original array

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Console
- VS Code
- Live Server

---

# Concepts Learned

## 1. The `sort()` Method

`sort()` is a JavaScript array method used to arrange elements within an array.

For example:

```javascript
const numbers = [40, 10, 30, 20];

numbers.sort();

console.log(numbers);
```

The array becomes:

```text
[10, 20, 30, 40]
```

The basic process is:

```text
Original Array

40   10   30   20

        ↓

      sort()

        ↓

10   20   30   40

Sorted Array
```

---

## 2. Sorting Strings

The default `sort()` behavior works naturally for strings.

For example:

```javascript
const names = [
    "Tanvir",
    "Rahim",
    "Nusrat"
];

names.sort();

console.log(names);
```

Output:

```text
["Nusrat", "Rahim", "Tanvir"]
```

The names are arranged alphabetically.

---

## 3. The Problem With Sorting Numbers

JavaScript's default `sort()` behavior can produce unexpected results when working with numbers.

For example:

```javascript
const numbers = [10, 2, 30, 4];

numbers.sort();

console.log(numbers);
```

The expected numerical order would be:

```text
[2, 4, 10, 30]
```

However, default `sort()` compares the values as strings.

Conceptually:

```text
10 → "10"
2  → "2"
30 → "30"
4  → "4"
```

Because of this behavior, numerical arrays should use a comparison function.

---

## 4. Comparison Functions

A comparison function tells `sort()` how two values should be ordered.

For ascending numerical sorting:

```javascript
numbers.sort((a, b) => {
    return a - b;
});
```

For example:

```javascript
const numbers = [10, 2, 30, 4];

numbers.sort((a, b) => {
    return a - b;
});

console.log(numbers);
```

Output:

```text
[2, 4, 10, 30]
```

The important pattern is:

```javascript
a - b
```

This is the standard comparison pattern for ascending numerical order.

---

## 5. Understanding `a` and `b`

The comparison function is a callback function.

```javascript
numbers.sort((a, b) => {
    return a - b;
});
```

Here, `a` and `b` are parameter names representing values that `sort()` is comparing.

They are similar to the callback parameters used in other array methods.

For example:

```javascript
students.filter((student) => {
    return student.cgpa >= 3.75;
});
```

Here:

```text
student → current item
```

With `sort()`:

```javascript
numbers.sort((a, b) => {
    return a - b;
});
```

The comparison function receives two values:

```text
a → first value being compared
b → second value being compared
```

The names `a` and `b` are not special JavaScript keywords. They are simply parameter names.

The same function could be written as:

```javascript
numbers.sort((first, second) => {
    return first - second;
});
```

The behavior is the same.

---

## 6. Understanding `a - b`

Suppose the comparison function receives:

```text
a = 10
b = 2
```

The expression:

```javascript
a - b
```

becomes:

```text
10 - 2

= 8
```

The comparison result helps `sort()` determine the order of the two values.

The general pattern is:

```text
negative → a comes before b
zero     → same relative order
positive → b comes before a
```

For normal numerical sorting, the important patterns are:

```text
a - b
↓
LOW → HIGH
```

and:

```text
b - a
↓
HIGH → LOW
```

---

## 7. Ascending Order

Ascending order means arranging values from the smallest to the largest.

```text
LOW → HIGH
```

The comparison function is:

```javascript
numbers.sort((a, b) => {
    return a - b;
});
```

For example:

```text
2
4
10
30
```

---

## 8. Descending Order

Descending order means arranging values from the largest to the smallest.

```text
HIGH → LOW
```

The comparison function is:

```javascript
numbers.sort((a, b) => {
    return b - a;
});
```

For example:

```javascript
const numbers = [10, 2, 30, 4];

numbers.sort((a, b) => {
    return b - a;
});

console.log(numbers);
```

Output:

```text
[30, 10, 4, 2]
```

The two common numerical sorting patterns are:

```text
a - b
↓
Ascending
LOW → HIGH
```

```text
b - a
↓
Descending
HIGH → LOW
```

---

## 9. Sorting Student Objects

The Student Information project was used to apply `sort()` to objects.

The student data contains:

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

Instead of sorting the objects directly by a single primitive value, a property of each object can be used for comparison.

---

## 10. Sorting Students by CGPA

To sort students from the lowest CGPA to the highest:

```javascript
students.sort((a, b) => {
    return a.cgpa - b.cgpa;
});
```

Here:

```text
a.cgpa → CGPA of the first student
b.cgpa → CGPA of the second student
```

The resulting order is:

```text
Tanvir Hasan    3.62
Rahim Ahmed     3.75
Nusrat Jahan    3.88
```

The same numerical comparison principle is being applied to the `cgpa` property.

---

## 11. Sorting Students in Descending Order

To sort students from the highest CGPA to the lowest:

```javascript
students.sort((a, b) => {
    return b.cgpa - a.cgpa;
});
```

The resulting order is:

```text
Nusrat Jahan    3.88
Rahim Ahmed     3.75
Tanvir Hasan    3.62
```

The only difference is the direction of the comparison:

```javascript
a.cgpa - b.cgpa
```

versus:

```javascript
b.cgpa - a.cgpa
```

---

## 12. Using Object Properties for Comparison

This lesson demonstrated how an object property can be used when sorting a collection of objects.

For the student data:

```javascript
student.cgpa
```

was previously used for conditions such as:

```javascript
student.cgpa >= 3.75
```

With `sort()`, the same property can be used for comparison:

```javascript
a.cgpa - b.cgpa
```

The general pattern is:

```text
Object
   ↓
Property
   ↓
Comparison
   ↓
Ordering
```

This concept can be applied to different types of application data.

For example:

```text
Students   → CGPA
Products   → Price
Users      → Age
Employees  → Salary
```

---

## 13. `sort()` Changes the Original Array

An important behavior of `sort()` is that it changes the order of the original array.

For example:

```javascript
const numbers = [40, 10, 30, 20];

numbers.sort((a, b) => {
    return a - b;
});
```

After sorting, `numbers` itself contains:

```text
[10, 20, 30, 40]
```

The process is:

```text
Before

numbers
[40, 10, 30, 20]

      ↓

    sort()

      ↓

After

numbers
[10, 20, 30, 40]
```

This behavior is important to understand when working with application data and state.

---

## 14. Comparing `sort()` With Previous Array Methods

Several array methods have now been learned.

| Method | Main Purpose | Result |
|---|---|---|
| `map()` | Transform items | New array |
| `filter()` | Select items | New array |
| `find()` | Find the first matching item | One item |
| `some()` | Check whether at least one matches | Boolean |
| `every()` | Check whether all match | Boolean |
| `sort()` | Arrange items | Sorted array |

A simple mental model is:

```text
map()
→ TRANSFORM

filter()
→ SELECT

find()
→ FIND ONE

some()
→ CHECK ANY

every()
→ CHECK ALL

sort()
→ ORGANIZE
```

---

# Practical Experience

The Student Information project was used to practice sorting both primitive values and objects.

I first practiced sorting strings and then examined the problem that occurs when numbers are sorted using the default `sort()` behavior.

A comparison function was then introduced to correctly sort numerical values.

The same concept was applied to student objects by comparing their `cgpa` properties.

Both ascending and descending ordering were tested:

```text
Ascending
LOW → HIGH

Descending
HIGH → LOW
```

This connected the `sort()` method with concepts already learned through callback functions, object properties, parameters, and array methods.

---

# Testing

## Test 1 - String Sorting

A string array was sorted alphabetically.

Expected behavior:

```text
Tanvir
Rahim
Nusrat

↓

Nusrat
Rahim
Tanvir
```

---

## Test 2 - Numerical Sorting

A numerical array was sorted using a comparison function:

```javascript
numbers.sort((a, b) => {
    return a - b;
});
```

The values were arranged from lowest to highest.

---

## Test 3 - Descending Numerical Sorting

The comparison function was changed to:

```javascript
numbers.sort((a, b) => {
    return b - a;
});
```

The values were arranged from highest to lowest.

---

## Test 4 - Student CGPA Sorting

Students were sorted using:

```javascript
students.sort((a, b) => {
    return a.cgpa - b.cgpa;
});
```

The students were correctly arranged from the lowest CGPA to the highest.

---

## Test 5 - Descending Student Sorting

The comparison was reversed:

```javascript
students.sort((a, b) => {
    return b.cgpa - a.cgpa;
});
```

The students were correctly arranged from the highest CGPA to the lowest.

---

# Previous Concepts Used

Day 55 reinforced concepts learned throughout the previous JavaScript lessons:

- Variables
- `const`
- Arrays
- Objects
- Object properties
- Functions
- Function parameters
- Function arguments
- Return values
- Arrow functions
- Callback functions
- Array methods
- `map()`
- `filter()`
- `find()`
- `some()`
- `every()`
- Comparison operators
- Arithmetic operators
- `console.log()`

---

# What I Learned

Day 55 taught me how to use the JavaScript `sort()` method to organize array data.

I learned that `sort()` can be used directly with strings, but numerical sorting requires a comparison function to avoid the default string-based behavior.

I learned that the comparison function receives two values through its parameters and uses the returned result to determine their ordering.

The two most important numerical sorting patterns are:

```javascript
a - b
```

for ascending order and:

```javascript
b - a
```

for descending order.

I also learned how to apply the same concept to arrays of objects by comparing a property such as:

```javascript
a.cgpa - b.cgpa
```

Another important concept was that `sort()` changes the original array by rearranging its elements.

Day 55 connected sorting with callback functions, parameters, objects, object properties, arithmetic operations, and the array methods learned in previous lessons.

---

# Project Structure

```text
Day-55-JavaScript-sort/
│
├── index.html
├── script.js
├── style.css
└── README.md
```

---

# Day Status

Completed