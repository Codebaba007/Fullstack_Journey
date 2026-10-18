# Day 66 — JavaScript `Promise.all()`

## Overview

Day 66 introduces `Promise.all()`, a practical Promise utility used when multiple asynchronous operations can be performed independently and their results are needed together.

The focus of this day is understanding when and why `Promise.all()` is useful rather than learning every advanced Promise method.

The main idea is:

> When several independent asynchronous operations are needed, `Promise.all()` allows us to wait for all of their results together.

---

## Learning Objectives

By the end of Day 66, the following concepts should be understood:

- What problem `Promise.all()` solves
- Why independent asynchronous operations do not always need to be awaited one by one
- How to place multiple Promises inside `Promise.all()`
- How `await` works with `Promise.all()`
- How `Promise.all()` returns the results of multiple Promises
- How the result order corresponds to the order of the Promises provided
- What happens when all Promises succeed
- What happens when one of the Promises rejects
- When `Promise.all()` is useful in real applications

---

## 1. The Problem With Sequential `await`

Suppose a dashboard needs three separate pieces of information:

```text
Student information
Course information
Attendance information
```

If each operation takes approximately two seconds, writing:

```javascript
const student = await getStudent();
const course = await getCourse();
const attendance = await getAttendance();
```

means the operations are handled sequentially.

The general flow is:

```text
getStudent()
     ↓
wait
     ↓
getCourse()
     ↓
wait
     ↓
getAttendance()
     ↓
wait
```

If each operation takes two seconds, the overall waiting time can be approximately six seconds.

However, if these operations do not depend on each other, there is no reason to make one wait before starting the next.

---

## 2. Independent Asynchronous Operations

If the operations are independent:

```text
getStudent()
getCourse()
getAttendance()
```

they can be started without waiting for one another.

The conceptual flow becomes:

```text
getStudent() ────────┐
                     │
getCourse() ─────────┼──→ wait for all
                     │
getAttendance() ─────┘
```

This is where `Promise.all()` becomes useful.

---

## 3. What Is `Promise.all()`?

`Promise.all()` accepts multiple Promises and produces a new Promise.

Example:

```javascript
const results = await Promise.all([
    getStudent(),
    getCourse(),
    getAttendance()
]);
```

The basic mental model is:

```text
Multiple Promises
       ↓
Promise.all()
       ↓
wait for all
       ↓
results
```

A simple way to think about it is:

> "I have several asynchronous tasks. Give me their results when all of them have finished successfully."

---

## 4. Simple Analogy

Imagine ordering a complete meal:

```text
Burger
Fries
Drink
```

You don't need to wait for the burger to arrive before the restaurant starts preparing the fries.

The restaurant can work on the different parts of the order independently.

You eventually receive the complete order.

This is similar to:

```text
Burger Promise ─────┐
Fries Promise ──────┼──→ Promise.all()
Drink Promise ──────┘
                         ↓
                   complete results
```

The important idea is:

```text
Promise
→ "This result will come later."

Promise.all()
→ "I have several results coming later. Give them to me when all are ready."
```

---

## 5. Basic Example

Suppose we have three functions:

```javascript
function getStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Rahim");
        }, 2000);

    });

}
```

```javascript
function getCourse() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("JavaScript");
        }, 2000);

    });

}
```

```javascript
function getAttendance() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("92%");
        }, 2000);

    });

}
```

We can use all three together:

```javascript
async function loadData() {

    const results = await Promise.all([
        getStudent(),
        getCourse(),
        getAttendance()
    ]);

    console.log(results);

}

loadData();
```

The result is:

```text
[
    "Rahim",
    "JavaScript",
    "92%"
]
```

The operations can proceed independently, while `Promise.all()` waits for all of them.

---

## 6. Result Order

An important detail is that the results are returned in the same order as the Promises were provided.

For example:

```javascript
const results = await Promise.all([
    getStudent(),
    getCourse(),
    getAttendance()
]);
```

The results correspond to:

```text
results[0] → getStudent()
results[1] → getCourse()
results[2] → getAttendance()
```

Even if one operation finishes before another, the result array still follows the original order.

For example:

```javascript
console.log(results[0]);
console.log(results[1]);
console.log(results[2]);
```

Produces:

```text
Rahim
JavaScript
92%
```

---

## 7. Different Completion Times

The Promises do not need to take the same amount of time.

For example:

```text
Student     → 2 seconds
Course      → 1 second
Attendance  → 3 seconds
```

They can proceed independently.

The final `Promise.all()` result becomes available when the required Promises have all successfully completed.

The slowest operation determines when the combined result is ready.

Conceptually:

```text
Student ──────────────── 2 sec
Course ───────── 1 sec
Attendance ───────────────────── 3 sec
                                  ↓
                            Promise.all()
                                  ↓
                              results
```

---

## 8. `Promise.all()` With Destructuring

The returned array can be stored in separate variables using array destructuring:

```javascript
const [student, course, attendance] = await Promise.all([
    getStudent(),
    getCourse(),
    getAttendance()
]);
```

Now:

```text
student
course
attendance
```

contain the corresponding results.

For example:

```javascript
console.log(student);
console.log(course);
console.log(attendance);
```

Output:

```text
Rahim
JavaScript
92%
```

The important part is the matching order:

```text
Promise position       Variable
──────────────────────────────────
0                       student
1                       course
2                       attendance
```

---

## 9. What Happens When a Promise Fails?

`Promise.all()` requires all of its Promises to succeed.

Suppose:

```text
Student     → success
Course      → failure
Attendance  → success
```

Then the combined Promise is rejected.

Conceptually:

```text
Promise.all()
      ↓
One Promise rejects
      ↓
Combined Promise rejects
      ↓
catch
```

Example:

```javascript
async function loadData() {

    try {

        const results = await Promise.all([
            getStudent(),
            getCourse(),
            getAttendance()
        ]);

        console.log(results);

    } catch (error) {

        console.log("Something went wrong");

    }

}
```

If one of the required operations rejects, the code moves to the `catch` block.

---

## 10. `Promise.all()` With `try...catch`

A common practical pattern is:

```javascript
async function loadDashboard() {

    try {

        const [student, course, attendance] = await Promise.all([
            getStudent(),
            getCourse(),
            getAttendance()
        ]);

        console.log(student);
        console.log(course);
        console.log(attendance);

    } catch (error) {

        console.log("Failed to load dashboard data");

    }

}
```

The flow is:

```text
loadDashboard()
       ↓
Start independent operations
       ↓
Promise.all()
       ↓
Wait for all
       ↓
 ┌─────┴─────┐
 ↓           ↓
success     failure
 ↓           ↓
results     catch
```

---

## 11. `await` vs `Promise.all()`

For one asynchronous operation:

```javascript
const student = await getStudent();
```

Think:

> "Wait for this operation and give me its result."

For multiple independent operations:

```javascript
const results = await Promise.all([
    getStudent(),
    getCourse(),
    getAttendance()
]);
```

Think:

> "Wait for all these independent operations and give me their results together."

---

## 12. When Should `Promise.all()` Be Used?

`Promise.all()` is useful when:

- You need multiple asynchronous results
- The operations are independent
- You want to handle their results together
- Waiting for each operation sequentially would be unnecessary

Examples include:

```text
Dashboard data
User information + notifications
Product information + reviews
Multiple independent API requests
Several pieces of page data
```

---

## 13. When Not to Use It

If the second operation depends on the result of the first operation, `Promise.all()` may not be appropriate.

For example:

```text
Get user
   ↓
Get that user's ID
   ↓
Use ID to get user's orders
```

Here the second operation needs information from the first.

The operations are dependent.

In such a situation, sequential `await` can make more sense:

```javascript
const user = await getUser();

const orders = await getOrders(user.id);
```

The general rule is:

```text
Independent operations
        ↓
Promise.all()

Dependent operations
        ↓
await sequentially
```

---

## 14. Student Dashboard Example

Imagine a student dashboard needs:

```text
Student profile
Course list
Attendance
```

None of these operations depends on another.

A suitable approach is:

```javascript
async function loadStudentDashboard() {

    try {

        const [student, courses, attendance] = await Promise.all([
            getStudent(),
            getCourses(),
            getAttendance()
        ]);

        console.log(student);
        console.log(courses);
        console.log(attendance);

    } catch (error) {

        console.log("Unable to load dashboard");

    }

}
```

The overall pattern is:

```text
             Student
                │
             Courses
                │
            Attendance
                │
                ▼
          Promise.all()
                │
                ▼
          await results
                │
                ▼
        Update dashboard
```

---

## 15. Important Mental Model

Remember this:

```text
One independent async operation
        ↓
      await
        ↓
      result
```

Multiple independent async operations:

```text
Operation A ───────┐
Operation B ───────┼──→ Promise.all()
Operation C ───────┘
                         ↓
                       await
                         ↓
                      results
```

If one required Promise rejects:

```text
Promise.all()
     ↓
rejected
     ↓
catch
```

---

## 16. Practice Tasks

### Task 1 — Three Promises

Create:

```javascript
getName()
getDepartment()
getCgpa()
```

Each function should return a Promise.

Use `Promise.all()` to retrieve all three results.

---

### Task 2 — Different Delays

Make the three Promises take different amounts of time:

```text
Name       → 2 seconds
Department → 1 second
CGPA       → 3 seconds
```

Use `Promise.all()` to retrieve their results.

Observe when the final result becomes available.

---

### Task 3 — Student Dashboard

Create:

```javascript
getStudent()
getCourses()
getAttendance()
```

Use:

```javascript
const [student, courses, attendance] = await Promise.all([
    getStudent(),
    getCourses(),
    getAttendance()
]);
```

Print all three results.

---

### Task 4 — Error Handling

Make one of the Promises reject.

Use:

```javascript
try {

} catch (error) {

}
```

to handle the failure.

Observe what happens to `Promise.all()` when one Promise fails.

---

### Task 5 — Decide Which Approach

For each situation, decide whether sequential `await` or `Promise.all()` makes more sense.

#### Situation A

```text
Get student
Get course list
Get attendance
```

All three are independent.

#### Situation B

```text
Get user
Use user.id to get orders
```

The second request needs the first request's result.

#### Situation C

```text
Get product
Get product reviews
Get product recommendations
```

Assume all three can be requested independently.

The goal is to recognize:

```text
Independent → Promise.all()

Dependent → sequential await
```

---

# Day 66 Summary

`Promise.all()` is used when multiple asynchronous operations can be performed independently and their results are needed together.

The basic syntax is:

```javascript
const results = await Promise.all([
    promise1,
    promise2,
    promise3
]);
```

The most important ideas are:

```text
Promise
→ represents a future result

await
→ waits for a Promise's result inside an async function

Promise.all()
→ waits for multiple Promises together

All succeed
→ receive all results

One rejects
→ combined Promise rejects
→ handle with catch
```

The key mental model:

```text
Multiple independent operations
            ↓
       Promise.all()
            ↓
        await
            ↓
      all results
```

Day 66 focuses on one practical Promise pattern. Advanced Promise utilities such as `Promise.race()`, `Promise.any()`, and `Promise.allSettled()` are intentionally not covered as separate topics at this stage.