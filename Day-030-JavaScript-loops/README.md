# Day 30 - JavaScript Loops

## Overview

This project focuses on JavaScript `for` loops and their use with arrays of objects.

Building on the previous day, where multiple student records were stored inside an array, this project uses loops to process each student without manually accessing every array index.

The Student Management Dashboard data is used to practice iterating through student records, checking conditions, counting matching students, and calculating values from multiple records.

## Topics Covered

- JavaScript `for` Loops
- Loop Initialization
- Loop Conditions
- Loop Increment
- Array Indexes
- Accessing Objects Inside Arrays
- Conditional Statements Inside Loops
- Counter Variables
- Accumulator Variables
- Calculating Averages
- Processing Collections of Data

## Exercises Completed

### 1. Iterating Through Students

Used a `for` loop to access every student in the array.

```javascript
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}