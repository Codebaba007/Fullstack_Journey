# Day 62 — JavaScript Asynchronous Programming & Event Loop

## Overview

Day 62 marked the beginning of asynchronous JavaScript.

The focus was understanding why JavaScript does not always execute every operation in a simple top-to-bottom sequence. We introduced asynchronous behavior using `setTimeout()` and then explored the basic browser execution model that allows JavaScript to continue working while an asynchronous operation is waiting.

The day covered the relationship between:

- Synchronous JavaScript
- Asynchronous JavaScript
- Callbacks
- The Call Stack
- Browser Web APIs
- The Task/Callback Queue
- The Event Loop

The central idea was understanding how an asynchronous callback eventually gets back into JavaScript and executes.

---

## Objective

The objectives for Day 62 were to:

- Understand synchronous execution.
- Understand asynchronous execution.
- Learn what `setTimeout()` does.
- Understand callbacks in asynchronous JavaScript.
- Understand the Call Stack.
- Understand the role of browser Web APIs.
- Understand the Task/Callback Queue.
- Understand the Event Loop.
- Understand why `setTimeout(..., 0)` does not execute immediately.
- Develop a mental model for how JavaScript handles asynchronous operations.

---

## Technologies Used

- JavaScript
- Browser JavaScript Runtime
- `console.log()`
- `setTimeout()`

---

# 1. Synchronous JavaScript

Synchronous JavaScript executes work sequentially.

For example:

```javascript
console.log("A");

console.log("B");

console.log("C");
```

The output is:

```text
A
B
C
```

Each operation completes before the next operation begins.

The basic model is:

```text
Task A
  ↓
Task B
  ↓
Task C
```

This is synchronous execution.

---

# 2. Asynchronous JavaScript

Asynchronous programming allows JavaScript to start an operation that takes time without simply stopping all other JavaScript execution while waiting.

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

The output is:

```text
A
C
B
```

The timer is scheduled, but JavaScript continues executing the next synchronous statement.

After the timer has elapsed, the callback becomes eligible to be processed.

---

# 3. `setTimeout()`

`setTimeout()` schedules a function to execute after a specified delay.

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

The second argument represents milliseconds.

```text
2000 milliseconds ≈ 2 seconds
```

An important distinction is that the delay is not a command telling JavaScript to freeze for that amount of time.

Instead, the callback is scheduled to run after the delay has elapsed and when the JavaScript runtime is able to process it.

---

# 4. Callbacks

A callback is a function passed to another function so that it can be called later.

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

The arrow function:

```javascript
() => {
    console.log("Hello");
}
```

is the callback.

Callbacks were already encountered earlier with array methods such as:

```javascript
students.forEach((student) => {
    console.log(student.name);
});
```

The same general idea appears in asynchronous programming.

---

# 5. The Call Stack

The Call Stack is where JavaScript keeps track of functions that are currently executing.

A simple example:

```javascript
function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
```

When `one()` executes, it enters the Call Stack.

When `one()` calls `two()`, `two()` is placed above it.

Conceptually:

```text
Call Stack

┌─────────┐
│  two()  │
├─────────┤
│  one()  │
└─────────┘
```

When the top function finishes, it is removed from the stack.

The stack eventually becomes empty.

---

# 6. Browser Web APIs

JavaScript running inside a browser does not operate completely by itself.

The browser environment provides capabilities that JavaScript can interact with.

Examples include:

- Timers
- DOM events
- Network operations
- Other browser-provided functionality

For a timer:

```javascript
setTimeout(() => {
    console.log("B");
}, 2000);
```

the timer can be handled by the browser environment while JavaScript continues executing other synchronous code.

A simplified model is:

```text
JavaScript
    ↓
Browser Web API
    ↓
Timer
```

---

# 7. Task / Callback Queue

Once an asynchronous operation has completed, its callback does not simply interrupt whatever JavaScript is currently executing.

The callback becomes ready to be processed through a queue.

Conceptually:

```text
Browser Timer
      ↓
Callback becomes ready
      ↓
Task / Callback Queue
```

The callback waits until it can be processed by JavaScript.

---

# 8. The Event Loop

The Event Loop connects the queued asynchronous work with the Call Stack.

A simplified model is:

```text
             ┌──────────────┐
             │  Call Stack  │
             └──────┬───────┘
                    ↑
                    │
               Event Loop
                    │
                    ↓
             ┌──────────────┐
             │  Task Queue  │
             └──────────────┘
```

The Event Loop continuously checks whether JavaScript is able to process queued work.

If the Call Stack is empty and a task is ready, the callback can be moved into the Call Stack and executed.

---

# 9. Complete Asynchronous Flow

The simplified execution model learned today is:

```text
JavaScript Code
      ↓
Call Stack
      ↓
Start asynchronous operation
      ↓
Browser Web API
      ↓
Operation completes
      ↓
Callback / Task Queue
      ↓
Event Loop
      ↓
Call Stack becomes available
      ↓
Callback enters Call Stack
      ↓
Callback executes
```

This is the fundamental mental model for asynchronous JavaScript.

---

# 10. Why `setTimeout(..., 0)` Does Not Execute Immediately

Consider:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

The output is:

```text
A
C
B
```

The `0` does not mean:

```text
Execute B immediately.
```

Instead, the callback is still scheduled asynchronously.

JavaScript first completes the currently executing synchronous work:

```text
A
C
```

Then the callback can be processed.

Therefore:

```text
A → C → B
```

---

# 11. Multiple Timers

Consider:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

setTimeout(() => {
    console.log("C");
}, 1000);

console.log("D");
```

The output is:

```text
A
D
C
B
```

The synchronous operations execute first:

```text
A
D
```

The timer callbacks become ready according to their delays:

```text
C → approximately 1 second
B → approximately 2 seconds
```

Therefore:

```text
A → D → C → B
```

---

# 12. Asynchronous Work Does Not Automatically Interrupt Synchronous Work

An important behavior demonstrated today was that queued callbacks do not simply interrupt currently running JavaScript.

For example:

```javascript
setTimeout(() => {
    console.log("Timer");
}, 0);

for (let i = 0; i < 1000000000; i++) {
    // expensive synchronous work
}
```

The timer callback must wait for the current synchronous JavaScript work to finish before it can be processed.

This is why long-running synchronous JavaScript can make a web page feel unresponsive.

---

# 13. Connection to DOM Events

The same general asynchronous model is relevant to DOM events.

For example:

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

The function provided to `addEventListener()` is a callback.

The browser detects the event and the callback is eventually processed by JavaScript.

This connects the event-handling concepts learned earlier with the asynchronous JavaScript model introduced today.

---

# Mental Model

The most important mental model from Day 62 is:

```text
                 JavaScript
                     │
                     ↓
                Call Stack
                     │
          ┌──────────┴──────────┐
          │                     │
          ↓                     ↓
    Synchronous code       Browser APIs
                                │
                                ↓
                         Async operation
                                │
                                ↓
                           Task Queue
                                │
                                ↓
                           Event Loop
                                │
                                ↓
                           Call Stack
                                │
                                ↓
                         Callback executes
```

The main idea is:

> JavaScript can start work that takes time, continue executing available synchronous work, and later process the callback when the asynchronous operation is ready and the Call Stack is available.

---

# Practical Exercises

The following experiments were used to understand asynchronous execution.

### Experiment 1 — Synchronous execution

```javascript
console.log("A");

console.log("B");

console.log("C");
```

Expected:

```text
A
B
C
```

### Experiment 2 — Basic asynchronous behavior

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

Expected:

```text
A
C
B
```

### Experiment 3 — Different delays

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 3000);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 1000);

console.log("E");
```

Expected:

```text
A
C
E
D
B
```

### Experiment 4 — Zero-delay callback

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Expected:

```text
A
C
B
```

---

# What I Learned

Today I learned that JavaScript execution is not simply about reading every line and immediately executing it in visual order.

I learned:

- What synchronous execution means.
- What asynchronous execution means.
- How `setTimeout()` schedules a callback.
- What a callback is.
- What the Call Stack does.
- That the browser provides additional APIs around the JavaScript engine.
- That asynchronous callbacks wait in a queue before being processed.
- What the Event Loop does.
- Why `setTimeout(..., 0)` still executes after synchronous code.
- Why long-running synchronous JavaScript can delay asynchronous callbacks.

The most important concept is the relationship between:

```text
Call Stack
     ↓
Browser APIs
     ↓
Task Queue
     ↓
Event Loop
     ↓
Call Stack
```

---

# Day Status

**Day 62 — Completed**

Day 62 established the foundation for understanding asynchronous JavaScript and the Event Loop.

The next section will build on this foundation by introducing **Promises** and explaining why Promises are useful for managing asynchronous operations.

> Consistency is the foundation of progress.