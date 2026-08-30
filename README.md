# Day 51 - JavaScript filter()

## Overview

Day 51 focuses on the JavaScript `filter()` array method.

In Day 50, I learned how `map()` can transform every item in an array and create a new array containing the transformed results. Day 51 builds on that knowledge by introducing `filter()`, which is used for a different purpose. Instead of transforming every item, `filter()` checks each item against a condition and keeps only the items for which the condition evaluates to `true`.

The main idea behind `filter()` is selection. When working with an array of data, I can use `filter()` to select only the items that meet specific requirements while leaving the original array unchanged. This is especially useful when working with collections of objects such as students, products, users, or database results.

Throughout this lesson, the Student Information project was used to practice filtering student data. I worked with numerical conditions, object properties, strings, multiple conditions, logical operators, indexes, and method chaining. I also learned how `filter()` can be combined with `map()` to first select the required data and then transform it.

---

## Project Objective

The objectives of Day 51 were:

- Understand the `filter()` method
- Understand how `filter()` uses callback functions
- Understand the boolean result required by `filter()`
- Understand the difference between `filter()` and `map()`
- Filter arrays of numbers
- Filter arrays of objects
- Filter objects using their properties
- Use comparison operators with `filter()`
- Use `&&` with `filter()`
- Use `||` with `filter()`
- Use `!==` with `filter()`
- Use multiple conditions
- Use parentheses to control complex conditions
- Use strings as filtering conditions
- Use the array index inside a filter callback
- Understand what `filter()` returns
- Combine `filter()` and `map()`
- Use method chaining
- Preserve the original array while creating filtered results

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

## 1. The `filter()` Method

`filter()` is a JavaScript array method used to create a new array containing only the items that pass a condition.

The basic structure is:

```javascript
const newArray = array.filter((item) => {
    return condition;
});
```

The callback runs once for every item in the array.

The callback must return a value that can be evaluated as `true` or `false`.

The basic process is:

```text
Original Array
      ↓
    filter()
      ↓
Check each item
      ↓
true  → KEEP
false → REMOVE
      ↓
New Array
```

Unlike `map()`, the goal of `filter()` is not to transform every item. The goal is to decide which items should remain in the resulting array.

---

## 2. The Boolean Result

The callback used by `filter()` must produce a condition that determines whether an item stays in the new array.

For example:

```javascript
const largeNumbers = numbers.filter((number) => {
    return number > 25;
});
```

The condition:

```javascript
number > 25
```

produces either `true` or `false`.

The behavior is:

```text
true  → keep the item
false → remove the item
```

For example:

```text
10 > 25 → false → REMOVE
20 > 25 → false → REMOVE
30 > 25 → true  → KEEP
40 > 25 → true  → KEEP
```

This is the fundamental behavior of `filter()`.

---

## 3. `filter()` with Student Objects

The Student Information project was used to practice `filter()` with objects.

The student data contains objects with properties such as:

```text
name
cgpa
department
```

A student can be selected by checking one of these properties.

For example:

```javascript
const scholarshipStudents = students.filter((student) => {
    return student.cgpa >= 3.75;
});
```

Here, `filter()` checks the CGPA of every student.

Students meeting the requirement are kept while students below the requirement are removed from the new array.

The original `students` array remains unchanged.

---

## 4. `filter()` vs `map()`

Understanding the difference between `filter()` and `map()` was one of the most important parts of Day 51.

`map()` answers:

> What should every item become?

`filter()` answers:

> Which items should stay?

The mental model is:

```text
map()
 ↓
Transform every item
 ↓
Return a new value
 ↓
New array
```

while:

```text
filter()
 ↓
Check every item
 ↓
true  → keep
false → remove
 ↓
New array
```

For example:

```javascript
const studentNames = students.map((student) => {
    return student.name;
});
```

This transforms every student into a name.

But:

```javascript
const qualifiedStudents = students.filter((student) => {
    return student.cgpa >= 3.75;
});
```

This keeps only students who meet the condition.

This distinction is important when deciding which array method to use.

---

## 5. `filter()` with `&&`

Multiple conditions can be combined using the logical AND operator `&&`.

For example:

```javascript
const selectedStudents = students.filter((student) => {
    return student.cgpa >= 3.75 &&
           student.department === "Computer Science";
});
```

The `&&` operator means both conditions must be true.

The logic is:

```text
Condition A → true
Condition B → true
------------------
Result → true → KEEP
```

If either condition is false, the student is removed.

This allows filtering rules to become more specific.

---

## 6. `filter()` with `||`

The logical OR operator `||` can be used when at least one condition should be true.

For example:

```javascript
const selectedStudents = students.filter((student) => {
    return student.department === "Software Engineering" ||
           student.cgpa >= 3.80;
});
```

The logic is:

```text
true  || false → true
false || true  → true
true  || true  → true
false || false → false
```

Therefore, an item is kept when either condition passes.

This is useful when there are multiple ways for an item to qualify.

---

## 7. `filter()` with `!==`

The `!==` operator can be used to remove items matching a particular value.

For example:

```javascript
const nonCSStudents = students.filter((student) => {
    return student.department !== "Computer Science";
});
```

The condition asks whether the student's department is not Computer Science.

Students from other departments pass the condition and remain in the new array.

This demonstrated that filtering can be used both to select desired values and to exclude unwanted values.

---

## 8. Filtering Strings

`filter()` can work with string properties as well as numbers.

For example:

```javascript
const softwareStudents = students.filter((student) => {
    return student.department === "Software Engineering";
});
```

Here the student's department is compared with a string.

This demonstrated that `filter()` can be used with different types of data as long as the callback produces the required boolean result.

---

## 9. Complex Filtering Conditions

Several conditions can be combined to create more specific filtering rules.

For example:

```javascript
const selectedStudents = students.filter((student) => {
    return (
        (student.department === "Computer Science" &&
         student.cgpa >= 3.70) ||
        student.department === "Software Engineering"
    );
});
```

Parentheses help group related conditions together.

The logic can be understood as:

```text
Computer Science
      ↓
CGPA >= 3.70
      ↓
Both must be true

        OR

Software Engineering
```

This demonstrates how `filter()` can be used with more realistic application requirements.

---

## 10. Using the Index with `filter()`

The `filter()` callback can also receive the current index.

For example:

```javascript
students.filter((student, index) => {
    return index < 2;
});
```

The callback parameters are:

```text
student → current item
index   → current position
```

The index starts at `0`, just like other JavaScript array methods.

Therefore:

```text
index 0 → first student
index 1 → second student
index 2 → third student
```

The index can be used when the position of an item matters.

However, the index is optional and should only be included when it is actually needed.

---

## 11. Understanding What `filter()` Returns

Another important concept was understanding that `filter()` returns a new array containing the original items that passed the condition.

For example:

```javascript
const qualifiedStudents = students.filter((student) => {
    return student.cgpa >= 3.75;
});
```

If two students pass the condition, the resulting array contains those two student objects.

The objects themselves are not transformed.

The process is:

```text
students
   ↓
filter()
   ↓
matching student objects
   ↓
qualifiedStudents
```

This is different from `map()`, where the callback determines what each item becomes.

---

## 12. Combining `filter()` and `map()`

One of the most useful concepts learned during Day 51 was combining `filter()` and `map()`.

For example:

```javascript
const qualifiedNames = students
    .filter((student) => student.cgpa >= 3.75)
    .map((student) => student.name);
```

The first method filters the students.

The second method transforms the filtered students into names.

The process is:

```text
students
   ↓
filter()
   ↓
qualified students
   ↓
map()
   ↓
student names
```

This demonstrates that each method can perform a separate job.

`filter()` decides which items are needed.

`map()` decides what those selected items should become.

---

## 13. Method Chaining

Calling one array method after another is called method chaining.

For example:

```javascript
const qualifiedNames = students
    .filter((student) => student.cgpa >= 3.75)
    .map((student) => student.name);
```

The result of `filter()` becomes the array that `map()` operates on.

The chain can be read from top to bottom:

```text
students
   ↓
filter students
   ↓
keep matching students
   ↓
map their names
   ↓
qualifiedNames
```

This is a common pattern in JavaScript because it allows different operations to be connected together.

---

## 14. `filter()` Followed by Object Transformation

`filter()` can also be followed by `map()` when the selected objects need to be transformed into a different structure.

For example:

```javascript
const studentResults = students
    .filter((student) => student.cgpa >= 3.75)
    .map((student) => {
        return {
            name: student.name,
            cgpa: student.cgpa,
            status: "Qualified"
        };
    });
```

The first step selects qualified students.

The second step creates new result objects from those students.

This demonstrates how array methods can work together to create useful application data.

---

# Practical Experience

The Student Information project was used throughout Day 51 to practice filtering real data.

I first practiced filtering simple numerical arrays to understand how the callback returns `true` or `false`. I then applied the same concept to student objects by filtering students based on CGPA and department.

I practiced using comparison operators, `&&`, `||`, and `!==` to create different filtering rules. I also learned how parentheses can be used to group complex conditions and how the index can be accessed inside the callback when the position of an item is relevant.

After understanding filtering independently, I combined `filter()` with `map()`. This allowed me to first select the students I needed and then transform those selected students into names or new student result objects.

This practical experience made the difference between selection and transformation much clearer. `filter()` determines which data remains, while `map()` determines what the selected data becomes.

---

# Testing

## Test 1 - Number Filtering

A numerical array was filtered using a comparison condition.

The test confirmed that only numbers satisfying the condition were included in the resulting array.

## Test 2 - Student CGPA Filtering

Students were filtered based on a minimum CGPA requirement.

The test confirmed that only students meeting the CGPA condition were included.

## Test 3 - Student Department Filtering

Students were filtered using their department property.

This confirmed that `filter()` can work with string comparisons and object properties.

## Test 4 - Multiple Conditions

Multiple conditions were tested using `&&`.

The test confirmed that all required conditions needed to be true for the student to remain in the result.

## Test 5 - Alternative Conditions

The `||` operator was used to allow students to qualify through different conditions.

This confirmed that at least one condition must be true for the item to remain.

## Test 6 - Exclusion Condition

The `!==` operator was used to exclude students from a particular department.

This confirmed that `filter()` can also be used to remove unwanted categories.

## Test 7 - Index Filtering

The callback index was used as part of a filtering condition.

This confirmed that `filter()` provides access to both the current item and its index.

## Test 8 - Filter and Map Chaining

`filter()` was combined with `map()` to first select students and then transform their data.

The test confirmed that the result of `filter()` can be passed directly into `map()` through method chaining.

## Test 9 - Filtered Student Objects

Filtered students were transformed into new result objects.

This confirmed that filtering and transformation can be combined to create useful derived application data.

---

# Previous Concepts Used

Day 51 built upon concepts learned during previous JavaScript lessons:

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
- `map()`
- `if`
- `else if`
- `else`
- Comparison operators
- `>=`
- `!==`
- `&&`
- `||`
- Parentheses
- Arithmetic operators
- `console.log()`

---

# What I Learned

Day 51 taught me how to use the JavaScript `filter()` method to select specific items from an array.

I learned that `filter()` executes a callback function for every item and uses the result of the condition to decide whether the item should remain in the new array. A `true` result keeps the item, while a `false` result removes it from the result.

The most important lesson was understanding the difference between `filter()` and `map()`. `filter()` is used for selection, while `map()` is used for transformation. `filter()` answers the question of which items should remain, while `map()` answers the question of what each item should become.

I learned how to filter arrays containing objects by checking their properties. This included filtering students based on CGPA, department, and combinations of different requirements.

I also learned how logical operators can make filtering more powerful. `&&` allows multiple requirements to be combined, while `||` allows an item to qualify through alternative conditions. The `!==` operator can be used when items matching a particular value should be excluded.

Another important lesson was that `filter()` returns a new array containing the original matching items. It does not transform those objects. If the selected objects need to be transformed, `map()` can be used after `filter()`.

I also learned about method chaining. By chaining `filter()` and `map()`, I can first select the required data and then transform it. This pattern will become increasingly useful when working with real application data, API responses, databases, and collections of objects.

Day 51 therefore connected several previous concepts together, including callback functions, arrow functions, `return`, objects, comparison operators, logical operators, and `map()`.

---

# Project Structure

```text
Day-51-JavaScript-filter/

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

The next lesson will move to the JavaScript `find()` array method.

`find()` is related to `filter()` because both methods search through an array using a condition. The major difference is that `filter()` returns an array containing all matching items, while `find()` returns the first matching item.

The next lesson will focus on understanding this difference, finding individual student objects, working with conditions, handling cases where no item is found, and understanding why `find()` is useful when only one matching item is needed.

After `find()`, the journey will continue through other useful JavaScript array methods and gradually combine these methods into practical data-processing patterns.