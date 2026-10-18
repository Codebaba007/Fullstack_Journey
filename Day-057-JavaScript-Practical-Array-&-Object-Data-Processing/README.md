# Day 57 — JavaScript Array Method Chaining

## Overview

Day 57 focused on combining JavaScript array methods to process data through multiple steps.

Instead of using `filter()`, `sort()`, and `forEach()` as completely separate operations, the lesson introduced **method chaining** and showed how the result of one array method can become the input for the next.

The lesson used student data to create a practical data-processing pipeline.

---

## Objective

By the end of this lesson, I should be able to:

- Combine multiple array methods.
- Understand method chaining.
- Use multiple `filter()` operations together.
- Use `filter()` followed by `sort()`.
- Use `forEach()` after processing an array.
- Understand the different purposes of common array methods.
- Build a simple data-processing pipeline from raw data to final output.

---

## Technologies

- JavaScript
- HTML
- Browser Console

---

## Concepts Learned

### 1. Method Chaining

Method chaining means calling another method on the result returned by a previous method.

For example:

```javascript
const qualifiedStudents = students
    .filter((student) => {
        return student.department === "Computer Science";
    })
    .filter((student) => {
        return student.cgpa >= 3.70;
    });
```

The first `filter()` produces an array.

The second `filter()` then works on that resulting array.

Conceptually:

```text
students
   ↓
filter()
   ↓
Computer Science students
   ↓
filter()
   ↓
Qualified Computer Science students
```

---

### 2. Multiple `filter()` Operations

Multiple filters can be used when data needs to satisfy multiple conditions.

Example:

```javascript
const qualifiedStudents = students
    .filter((student) => {
        return student.department === "Computer Science";
    })
    .filter((student) => {
        return student.cgpa >= 3.70;
    });
```

The first filter selects students from the Computer Science department.

The second filter keeps only students whose CGPA is at least `3.70`.

---

### 3. Combining `filter()` and `sort()`

After selecting the required students, the resulting array can be sorted.

Example:

```javascript
const qualifiedStudents = students
    .filter((student) => {
        return student.department === "Computer Science";
    })
    .filter((student) => {
        return student.cgpa >= 3.70;
    })
    .sort((a, b) => {
        return b.cgpa - a.cgpa;
    });
```

The processing sequence is:

```text
students
    ↓
filter by department
    ↓
filter by CGPA
    ↓
sort by CGPA
    ↓
final array
```

This creates a more realistic way of processing application data.

---

### 4. Using `forEach()` After Processing

Once the required data has been selected and sorted, `forEach()` can be used to perform an action for every remaining item.

Example:

```javascript
qualifiedStudents.forEach((student) => {
    console.log(`${student.name} - ${student.cgpa}`);
});
```

Possible output:

```text
Sadia Islam - 3.91
Rahim Ahmed - 3.75
```

The important distinction is that `forEach()` is being used at the end to work with the final results.

---

## Practical Data Pipeline

The complete process can be visualized as:

```text
Raw Student Data
       ↓
    filter()
       ↓
Computer Science Students
       ↓
    filter()
       ↓
Qualified Students
       ↓
     sort()
       ↓
Sorted Qualified Students
       ↓
   forEach()
       ↓
     Output
```

This pattern represents a simple data-processing workflow that can later be applied to dynamic web applications.

---

## Student Data

The lesson used the following data:

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
    },
    {
        name: "Sadia Islam",
        cgpa: 3.91,
        department: "Computer Science"
    },
    {
        name: "Karim Hasan",
        cgpa: 3.55,
        department: "Software Engineering"
    }
];
```

---

## Practical Exercise

### Task 1 — Filter by Department

Get only the students whose department is:

```text
Computer Science
```

---

### Task 2 — Filter by CGPA

From the Computer Science students, keep only students with:

```text
CGPA >= 3.70
```

---

### Task 3 — Sort the Results

Sort the remaining students from highest CGPA to lowest.

---

### Task 4 — Display the Results

Use `forEach()` to print:

```text
Name: Sadia Islam
CGPA: 3.91
```

and the corresponding information for every remaining student.

---

### Bonus — Chain Everything

Complete the entire process using method chaining instead of creating a separate variable after every operation.

---

## Common Array Methods and Their Roles

Day 57 reinforced the purpose of the array methods learned so far.

```text
filter()
→ selects items that satisfy a condition

map()
→ transforms every item into a new value

find()
→ finds the first matching item

some()
→ checks whether at least one item matches

every()
→ checks whether all items match

reduce()
→ combines array values into one result

sort()
→ changes the order of array items

forEach()
→ performs an action for each item
```

Each method solves a different problem.

The goal is to choose the method based on what needs to happen to the data.

---

## Previous Concepts Used

Day 57 builds on:

- Arrays
- Objects
- Object properties
- Functions
- Function parameters
- Arrow functions
- Callback functions
- Return values
- `filter()`
- `sort()`
- `forEach()`
- Template literals
- Array method chaining

---

## What I Learned

Day 57 taught me how to combine array methods instead of treating each method as an isolated concept.

I learned that one array method can return a result that another method can immediately process.

I practiced using multiple `filter()` operations to narrow down data, `sort()` to organize the result, and `forEach()` to display the final information.

This introduced a practical way of thinking about data processing:

```text
Select → Refine → Organize → Display
```

---

## Day Status

**Completed**

---

## Next

Move back toward the DOM and begin using JavaScript to manipulate actual webpage elements and create dynamic interfaces.

---

> Consistency is the foundation of progress.