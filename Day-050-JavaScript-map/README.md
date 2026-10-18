# Day 50 - JavaScript map()

## Overview

Day 50 focuses on the JavaScript `map()` array method.

In Day 49, I learned how `forEach()` uses callback functions to perform an operation for every item in an array. Day 50 builds directly on that concept by introducing `map()`, which also uses a callback function but is designed for a different purpose.

The main purpose of `map()` is to transform every item in an array and create a new array containing the transformed results. The callback receives the current item, performs the required transformation, and returns a value. `map()` then collects those returned values into a new array.

Throughout this lesson, the Student Information project was used to practice `map()` with realistic data. I worked with arrays of numbers, student objects, object properties, strings, calculated values, indexes, new objects, and conditional logic.

---

## Project Objective

The objectives of Day 50 were:

- Understand the `map()` method
- Understand how `map()` works with callback functions
- Understand why `map()` creates a new array
- Understand the difference between `map()` and `forEach()`
- Transform numbers using `map()`
- Extract information from objects
- Transform objects into strings
- Transform objects into numbers
- Transform objects into new objects
- Use indexes inside a `map()` callback
- Perform calculations during transformations
- Use conditional logic during transformations
- Preserve the original array
- Apply `map()` to the Student Information project

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM API
- Git
- GitHub
- VS Code
- Live Server

---

# Concepts Learned

## 1. The `map()` Method

`map()` is a JavaScript array method used to transform every item in an array.

It executes a callback function once for every item and uses the value returned by that callback to create a new array.

The basic structure is:

```javascript
const newArray = array.map((item) => {
    return transformedValue;
});
```

The important part is the `return`. For every item in the original array, the callback produces a result, and `map()` collects those results into a new array.

The general process is:

```text
Original Array
      ↓
    map()
      ↓
Callback runs for each item
      ↓
Each callback returns a value
      ↓
Returned values are collected
      ↓
New Array
```

This makes `map()` useful when existing data needs to be converted into another form.

---

## 2. `map()` and Callback Functions

The callback concept learned on Day 48 is directly used with `map()`.

A callback is a function that is passed into another function. With `map()`, the callback describes how each array item should be transformed.

For example:

```javascript
numbers.map((number) => {
    return number * 2;
});
```

The arrow function is the callback.

`map()` passes each number into the callback. The callback performs the transformation and returns the result.

This means the callback is responsible for defining the transformation while `map()` handles going through the array and collecting the returned results.

---

## 3. Why `return` Matters in `map()`

The `return` statement is an important part of using `map()`.

For example:

```javascript
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});
```

Each callback execution returns a transformed number. `map()` then uses those returned values to create the new array.

The mental model is:

```text
Current Item
      ↓
Callback
      ↓
Transformation
      ↓
return
      ↓
map() collects result
      ↓
New Array
```

This connects directly with the function `return` concept learned earlier in the journey.

---

## 4. `map()` vs `forEach()`

One of the most important concepts of Day 50 was understanding the difference between `map()` and `forEach()`.

Both methods use callback functions and process array items one at a time, but they are designed for different purposes.

`forEach()` is mainly used when an action needs to be performed for every item. For example, printing every student's name is an action.

`map()` is used when every item needs to be transformed and the transformed values need to be stored in a new array.

The difference can be summarized as:

```text
forEach()
    ↓
Perform an action for every item


map()
    ↓
Transform every item
    ↓
Return a value
    ↓
Create a new array
```

A callback can return a value inside `forEach()`, but `forEach()` itself does not collect those returned values into a new array.

This became clear during practice when I tried to assign the result of `forEach()` to a variable and received `undefined`.

`map()` is specifically designed to collect callback return values into a new array.

---

## 5. Transforming Numbers

The first `map()` exercises used simple arrays of numbers to understand the basic behavior of transformation.

Each number was transformed into another value, such as doubling the number or increasing it by a specific amount.

The original array remained available while the transformed values were stored in a separate array.

This provided a simple introduction to the concept before applying `map()` to more complex student objects.

---

## 6. Extracting Student Information

The Student Information project was used to practice `map()` with objects.

The students array contains objects with properties such as `name` and `cgpa`.

Using `map()`, I learned how to transform an array of student objects into an array containing only student names.

The same approach can be used to create an array containing only CGPA values.

For example:

```javascript
const studentNames = students.map((student) => student.name);
```

The original student objects remain unchanged.

The result is a new array containing the selected property from every student.

---

## 7. Transforming Objects into Strings

`map()` can transform objects into formatted strings.

Student information can be combined into a message containing the student's name and CGPA.

The transformation follows this general process:

```text
Student Object
      ↓
Access Properties
      ↓
Combine Information
      ↓
String
```

This is useful when application data needs to be converted into a format that can be displayed to a user.

---

## 8. Transforming Objects into New Objects

`map()` can also return a completely new object.

An existing student object can be transformed into a new object containing selected properties and additional information.

For example, a transformed student object can contain:

```text
number
name
cgpa
message
```

The callback creates and returns the new object.

The structure becomes:

```text
Original Students
      ↓
    map()
      ↓
New Student Objects
      ↓
New Array
```

This is useful when an application needs a different data structure from the original data.

---

## 9. Using the Index with `map()`

The `map()` callback can receive the current index.

The callback can be written as:

```javascript
students.map((student, index) => {
    // transformation
});
```

The parameters represent:

```text
student → current item
index → current position
```

JavaScript arrays begin at index `0`.

Therefore, `index + 1` can be used when creating human-readable student numbers.

This allowed the Student Information project to create student numbers such as:

```text
Student 1
Student 2
Student 3
```

while the actual array indexes remain:

```text
0
1
2
```

---

## 10. Performing Calculations with `map()`

`map()` can perform calculations while transforming data.

In the Student Information project, CGPA values were used to calculate student percentages.

The calculation used was:

```text
percentage = CGPA × 25
```

Each student was processed individually.

For example:

```text
CGPA
 ↓
Multiply by 25
 ↓
Percentage
```

The calculated value could then be stored inside a new student result object.

This demonstrated that `map()` can be used for actual data processing and transformation rather than only extracting properties.

---

## 11. Using Conditional Logic with `map()`

Conditional logic can be used during a `map()` transformation.

The calculated student percentage was used to determine a performance status.

The rules used were:

```text
Percentage >= 95 → Excellent
Percentage >= 90 → Good
Otherwise → Average
```

Each student was evaluated independently.

The resulting status could then be stored inside a new student result object.

This combined several previously learned concepts:

- Variables
- Objects
- Object properties
- Calculations
- `if`
- `else if`
- `else`
- Comparison operators
- `map()`
- `return`

---

## 12. Preserving the Original Array

Another important concept learned was that `map()` creates a new array.

The original array remains available after the transformation.

The general structure is:

```text
students
   ↓
map()
   ↓
studentResults
```

The original student data can therefore be preserved while a separate array contains transformed information.

This is useful when an application needs both the original data and a transformed version of that data.

---

## 13. Implicit Return with `map()`

Because `map()` is commonly used with arrow functions, implicit return can make simple transformations shorter.

Instead of:

```javascript
const studentNames = students.map((student) => {
    return student.name;
});
```

the same transformation can be written as:

```javascript
const studentNames = students.map((student) => student.name);
```

The second version works because an arrow function with a single expression can return that expression implicitly.

This connects the arrow function concepts from Day 47 with the callback and array method concepts learned during Day 50.

---

# Practical Experience

The Student Information project was used to practice `map()` with an array of student objects.

I first used `map()` with simple numbers to understand how individual values are transformed. I then applied the same concept to student objects by extracting names and CGPAs and creating formatted student messages.

After understanding basic transformations, I used `map()` to create new student objects containing additional information. I also used the index to generate student numbers and performed calculations using CGPA values.

The final exercise combined `map()` with calculations and conditional logic to create student result data containing the student's number, name, CGPA, percentage, and performance status.

This practical work helped me understand how `map()` can be used to process real application data and create new data structures without modifying the original array.

---

# Testing

## Test 1 - Number Transformation

A numbers array was transformed using `map()` to verify that each original value could be converted into a new value.

The test confirmed that the transformed values were collected into a new array while the original array remained unchanged.

## Test 2 - Student Name Extraction

The students array was mapped to extract only student names.

This confirmed that object properties can be transformed into a new array of simpler values.

## Test 3 - Student CGPA Extraction

The students array was mapped to extract CGPA values.

This confirmed that `map()` can return numerical values as well as strings.

## Test 4 - Student Message Transformation

Each student object was transformed into a formatted message containing the student's name and CGPA.

This confirmed that objects can be transformed into strings.

## Test 5 - New Student Objects

Each student was transformed into a new object containing selected properties and additional information.

This confirmed that `map()` can create new object structures.

## Test 6 - Index Transformation

The student index was used to generate human-readable student numbers.

This confirmed that the `map()` callback can receive both the current item and its index.

## Test 7 - Student Percentage

The CGPA was used to calculate a percentage for each student.

This confirmed that calculations can be performed during a `map()` transformation.

## Test 8 - Student Performance

Conditional logic was used to assign performance statuses based on percentage.

The final transformation successfully created student result data containing the student's number, name, CGPA, percentage, and performance status.

---

# Previous Concepts Used

Day 50 built upon concepts learned during previous JavaScript lessons:

- Variables
- `const`
- Arrays
- Objects
- Object properties
- Functions
- Function parameters
- Function arguments
- Function calls
- `return`
- Default parameters
- Arrow functions
- Implicit return
- Callback functions
- `forEach()`
- `if`
- `else if`
- `else`
- Comparison operators
- `>=`
- Arithmetic operators
- `console.log()`

---

# What I Learned

Day 50 taught me how to use the JavaScript `map()` method to transform array data.

I learned that `map()` executes a callback function once for every item in an array and uses the value returned by the callback to create a new array.

The most important lesson was understanding the difference between `forEach()` and `map()`. Although both methods use callback functions and process array items, their purposes are different. `forEach()` is mainly used when I want to perform an action for every item, while `map()` is used when I want to transform every item and create a new array containing the transformed results.

I learned that the value returned by the `map()` callback becomes an element in the new array. This made the connection between functions, `return`, callback functions, and array methods much clearer.

I also learned that `map()` can transform data into different forms. A student object can become a string, a number, or another object depending on what the callback returns.

I learned how to use the index inside a `map()` callback and how to perform calculations while transforming data. I also learned how conditional logic can be used during the transformation process to create useful derived information.

Another important lesson was that the original array remains available after using `map()`. This means I can preserve the original student data while creating separate arrays containing transformed information.

Day 50 connected many previous JavaScript concepts together. Arrow functions provided the callback syntax, callback functions explained how `map()` receives a function, `return` explained how transformed values are produced, objects provided realistic data to transform, and `forEach()` provided a useful comparison for understanding why `map()` is needed.

---

# Project Structure

```text
Day-50-JavaScript-map/

│
├── index.html
├── script.js
├── style.css
├── assets/
└── README.md
```

---

# Day Status

Completed

---

# Next Steps

The next lesson will continue building on JavaScript array methods and callback functions.

The next major concept will be the `filter()` method. While `map()` is used to transform every item and create a new array containing the transformed results, `filter()` is used to test items against a condition and create a new array containing only the items that pass that condition.

After learning `filter()`, I will gradually begin combining `map()`, `filter()`, and other array methods to process collections of student objects.

This will move the Student Information project beyond simply storing and displaying information and toward more practical data processing, such as selecting students based on CGPA, creating filtered student lists, transforming those results, and eventually combining multiple array methods together.