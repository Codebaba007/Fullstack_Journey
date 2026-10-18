# Day 65 — JavaScript `async` / `await`

## Overview

Day 65 introduces `async` and `await`, two JavaScript features used to work with asynchronous operations in a cleaner and easier-to-read way.

The focus of this day is not advanced asynchronous programming. The goal is to understand the basic relationship between:

- Promises
- `async`
- `await`
- Error handling with `try...catch`

The main idea is:

> A Promise represents a result that will be available later, while `await` allows an asynchronous function to wait for that result before continuing.

---

## Learning Objectives

By the end of Day 65, the following concepts should be understood:

- What an `async` function is
- The fact that an `async` function always returns a Promise
- What `await` does
- How `await` works with a Promise
- The difference between receiving a Promise and receiving its fulfilled value
- How `async` and `await` work together
- How `try...catch` can handle errors from asynchronous operations
- The basic relationship between Promise syntax and `async` / `await`

---

## 1. `async` Functions

The `async` keyword is placed before a function declaration:

```javascript
async function getStudent() {

}
```

An `async` function is designed to work with asynchronous operations.

One important rule is:

> An `async` function always returns a Promise.

For example:

```javascript
async function hello() {

    return "Hello";

}
```

Even though the function appears to return `"Hello"`, the function actually returns a Promise that will fulfill with `"Hello"`.

Conceptually:

```text
async function
      ↓
    Promise
      ↓
   "Hello"
```

The result can therefore be handled with `.then()`:

```javascript
hello().then((message) => {

    console.log(message);

});
```

Output:

```text
Hello
```

---

## 2. What `await` Does

The `await` keyword is used with a Promise inside an `async` function.

Example:

```javascript
async function getStudent() {

    const student = await getStudentFromServer();

    console.log(student);

}
```

The important idea is:

```text
getStudentFromServer()
        ↓
     Promise
        ↓
      await
        ↓
   actual result
        ↓
student
```

Without `await`:

```javascript
const student = getStudentFromServer();
```

`student` represents the Promise.

With `await`:

```javascript
const student = await getStudentFromServer();
```

`student` receives the fulfilled value produced by the Promise.

---

## 3. Simple Analogy

A Promise can be thought of as ordering food at a restaurant.

You order a burger.

The waiter says:

> "Your burger is being prepared."

The burger is not available yet.

That is similar to a Promise:

```text
Promise
=
"The result will come later."
```

When the burger arrives, you can use it.

That is similar to:

```javascript
const burger = await orderBurger();
```

The basic idea is:

```text
Order burger
     ↓
Burger is being prepared
     ↓
await
     ↓
Burger arrives
     ↓
Use burger
```

The key mental model is:

```text
Promise = "The result will come later."

await = "Give me the result when it arrives."

async = "This function works with await."
```

---

## 4. `await` Works With Promises

Consider:

```javascript
const promise = Promise.resolve("Student found");
```

The Promise is already fulfilled with:

```text
Student found
```

Inside an async function, `await` can retrieve that value:

```javascript
async function checkStudent() {

    const result = await promise;

    console.log(result);

}
```

Output:

```text
Student found
```

The Promise contains the future result, while `await` allows the function to work with the fulfilled value.

---

## 5. Delayed Promise Example

A Promise can represent an operation that takes some time:

```javascript
function getStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Rahim Ahmed");

        }, 2000);

    });

}
```

The operation takes approximately two seconds before producing its result.

We can use `await`:

```javascript
async function showStudent() {

    const student = await getStudent();

    console.log(student);

}

showStudent();
```

The basic flow is:

```text
showStudent()
     ↓
getStudent()
     ↓
Promise
     ↓
waiting for result
     ↓
"Rahim Ahmed"
     ↓
student
     ↓
console.log()
```

---

## 6. `async` and `await` Work Together

A common pattern is:

```javascript
async function functionName() {

    const result = await somePromise();

}
```

The `async` keyword allows the function to use `await`.

The `await` keyword waits for the Promise's result inside that asynchronous function.

Example:

```javascript
async function getStudentInformation() {

    const student = await getStudent();

    console.log(student);

}
```

The relationship can be understood as:

```text
async
 ↓
allows await

await
 ↓
waits for Promise result
```

---

## 7. Promise Syntax vs `async` / `await`

The same asynchronous operation can be written using Promise methods.

Promise style:

```javascript
getStudent().then((student) => {

    console.log(student);

});
```

With `async` / `await`:

```javascript
async function showStudent() {

    const student = await getStudent();

    console.log(student);

}

showStudent();
```

The underlying asynchronous operation is still based on a Promise.

`async` / `await` provides syntax that often makes asynchronous code easier to read.

It is not a replacement for the Promise system.

Instead:

```text
Promises
   ↓
async / await
   ↓
Cleaner way to work with Promises
```

---

## 8. Handling Errors With `try...catch`

A Promise can fail.

When an asynchronous operation fails, the Promise can be rejected.

With `async` / `await`, errors can be handled using normal `try...catch` syntax.

Example:

```javascript
async function getStudentInformation() {

    try {

        const student = await getStudent();

        console.log(student);

    } catch (error) {

        console.log("Something went wrong");

    }

}
```

The basic structure is:

```text
try
 ↓
attempt asynchronous operation
 ↓
success → continue

failure
 ↓
catch
 ↓
handle error
```

---

## 9. Student Example

Consider a function that checks whether a student is eligible:

```javascript
function checkEligibility() {

    return new Promise((resolve, reject) => {

        const cgpa = 3.75;

        if (cgpa >= 3.5) {

            resolve("Student is eligible");

        } else {

            reject("Student is not eligible");

        }

    });

}
```

We can use it with `async` / `await`:

```javascript
async function showEligibility() {

    try {

        const result = await checkEligibility();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

showEligibility();
```

The flow is:

```text
showEligibility()
       ↓
checkEligibility()
       ↓
    Promise
       ↓
     await
       ↓
 ┌─────┴─────┐
 ↓           ↓
success     failure
 ↓           ↓
try         catch
```

---

## 10. Important Rules

### Rule 1 — `async` functions return Promises

```javascript
async function test() {

    return "Hello";

}
```

The function returns a Promise that fulfills with `"Hello"`.

### Rule 2 — `await` works with asynchronous results

```javascript
const result = await somePromise();
```

It allows the function to receive the fulfilled value of the Promise.

### Rule 3 — `await` is normally used inside an `async` function

```javascript
async function test() {

    const result = await somePromise();

}
```

### Rule 4 — Rejected Promises can be handled with `try...catch`

```javascript
async function test() {

    try {

        const result = await somePromise();

    } catch (error) {

        console.log(error);

    }

}
```

---

## 11. Complete Mental Model

Keep this model for now:

```text
Asynchronous operation
        ↓
     Promise
        ↓
   result later
        ↓
      await
        ↓
 fulfilled value
        ↓
    use result
```

If something fails:

```text
Promise
   ↓
rejected
   ↓
catch
   ↓
handle error
```

And:

```text
async
 ↓
allows the function to use await
```

---

## 12. What Does NOT Need to Be Mastered Yet

Day 65 does not require deep knowledge of:

- `Promise.all()`
- `Promise.race()`
- `Promise.any()`
- `Promise.allSettled()`
- advanced concurrency
- advanced Event Loop internals
- complex Promise chains

These concepts can be introduced later when they become useful.

The objective here is to understand the basic async/await mental model rather than memorizing every asynchronous JavaScript API.

---

## 13. Practice Tasks

### Task 1 — Basic `async`

Create an async function:

```javascript
async function sayHello() {

}
```

Make it return:

```text
Hello JavaScript
```

Then use `.then()` to print the result.

### Task 2 — `await`

Create a Promise:

```javascript
const promise = Promise.resolve("Student found");
```

Create an async function and use `await` to retrieve the result.

Print the result.

### Task 3 — Delayed Student

Create a function that returns a Promise.

After two seconds, resolve it with:

```text
Rahim Ahmed
```

Use `async` / `await` to print the student's name.

### Task 4 — Error Handling

Create a Promise that rejects with:

```text
Student not found
```

Use:

```javascript
try {

} catch (error) {

}
```

to handle the error.

### Task 5 — Final Challenge

Create an asynchronous function that checks a student's CGPA.

Rules:

```text
CGPA >= 3.50
    ↓
Student is eligible

CGPA < 3.50
    ↓
Student is not eligible
```

Use:

- Promise
- `async`
- `await`
- `try...catch`

---

## Day 65 Summary

The main concepts learned today:

```text
Promise
→ represents a result that will be available later

async
→ marks a function as asynchronous
→ async functions return Promises

await
→ waits for a Promise's result inside an async function
→ gives access to the fulfilled value

try...catch
→ handles errors from asynchronous operations
```

The most important mental model:

```text
Promise
"The result will come later."

await
"Give me the result when it arrives."

async
"This function works with await."
```

Day 65 focuses on understanding the basic mental model rather than memorizing advanced asynchronous APIs.

---

## Day 65 Status

**JavaScript `async` / `await` — Completed**