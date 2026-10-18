# Day 60 — JavaScript DOM: Events and Event Handling

## Overview

Day 60 introduced DOM events and event handling.

The lesson focused on making webpages respond to user interaction rather than only executing JavaScript when the page loads.

The main concept was the `click` event and the `addEventListener()` method.

The lesson also connected event callbacks with the callback functions already learned through array methods such as `forEach()`.

The central pattern was:

```text
User Action
    ↓
Event
    ↓
Event Listener
    ↓
Callback Function
    ↓
JavaScript Executes
    ↓
DOM Changes
```

---

## Objective

By the end of this lesson, I should be able to:

- Understand what a DOM event is.
- Understand what event handling means.
- Use `addEventListener()`.
- Listen for a `click` event.
- Provide a callback function to an event listener.
- Respond to a user's click.
- Modify DOM elements after an event occurs.
- Connect event callbacks with previously learned callback concepts.

---

## Technologies

- JavaScript
- HTML
- CSS
- DOM

---

## Concepts Learned

### 1. DOM Events

An event represents something that happens in the webpage.

Examples include:

```text
click
typing
form submission
mouse movement
keyboard input
page loading
```

Day 60 focused specifically on:

```text
click
```

When a user clicks a button, the browser generates a click event that JavaScript can respond to.

---

## 2. Event Listener

An event listener allows JavaScript to wait for a specific event and execute code when that event occurs.

The main method introduced was:

```javascript
addEventListener()
```

Example:

```javascript
changeButton.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

The browser waits after registering the listener.

When the user clicks the button, the callback function executes.

`addEventListener()` registers a function to be called when the specified event is delivered to the target. :contentReference[oaicite:1]{index=1}

---

## 3. Basic `addEventListener()` Structure

The basic structure is:

```javascript
element.addEventListener("event", callback);
```

For example:

```javascript
changeButton.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

The parts are:

```text
changeButton
     ↓
element being watched

"click"
     ↓
event type

() => { ... }
     ↓
callback function
```

---

## 4. Selecting the Element

Before attaching an event listener, JavaScript needs a reference to the element.

Example HTML:

```html
<button id="changeButton">Change Title</button>
```

JavaScript:

```javascript
const changeButton = document.getElementById("changeButton");
```

Now the variable `changeButton` refers to the button in the DOM.

---

## 5. Listening for a Click

After selecting the button:

```javascript
changeButton.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

The sequence is:

```text
Page loads
    ↓
JavaScript selects button
    ↓
addEventListener() registers callback
    ↓
JavaScript waits
    ↓
User clicks button
    ↓
Callback executes
```

The callback does not execute immediately when the listener is registered.

It executes when the specified event occurs.

---

## 6. Changing the DOM After a Click

HTML:

```html
<h1 id="title">Student Dashboard</h1>

<button id="changeButton">
    Change Title
</button>
```

JavaScript:

```javascript
const title = document.getElementById("title");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
    title.textContent = "Student Management System";
});
```

Before clicking:

```text
Student Dashboard
```

After clicking:

```text
Student Management System
```

The event therefore connects user interaction to DOM manipulation.

---

## 7. Event Callbacks

The callback function is the code that should run when the event happens.

Example:

```javascript
changeButton.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

The arrow function:

```javascript
() => {
    console.log("Button clicked!");
}
```

is the callback.

This connects directly to previous callback concepts.

---

## 8. Callback Comparison

Previously:

```javascript
students.forEach((student) => {
    console.log(student.name);
});
```

`forEach()` receives a callback.

The callback executes based on array iteration.

With an event:

```javascript
changeButton.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

`addEventListener()` receives a callback.

The callback executes based on a user event.

The difference can be visualized as:

```text
forEach()
    ↓
process array
    ↓
callback runs for each item
```

versus:

```text
addEventListener()
    ↓
wait for event
    ↓
user performs event
    ↓
callback runs
```

---

## 9. Multiple DOM Changes From One Event

A single event callback can perform multiple operations.

Example:

```javascript
const title = document.getElementById("title");
const message = document.getElementById("message");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
    title.textContent = "Student Management System";
    message.textContent = "Dashboard updated successfully.";
});
```

One click can therefore update multiple parts of the interface.

---

## 10. Do Not Immediately Call the Callback

A common mistake is:

```javascript
changeButton.addEventListener("click", changeTitle());
```

The parentheses:

```javascript
changeTitle()
```

call the function immediately.

For an event listener, the function should be provided so it can execute later when the event occurs.

Correct:

```javascript
changeButton.addEventListener("click", changeTitle);
```

Or:

```javascript
changeButton.addEventListener("click", () => {
    changeTitle();
});
```

The important distinction is:

```text
changeTitle
    ↓
reference to the function
```

versus:

```text
changeTitle()
    ↓
execute the function now
```

---

## Practical Exercise

### Task 1 — Create the Dashboard

Create a webpage containing:

```text
Student Dashboard

Name: Rahim Ahmed
CGPA: 3.75

[Update Student]
```

Give the important elements IDs so JavaScript can select them.

---

### Task 2 — Select the Button

Use:

```javascript
document.getElementById()
```

to select the update button.

---

### Task 3 — Add a Click Event

Attach:

```javascript
addEventListener("click", ...)
```

to the button.

---

### Task 4 — Update the Name

When the button is clicked, change:

```text
Rahim Ahmed
```

to:

```text
Nusrat Jahan
```

---

### Task 5 — Update the CGPA

Change:

```text
CGPA: 3.75
```

to:

```text
CGPA: 3.88
```

---

### Task 6 — Update the Heading

Change:

```text
Student Dashboard
```

to:

```text
Student Profile Updated
```

All three changes should happen from the same click event.

---

## Expected Flow

Before clicking:

```text
Student Dashboard

Name: Rahim Ahmed
CGPA: 3.75

[Update Student]
```

After clicking:

```text
Student Profile Updated

Name: Nusrat Jahan
CGPA: 3.88

[Update Student]
```

---

## Mental Model

The main mental model for Day 60 is:

```text
HTML Element
      ↓
Select Element
      ↓
addEventListener()
      ↓
Specify Event
      ↓
Provide Callback
      ↓
Wait
      ↓
User Performs Event
      ↓
Callback Executes
      ↓
DOM Changes
```

---

## Previous Concepts Used

Day 60 builds on:

- Variables
- `const`
- Functions
- Arrow functions
- Callback functions
- DOM
- `getElementById()`
- `textContent`
- DOM manipulation
- `forEach()`
- Objects
- Arrays

---

## What I Learned

Day 60 introduced event-driven JavaScript.

I learned that JavaScript can wait for actions performed by the user and execute a callback when a particular event occurs.

The main method learned was:

```javascript
addEventListener()
```

I learned how to listen for a `click` event and use the callback to modify DOM elements.

I also connected event callbacks with the callback functions previously learned through `forEach()`.

The main pattern is:

```text
User Interaction
      ↓
Event
      ↓
Event Listener
      ↓
Callback
      ↓
DOM Manipulation
      ↓
Updated Interface
```

This is the foundation for making webpages interactive.

---

## Day Status

**Completed**

---

## Next

Continue with DOM events and connect user interaction with the dynamically generated student cards.

---

> Consistency is the foundation of progress.