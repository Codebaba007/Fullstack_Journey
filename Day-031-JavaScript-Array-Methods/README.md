# Day 31 - JavaScript Array Methods

## Overview

This project focuses on JavaScript array methods for processing and working with collections of student objects.

Building on the previous lessons on arrays, objects, and loops, this project introduces methods that make it easier to iterate through arrays, transform data, select specific items, and search for individual objects.

The Student Management Dashboard data is used as the practical dataset throughout the exercises.

## Topics Covered

- `forEach()`
- `map()`
- `filter()`
- `find()`
- Callback Functions
- Function Parameters
- Returning Values from Callback Functions
- Processing Arrays of Objects
- Creating New Arrays from Existing Data
- Searching Arrays

## Exercises Completed

### 1. forEach()

Used `forEach()` to perform an operation on every student.

```javascript
students.forEach(function(student) {
    console.log(student.name);
});