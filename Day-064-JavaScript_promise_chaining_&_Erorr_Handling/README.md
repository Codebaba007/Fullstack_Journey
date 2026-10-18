# Day 64 — JavaScript Promise Chaining & Error Handling

## Overview

Day 64 continued the asynchronous JavaScript section by going deeper into Promises.

Day 63 introduced the basic Promise model:

```text
Pending → Fulfilled
Pending → Rejected
```

Day 64 focused on what happens when multiple asynchronous operations need to be connected together.

The main focus was Promise chaining, where the result of one `.then()` becomes the input for the next `.then()`.

Error handling was also introduced so that failures inside a Promise chain can be handled using `.catch()`.

The main concepts covered were:

- Promise chaining
- Returning values from `.then()`
- Returning Promises from `.then()`
- Passing results between chained `.then()` callbacks
- Error propagation
- `throw`
- `Error`
- `.catch()`
- Success and failure paths in a Promise chain
- Callback chains vs Promise chains

---

## Objective

The objectives for Day 64 were to:

- Understand how Promise chaining works.
- Understand why `.then()` returns another Promise.
- Pass values from one `.then()` to another.
- Transform data through multiple Promise steps.
- Understand the difference between returning a normal value and returning a Promise.
- Understand how errors move through a Promise chain.
- Use `throw new Error()` to create an error.
- Use `.catch()` to handle errors.
- Understand how Promise chains can avoid deeply nested callbacks.

---

## Technologies Used

- JavaScript
- `Promise`
- `.then()`
- `.catch()`
- `resolve()`
- `reject()`
- `throw`
- `Error`

---

# 1. Returning a Value From `.then()`

A `.then()` callback can return a normal value.

```javascript
const myPromise = Promise.resolve(10);

myPromise
    .then((result) => {
        return result * 2;
    });
```

The first callback receives:

```text
10
```

and returns:

```text
20
```

The returned value can then be passed to the next `.then()`.

---

# 2. Promise Chaining

Multiple `.then()` methods can be connected together.

```javascript
const myPromise = Promise.resolve(10);

myPromise
    .then((result) => {
        return result * 2;
    })
    .then((result) => {
        return result + 5;
    })
    .then((result) => {
        console.log(result);
    });
```

The result is:

```text
25
```

The flow is:

```text
10
 ↓
× 2
 ↓
20
 ↓
+ 5
 ↓
25
 ↓
console.log()
```

Each `.then()` receives the value returned by the previous step.

---

# 3. `.then()` Returns a Promise

One of the most important concepts from Day 64 is that `.then()` returns another Promise.

Conceptually:

```text
Promise
   ↓
.then()
   ↓
New Promise
```

This is what allows chaining.

For example:

```javascript
const myPromise = Promise.resolve(10);

const nextPromise = myPromise.then((result) => {
    return result * 2;
});
```

`nextPromise` is another Promise representing the result of that `.then()` operation.

---

# 4. Passing Values Through a Chain

A Promise chain can transform data step by step.

Example:

```javascript
const studentPromise = Promise.resolve({
    name: "Rahim Ahmed",
    cgpa: 3.75
});

studentPromise
    .then((student) => {
        return student.cgpa;
    })
    .then((cgpa) => {
        return cgpa >= 3.00;
    })
    .then((eligible) => {
        console.log(eligible);
    });
```

The data travels through the chain:

```text
Student Object
      ↓
student.cgpa
      ↓
3.75
      ↓
3.75 >= 3.00
      ↓
true
```

The type and meaning of the value can change at every step.

---

# 5. Promise as a Data Pipeline

A Promise chain can be understood as a pipeline.

```text
Initial Data
     ↓
.then()
     ↓
Transformed Data
     ↓
.then()
     ↓
More Transformed Data
     ↓
.then()
     ↓
Final Result
```

Each stage receives the output of the previous stage.

This makes it possible to break a larger asynchronous process into smaller steps.

---

# 6. Returning Another Promise

A `.then()` callback can also return another Promise.

Example:

```javascript
const firstPromise = Promise.resolve("First");

firstPromise
    .then((result) => {

        console.log(result);

        return Promise.resolve("Second");

    })
    .then((result) => {

        console.log(result);

    });
```

Output:

```text
First
Second
```

The second `.then()` receives the eventual result of the Promise returned by the first `.then()`.

The conceptual flow is:

```text
First Promise
      ↓
.then()
      ↓
returns another Promise
      ↓
Promise settles
      ↓
next .then()
```

---

# 7. Normal Value vs Promise

A `.then()` callback can return different things.

### Returning a normal value

```javascript
.then((result) => {
    return result * 2;
})
```

The next `.then()` receives the returned value.

### Returning a Promise

```javascript
.then((result) => {
    return anotherPromise;
})
```

The next `.then()` waits for the returned Promise and receives its eventual result.

### Throwing an error

```javascript
.then((result) => {
    throw new Error("Something went wrong");
})
```

The chain moves into its error-handling path.

The mental model is:

```text
.then()
   │
   ├── return value
   │       ↓
   │   next .then()
   │
   ├── return Promise
   │       ↓
   │   wait → next .then()
   │
   └── throw error
           ↓
         .catch()
```

---

# 8. Why Promise Chaining Is Useful

Consider multiple asynchronous operations:

```text
Get user
   ↓
Get user's courses
   ↓
Get course details
   ↓
Display details
```

With deeply nested callbacks, the structure can become difficult to read.

Promise chaining provides a flatter structure:

```javascript
getUser()
    .then((user) => {
        return getCourses(user.id);
    })
    .then((courses) => {
        return getCourseDetails(courses);
    })
    .then((details) => {
        console.log(details);
    });
```

Each step receives the result from the previous step.

---

# 9. Error Handling

Real applications can fail.

Examples include:

- Network failures
- Invalid data
- Authentication failures
- Server problems
- Database problems
- Failed calculations

Promise chains provide `.catch()` for handling rejected operations and errors.

Example:

```javascript
Promise.resolve("Start")
    .then((result) => {
        console.log(result);

        throw new Error("Something went wrong");
    })
    .then((result) => {
        console.log("This will not run");
    })
    .catch((error) => {
        console.log(error.message);
    });
```

Output:

```text
Start
Something went wrong
```

---

# 10. `throw new Error()`

The following creates and throws an error:

```javascript
throw new Error("Something went wrong");
```

The error interrupts the normal success path of the Promise chain.

The chain then looks for an appropriate error handler.

For example:

```text
.then()
   ↓
Error
   ↓
skip remaining success handlers
   ↓
.catch()
```

---

# 11. `.catch()` Handles Chain Errors

Example:

```javascript
Promise.resolve(10)
    .then((number) => {
        return number * 2;
    })
    .then(() => {
        throw new Error("Calculation failed");
    })
    .then(() => {
        console.log("This will not run");
    })
    .catch((error) => {
        console.log(error.message);
    });
```

The error occurs in the second `.then()`.

The next success handler is skipped.

The `.catch()` handles the error.

---

# 12. Success Path and Failure Path

A Promise chain can be visualized as two possible paths.

### Successful path

```text
Promise
   ↓
.then()
   ↓
.then()
   ↓
.then()
   ↓
Final Result
```

### Failure path

```text
Promise
   ↓
.then()
   ↓
Error
   ↓
.catch()
   ↓
Error Handling
```

This allows success and failure to be handled separately.

---

# 13. Practical Student Example

A Promise can represent checking student eligibility.

```javascript
const studentPromise = Promise.resolve({
    name: "Rahim Ahmed",
    cgpa: 3.75
});

studentPromise
    .then((student) => {
        return student.cgpa;
    })
    .then((cgpa) => {
        return cgpa >= 3.00;
    })
    .then((eligible) => {
        console.log(`Eligible: ${eligible}`);
    })
    .catch((error) => {
        console.log(error.message);
    });
```

The flow is:

```text
Student Object
      ↓
Get CGPA
      ↓
3.75
      ↓
Check >= 3.00
      ↓
true
      ↓
Eligible: true
```

---

# 14. Practical Exercises

## Exercise 1 — Number Pipeline

Start with:

```javascript
const numberPromise = Promise.resolve(5);
```

Create a chain that:

1. Multiplies the number by `2`.
2. Adds `10`.
3. Multiplies the result by `3`.
4. Prints the final value.

Expected result:

```text
60
```

The pipeline should be:

```text
5
 ↓
× 2
 ↓
10
 ↓
+ 10
 ↓
20
 ↓
× 3
 ↓
60
```

---

## Exercise 2 — Student Processing

Use:

```javascript
const studentPromise = Promise.resolve({
    name: "Rahim Ahmed",
    cgpa: 3.75
});
```

Create a chain that:

1. Gets the student's CGPA.
2. Checks whether the CGPA is at least `3.00`.
3. Produces an eligibility message.
4. Prints the message.

Expected result:

```text
Rahim Ahmed is eligible
```

---

## Exercise 3 — Error Handling

Create:

```javascript
const numberPromise = Promise.resolve(10);
```

Then:

1. Double the number.
2. Throw an error.
3. Add another `.then()`.
4. Add `.catch()`.

The `.then()` after the error should not execute.

The `.catch()` should handle the error.

---

## Exercise 4 — Student Eligibility Failure

Create a student with a CGPA below `3.00`.

```javascript
const student = {
    name: "Rahim Ahmed",
    cgpa: 2.50
};
```

Create a Promise chain that:

```text
Check student
      ↓
Check CGPA
      ↓
If eligible → success message
If not → throw Error
      ↓
.catch()
      ↓
failure message
```

This exercise combines:

- Promise chaining
- Returning values
- Conditional logic
- Error handling

---

# Mental Model

The most important mental model from Day 64 is:

```text
Promise
   ↓
.then()
   ↓
return value
   ↓
next .then()
   ↓
return value
   ↓
next .then()
   ↓
final result
```

If a Promise or `.then()` encounters an error:

```text
Promise
   ↓
.then()
   ↓
ERROR
   ↓
skip remaining success handlers
   ↓
.catch()
```

A `.then()` can therefore:

```text
return a value
       ↓
return a Promise
       ↓
throw an error
```

These three possibilities determine what happens next in the chain.

---

# Connection to Previous Days

Day 62 introduced:

```text
Asynchronous JavaScript
        ↓
Call Stack
        ↓
Browser APIs
        ↓
Task Queue
        ↓
Event Loop
```

Day 63 introduced:

```text
Promise
   ↓
Pending
   ↓
Fulfilled / Rejected
```

Day 64 builds on both:

```text
Asynchronous Operation
        ↓
Promise
        ↓
.then()
        ↓
Transform Result
        ↓
Next Promise
        ↓
Next .then()
        ↓
Final Result
```

Errors can move through the chain toward:

```text
.catch()
```

---

# What I Learned

Today I learned:

- How Promise chaining works.
- That `.then()` returns another Promise.
- How values move from one `.then()` to the next.
- How to transform data through a Promise chain.
- The difference between returning a normal value and returning a Promise.
- How returning a Promise causes the next step to wait for its result.
- How errors interrupt the normal success path.
- How `throw new Error()` creates an error.
- How `.catch()` handles errors in a Promise chain.
- Why Promise chains are easier to manage than deeply nested callbacks.
- How Promise chains can model multiple dependent operations.

The most important relationships are:

```text
return value
     ↓
next .then()
```

```text
return Promise
     ↓
wait
     ↓
next .then()
```

```text
throw error
     ↓
.catch()
```

---

# Day Status

**Day 64 — Completed**

Promise chaining and basic Promise error handling have been completed.

The next step is to learn how `async` and `await` provide a cleaner way to write asynchronous code while still working with the Promise system learned during Days 63 and 64.

> Consistency is the foundation of progress.