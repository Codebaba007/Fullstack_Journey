# Day 63 — JavaScript Promises

## Overview

Day 63 introduced Promises, one of the most important concepts in asynchronous JavaScript.

After learning about asynchronous execution and the Event Loop on Day 62, the next question was how JavaScript can represent and manage the result of an operation that has not finished yet.

A Promise provides a structured way to represent the eventual outcome of an asynchronous operation.

The main concepts covered were:

- Promises
- Promise states
- `pending`
- `fulfilled`
- `rejected`
- `resolve()`
- `reject()`
- `.then()`
- `.catch()`
- Promise results
- Connecting Promises with asynchronous operations

---

## Objective

The objectives for Day 63 were to:

- Understand what a Promise is.
- Understand why Promises are useful.
- Learn the three states of a Promise.
- Understand `resolve()`.
- Understand `reject()`.
- Use `.then()` to handle successful results.
- Use `.catch()` to handle failures.
- Create Promises manually.
- Combine Promises with `setTimeout()`.
- Understand that a Promise represents a future result rather than the result itself.

---

## Technologies Used

- JavaScript
- `Promise`
- `setTimeout()`
- `.then()`
- `.catch()`

---

# 1. Why Promises Are Needed

Asynchronous operations can take an unpredictable amount of time.

For example:

```javascript
setTimeout(() => {
    console.log("Data received");
}, 2000);
```

This allows JavaScript to continue executing while waiting.

However, real applications need more than simply waiting.

We often need to know:

```text
Did the operation succeed?
        ↓
What result did it produce?

OR

Did the operation fail?
        ↓
What went wrong?
```

A Promise provides a way to represent that future outcome.

---

# 2. What Is a Promise?

A Promise is an object representing the eventual outcome of an asynchronous operation.

Conceptually:

```text
Promise
   ↓
"I don't have the final result yet,
but eventually I will either succeed
or fail."
```

A Promise can move through different states as the operation progresses.

---

# 3. Promise States

A Promise has three possible states:

```text
Pending
Fulfilled
Rejected
```

The basic flow is:

```text
             ┌──→ Fulfilled
             │
Pending ─────┤
             │
             └──→ Rejected
```

---

## Pending

The operation has started but has not finished yet.

```text
Pending
```

Example:

```text
Request started
      ↓
Waiting...
      ↓
Pending
```

---

## Fulfilled

The operation completed successfully.

```text
Pending
   ↓
Fulfilled
```

A fulfilled Promise has a successful result/value.

---

## Rejected

The operation failed.

```text
Pending
   ↓
Rejected
```

A rejected Promise has information describing the failure.

---

# 4. Creating a Promise

A Promise can be created using:

```javascript
const myPromise = new Promise((resolve, reject) => {

});
```

`new Promise()` creates a Promise object.

The function receives two special functions:

```javascript
resolve
reject
```

They are used to settle the Promise.

---

# 5. `resolve()`

`resolve()` is used when the operation succeeds.

Example:

```javascript
const myPromise = new Promise((resolve, reject) => {

    resolve("Success!");

});
```

The Promise moves from:

```text
Pending
   ↓
Fulfilled
```

The value:

```text
"Success!"
```

becomes the successful result of the Promise.

---

# 6. `reject()`

`reject()` is used when the operation fails.

Example:

```javascript
const myPromise = new Promise((resolve, reject) => {

    reject("Something went wrong.");

});
```

The Promise moves from:

```text
Pending
   ↓
Rejected
```

The rejection value provides information about the failure.

---

# 7. `.then()`

`.then()` is used to handle a fulfilled Promise.

Example:

```javascript
myPromise.then((result) => {
    console.log(result);
});
```

The callback receives the value provided to `resolve()`.

For example:

```javascript
const myPromise = new Promise((resolve, reject) => {

    resolve("Success!");

});

myPromise.then((result) => {
    console.log(result);
});
```

Output:

```text
Success!
```

The flow is:

```text
resolve("Success!")
        ↓
Promise fulfilled
        ↓
.then()
        ↓
result
        ↓
"Success!"
```

---

# 8. `.catch()`

`.catch()` is used to handle a rejected Promise.

Example:

```javascript
myPromise.catch((error) => {
    console.log(error);
});
```

If:

```javascript
reject("Something went wrong.");
```

is called, the rejection can be handled with `.catch()`.

The basic relationship is:

```text
.then()
   ↓
Success

.catch()
   ↓
Failure
```

---

# 9. Success and Failure Together

A Promise can have both success and failure handling.

```javascript
const loginPromise = new Promise((resolve, reject) => {

    const loginSuccessful = true;

    if (loginSuccessful) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }

});

loginPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

If:

```javascript
loginSuccessful = true;
```

the Promise is fulfilled and `.then()` handles the result.

If:

```javascript
loginSuccessful = false;
```

the Promise is rejected and `.catch()` handles the error.

---

# 10. Promise With Asynchronous Work

Promises become especially useful when combined with asynchronous operations.

Example:

```javascript
const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received");
    }, 2000);

});
```

The Promise initially represents:

```text
Pending
```

After the timer completes:

```text
resolve("Data received")
```

is called.

The Promise becomes:

```text
Fulfilled
```

Then:

```javascript
myPromise.then((result) => {
    console.log(result);
});
```

handles the result.

---

# 11. Complete Example

```javascript
const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received");
    }, 2000);

});

console.log("Waiting...");

myPromise.then((result) => {
    console.log(result);
});

console.log("Finished starting program");
```

The immediate output is:

```text
Waiting...
Finished starting program
```

After approximately two seconds:

```text
Data received
```

This combines the asynchronous concepts from Day 62 with the Promise concepts from Day 63.

---

# 12. Promise Is Not the Result

An important concept from today is that the Promise itself is not the final result.

For example:

```javascript
const myPromise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Hello");
    }, 2000);

});
```

`myPromise` represents the future outcome.

It does not immediately equal:

```text
"Hello"
```

Instead:

```text
myPromise
    ↓
Promise
    ↓
Pending
    ↓
eventually
    ↓
Fulfilled
    ↓
"Hello"
```

The result can be accessed through `.then()`.

```javascript
myPromise.then((result) => {
    console.log(result);
});
```

---

# 13. Promise Lifecycle

The complete lifecycle can be represented as:

```text
                    Promise
                       │
                    Pending
                       │
              ┌────────┴────────┐
              ↓                 ↓
          resolve()          reject()
              ↓                 ↓
         Fulfilled           Rejected
              ↓                 ↓
           .then()           .catch()
```

A Promise begins as pending and eventually becomes either fulfilled or rejected.

Once it has settled, it does not return to pending.

---

# 14. Connection to Callbacks

Callbacks were already used before Promises.

For example:

```javascript
students.forEach((student) => {
    console.log(student.name);
});
```

And:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

Promises still use callbacks when handling their results:

```javascript
myPromise.then((result) => {
    console.log(result);
});
```

The important difference is that Promises provide a structured way to represent the eventual outcome of an asynchronous operation.

---

# 15. Practical Exercise

The main exercise was to create a Promise representing student data loading.

The required behavior was:

```text
Create Promise
      ↓
Wait approximately 2 seconds
      ↓
resolve()
      ↓
.then()
      ↓
Display successful result
```

The failure version followed:

```text
Create Promise
      ↓
Wait approximately 2 seconds
      ↓
reject()
      ↓
.catch()
      ↓
Display error
```

---

# 16. Student Eligibility Exercise

A practical Promise was also designed around student eligibility.

Example student:

```javascript
const student = {
    name: "Rahim Ahmed",
    cgpa: 3.75
};
```

The Promise represents checking the student's eligibility.

The logic is:

```text
Check CGPA
    ↓
CGPA >= 3.00?
    ↓
 ┌──────────────┐
 ↓              ↓
Yes             No
 ↓              ↓
resolve()      reject()
 ↓              ↓
.then()        .catch()
```

This demonstrates how Promise outcomes can depend on application logic.

---

# Mental Model

The most important mental model from Day 63 is:

```text
Asynchronous Operation
        ↓
     Promise
        ↓
     Pending
        ↓
 ┌──────┴──────┐
 ↓             ↓
Success       Failure
 ↓             ↓
resolve()    reject()
 ↓             ↓
Fulfilled    Rejected
 ↓             ↓
.then()      .catch()
```

A Promise represents a future outcome.

---

# What I Learned

Today I learned:

- What a Promise is.
- Why Promises are useful for asynchronous programming.
- The three Promise states.
- What `pending` means.
- What `fulfilled` means.
- What `rejected` means.
- How `resolve()` settles a Promise successfully.
- How `reject()` settles a Promise with failure.
- How `.then()` handles successful results.
- How `.catch()` handles rejected results.
- How Promises can work with `setTimeout()`.
- That a Promise represents a future result rather than being the result itself.

The most important relationship learned today was:

```text
resolve() → .then()
reject()  → .catch()
```

---

# Day Status

**Day 63 — Completed**

The fundamentals of JavaScript Promises have been introduced and practiced.

The next step is to go deeper into how Promises can be connected together, how values move between `.then()` callbacks, and how errors travel through Promise chains.

> Consistency is the foundation of progress.