# Day 61 — JavaScript DOM: Making Dynamic Cards Interactive

## Overview

Day 61 focused on making dynamically generated DOM elements interactive.

Instead of creating student cards manually in HTML, the student data was stored in a JavaScript array. The program used `forEach()` to process each student, `createElement()` to build the card, and `addEventListener()` to give each generated card its own click behavior.

The main idea was to connect the concepts learned in previous days:

**Student Data → `forEach()` → `createElement()` → Build Card → `addEventListener()` → User Click → Update Card**

This was an important step toward building real interactive interfaces where JavaScript generates elements and controls what happens when users interact with them.

---

## Objective

The goals for Day 61 were to:

- Add event listeners to dynamically created elements.
- Understand that elements created with `createElement()` can have events.
- Use the current `student` object inside an event callback.
- Change a card when the user clicks it.
- Connect `forEach()`, `createElement()`, `appendChild()`, and `addEventListener()`.
- Understand how each dynamically generated card can have its own behavior.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM API

---

## Concepts Learned

### 1. Creating Elements Dynamically

JavaScript can create HTML elements without writing them directly in the HTML file.

```javascript
const studentCard = document.createElement("div");
```

This creates a new `<div>` element in memory.

It does not appear on the page until it is added to an existing DOM element.

---

### 2. Building a Card with Multiple Elements

A student card can be constructed using multiple dynamically created elements.

```javascript
const studentCard = document.createElement("div");

const studentName = document.createElement("h2");
const studentCgpa = document.createElement("p");
const studentDepartment = document.createElement("p");
```

The elements can then be connected using `appendChild()`.

```javascript
studentCard.appendChild(studentName);
studentCard.appendChild(studentCgpa);
studentCard.appendChild(studentDepartment);
```

This creates a structure similar to:

```text
studentCard
│
├── h2
│   └── Student Name
│
├── p
│   └── CGPA
│
└── p
    └── Department
```

---

### 3. Using `forEach()` to Generate Multiple Cards

The student array contains multiple objects.

```javascript
students.forEach((student) => {
    // Create and configure a card
});
```

The `forEach()` callback runs once for every student.

For example:

```text
First iteration
student → Rahim Ahmed

Second iteration
student → Nusrat Jahan

Third iteration
student → Tanvir Hasan
```

Therefore, one block of JavaScript can generate all three cards.

---

### 4. Adding an Event Listener to a Dynamic Element

An element created with JavaScript can receive an event listener just like an element already present in the HTML.

```javascript
studentCard.addEventListener("click", () => {
    console.log("Student card clicked");
});
```

When the user clicks the card, the callback function runs.

---

### 5. Using the Current Student Inside the Event Callback

One of the most important concepts of the day was using the current `student` object inside the click event.

```javascript
students.forEach((student) => {

    studentCard.addEventListener("click", () => {
        console.log(student.name);
    });

});
```

The `student` variable belongs to the current `forEach()` iteration.

Therefore, each card is associated with its corresponding student.

For example:

```text
Rahim's card
    ↓
student → Rahim Ahmed
    ↓
click
    ↓
Rahim Ahmed
```

And:

```text
Nusrat's card
    ↓
student → Nusrat Jahan
    ↓
click
    ↓
Nusrat Jahan
```

This allows each card to respond according to the data used to create it.

---

### 6. Changing the Card After a Click

The click event was used to change the appearance and content of the selected card.

```javascript
studentCard.classList.add("selected");
```

The `selected` class can then be styled with CSS.

```css
.selected {
    border: 3px solid black;
}
```

The heading was also changed:

```javascript
studentName.textContent = `Selected: ${student.name}`;
```

So clicking:

```text
Rahim Ahmed
```

changes the heading to:

```text
Selected: Rahim Ahmed
```

---

## Complete JavaScript Pattern

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

const studentContainer = document.querySelector("#studentContainer");

students.forEach((student) => {

    const studentCard = document.createElement("div");

    const studentName = document.createElement("h2");
    studentName.textContent = student.name;

    const studentCgpa = document.createElement("p");
    studentCgpa.textContent = `CGPA: ${student.cgpa}`;

    const studentDepartment = document.createElement("p");
    studentDepartment.textContent = `Department: ${student.department}`;

    studentCard.appendChild(studentName);
    studentCard.appendChild(studentCgpa);
    studentCard.appendChild(studentDepartment);

    studentCard.addEventListener("click", () => {

        console.log(student.name);

        studentCard.classList.add("selected");

        studentName.textContent = `Selected: ${student.name}`;
    });

    studentContainer.appendChild(studentCard);
});
```

---

## Mental Model

Think of `forEach()` as a factory.

The factory receives one student at a time:

```text
Student Object
      ↓
    forEach
      ↓
Build Card
      ↓
Add Information
      ↓
Add Click Event
      ↓
Put Card on Page
```

The important part is that the click event is created while JavaScript is working with that particular student.

Therefore:

```javascript
studentCard.addEventListener("click", () => {
    console.log(student.name);
});
```

knows which student's card was clicked.

---

## Previous Concepts Used

Day 61 combined several concepts learned earlier:

- Arrays
- Objects
- `forEach()`
- Template literals
- Functions
- Arrow functions
- DOM selection
- `querySelector()`
- `createElement()`
- `appendChild()`
- `textContent`
- `addEventListener()`
- `classList.add()`

This shows how individual JavaScript concepts begin working together to create interactive applications.

---

## Practical Exercise

The task for Day 61 was to:

1. Generate three student cards using `forEach()`.
2. Create the cards using `createElement()`.
3. Add the student name, CGPA, and department.
4. Add a click event to every card.
5. Log the clicked student's name.
6. Add the `selected` class to the clicked card.
7. Change the heading to `Selected: Student Name`.

### Expected Behavior

Initially:

```text
Rahim Ahmed
CGPA: 3.75
Department: Computer Science

Nusrat Jahan
CGPA: 3.88
Department: Software Engineering

Tanvir Hasan
CGPA: 3.62
Department: Computer Science
```

After clicking Rahim:

```text
Selected: Rahim Ahmed
CGPA: 3.75
Department: Computer Science
```

The clicked card also receives the `selected` class.

---

## What I Learned

Today I learned that dynamically created DOM elements are not limited to displaying information. They can also become interactive.

I learned how to:

- Generate elements from JavaScript data.
- Attach event listeners to elements created with `createElement()`.
- Use the current object from `forEach()` inside an event callback.
- Modify a dynamically created element after a user interaction.
- Add CSS classes dynamically with `classList.add()`.
- Update visible content with `textContent`.

The most important idea from today is:

> Dynamic elements can have their own behavior.

---

## Day Status

**Day 61 — Completed**

The main objective of making dynamically generated student cards interactive has been completed.

---

## Next

The next step is to continue working with dynamically generated DOM content and build more practical interactions around lists and cards.

> Consistency is the foundation of progress.