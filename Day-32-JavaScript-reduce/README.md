# Day 32 - JavaScript reduce()

## Overview

This project focuses on the JavaScript `reduce()` array method.

Building on the previous lessons covering arrays, objects, loops, `forEach()`, `map()`, `filter()`, and `find()`, this lesson introduces `reduce()` for combining multiple array elements into a single final value.

The Student Management Dashboard dataset is used to practice calculating totals, finding maximum values, and counting students based on conditions.

## Topics Covered

- `reduce()`
- Accumulator
- Current Array Item
- Initial Value
- Returning the Accumulator
- Calculating Totals
- Finding Maximum Values
- Counting Items with Conditions
- Arrays of Objects

## Exercises Completed

### 1. Total Completed Credits

Used `reduce()` to calculate the total completed credits of all students.

```javascript
const totalCredits = students.reduce(function(total, student) {
    return total + student.completedCredits;
}, 0);