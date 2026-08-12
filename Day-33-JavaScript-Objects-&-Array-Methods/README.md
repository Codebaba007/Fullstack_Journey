# Day 33 - JavaScript Objects, Array Methods & DOM

## Overview

This project focuses on connecting JavaScript arrays, objects, array methods, functions, and the browser DOM.

Building on the previous lessons covering arrays, objects, loops, `forEach()`, `map()`, `filter()`, `find()`, and `reduce()`, this lesson introduces DOM manipulation and demonstrates how JavaScript can use data from an array of objects to update an actual HTML webpage.

The Student Eligibility Dashboard is used as the practical project throughout the lesson. Student records are searched using `find()`, their information is accessed through object properties, and the results are displayed dynamically on the webpage.

## Topics Covered

* JavaScript Objects
* Arrays of Objects
* `find()`
* Reusable Functions
* Function Parameters
* Returning Objects from Functions
* DOM
* `document.getElementById()`
* `textContent`
* Event Listeners
* `addEventListener()`
* Connecting JavaScript with HTML
* Updating Webpage Content
* Browser JavaScript vs Node.js

## Exercises Completed

### 1. Finding a Student by ID

Used `find()` to search the student array and return a student object based on their student ID.

```javascript
const student = students.find(function(student) {
    return student.studentId === 2026002;
});
```

The returned value is the complete student object rather than only the matching student ID.

### 2. Creating a Reusable Search Function

Created a reusable function to search for students by their ID.

```javascript
function findStudentById(studentId) {
    return students.find(function(student) {
        return student.studentId === studentId;
    });
}
```

The function can then be reused with different student IDs.

```javascript
const student = findStudentById(2026002);

console.log(student);
```

### 3. Handling Students That Are Not Found

Practiced handling the situation where `find()` returns `undefined`.

```javascript
const student = findStudentById(9999999);

if (student) {
    console.log(student.name);
} else {
    console.log("Student not found");
}
```

This prevents the program from attempting to access properties from an undefined value.

### 4. Selecting HTML Elements with the DOM

Used `document.getElementById()` to select an HTML element from JavaScript.

```javascript
const resultText = document.getElementById("resultText");
```

The selected element can then be controlled using JavaScript.

### 5. Changing HTML Content

Used `textContent` to dynamically change the content displayed on the webpage.

```javascript
resultText.textContent = student.name;
```

This allowed information retrieved from the JavaScript student array to appear directly in the HTML page.

### 6. Connecting Buttons with JavaScript

Selected the existing Scholarship button from the HTML.

```javascript
const scholarshipBtn = document.getElementById("scholarshipBtn");
```

Then used an event listener to execute JavaScript when the button is clicked.

```javascript
scholarshipBtn.addEventListener("click", function() {
    console.log("Scholarship button clicked");
});
```

### 7. Connecting Student Data to the DOM

Combined the concepts learned throughout the project to search for a student and display their information on the webpage.

```javascript
const student = findStudentById(2026002);

if (student) {
    resultText.textContent =
        student.name + " | CGPA: " + student.cgpa;
} else {
    resultText.textContent = "Student not found";
}
```

This connects the student array, `find()`, object properties, DOM manipulation, and webpage output.

## Data Flow

The main process practiced in this project was:

```text
Student Array
      ↓
findStudentById()
      ↓
find()
      ↓
Student Object
      ↓
Object Property
      ↓
DOM Element
      ↓
textContent
      ↓
Updated Webpage
```

## Browser vs Node.js

This project also introduced an important difference between JavaScript running through Node.js and JavaScript running inside a browser.

Node.js can execute JavaScript such as:

```javascript
console.log(student);
```

and array operations such as:

```javascript
students.find(...)
students.map(...)
students.filter(...)
students.reduce(...)
```

However, browser-specific DOM objects such as `document` are not available in Node.js.

For example:

```javascript
document.getElementById("resultText");
```

must run inside the browser.

The project was therefore tested using Live Server rather than directly executing the DOM-related JavaScript with:

```bash
node script.js
```

## Key Concepts

### `find()`

Used to return the first object that satisfies a condition.

```javascript
const student = students.find(function(student) {
    return student.studentId === 2026002;
});
```

### DOM Selection

Used to select an HTML element from JavaScript.

```javascript
const resultText = document.getElementById("resultText");
```

### `textContent`

Used to change the text displayed inside an HTML element.

```javascript
resultText.textContent = student.name;
```

### Event Listener

Used to execute JavaScript in response to a user action.

```javascript
scholarshipBtn.addEventListener("click", function() {
    // action
});
```

## Learning Outcome

Through this project, I learned how to connect JavaScript logic with an actual webpage.

I practiced searching arrays of objects using `find()`, creating reusable functions, accessing object properties, selecting HTML elements with the DOM, modifying webpage content with `textContent`, and responding to user actions using event listeners.

The main goal of this lesson was to move beyond running JavaScript only in the console and begin using JavaScript to control and update a real HTML interface.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Live Server

## Project Structure

```text
Day-33-JavaScript-Objects-&-Array-Methods/
│
├── assets/
│   └── me.jpeg
├── index.html
├── style.css
├── script.js
└── README.md
```

## Previous Concepts

The project builds upon:

* Arrays
* Objects
* Loops
* `forEach()`
* `map()`
* `filter()`
* `find()`
* `reduce()`
* Functions
* Function Parameters
* Return Values

## Next Steps

Future lessons will continue building on DOM manipulation and JavaScript logic by working with:

* More DOM elements
* User input
* Form handling
* Dynamic content
* More event handling
* Interactive web applications
* Asynchronous JavaScript
* Fetch API
