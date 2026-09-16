# Day 68 — JavaScript `fetch()` and GET Requests

## Overview

Day 68 introduces `fetch()`, a built-in JavaScript function used to make HTTP requests and communicate with web APIs.

The focus of this day is making a GET request, receiving an HTTP response, converting the response into JSON data, and working with the returned JavaScript data.

JSONPlaceholder was used as a practice API to simulate a real backend.

---

## Learning Objectives

By the end of Day 68, the following concepts should be understood:

- What `fetch()` does
- How `fetch()` is used to make an HTTP GET request
- Why `fetch()` returns a Promise
- How `async` / `await` works with `fetch()`
- What a `Response` object represents
- How `response.json()` retrieves JSON data
- How to check whether a response was successful
- How to process API data using JavaScript
- How to access properties from objects returned by an API
- How API data connects with previously learned arrays, objects, and `forEach()`

---

## 1. What Is `fetch()`?

`fetch()` is a JavaScript function used to make HTTP requests.

The basic idea is:

```text
JavaScript
    ↓
fetch()
    ↓
HTTP Request
    ↓
Server / API
    ↓
HTTP Response
```

For example:

```javascript
fetch("https://jsonplaceholder.typicode.com/users");
```

This sends a GET request to the specified URL.

---

## 2. `fetch()` Returns a Promise

Because communication with a server takes time, `fetch()` is asynchronous.

For example:

```javascript
const response = fetch(
    "https://jsonplaceholder.typicode.com/users"
);
```

The value stored in `response` is initially a Promise representing the future HTTP response.

This connects directly to the previous lessons:

```text
fetch()
   ↓
Promise
   ↓
await
   ↓
Response
```

Therefore, we can write:

```javascript
const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
);
```

inside an `async` function.

---

## 3. Basic `fetch()` Example

```javascript
async function getUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response);

}

getUsers();
```

The `response` variable contains the HTTP Response object.

At this point, we have received the response from the server, but we have not yet extracted the JSON data from it.

---

## 4. Response vs Actual Data

This distinction is important.

After:

```javascript
const response = await fetch(url);
```

we have:

```text
Response object
```

We do not yet have the actual JavaScript array of users.

The flow is:

```text
fetch()
   ↓
HTTP Request
   ↓
HTTP Response
   ↓
Response object
   ↓
Read response body
   ↓
Actual data
```

---

## 5. Getting JSON Data

The Response object provides a `.json()` method.

Example:

```javascript
const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
);

const users = await response.json();
```

Now `users` contains the data returned by the API.

The complete flow is:

```text
fetch(url)
    ↓
Promise
    ↓
await
    ↓
Response object
    ↓
response.json()
    ↓
Promise
    ↓
await
    ↓
JavaScript data
```

There are two `await` operations because two asynchronous steps are taking place:

```javascript
const response = await fetch(url);
```

waits for the HTTP response.

Then:

```javascript
const users = await response.json();
```

waits for the response body to be read and converted into JavaScript data.

---

## 6. Complete GET Request

A basic GET request can therefore look like:

```javascript
async function getUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);

}

getUsers();
```

The API returns an array of user objects.

The returned data contains properties such as:

```text
id
name
username
email
address
phone
website
company
```

The exact data comes from the JSONPlaceholder practice API.

---

## 7. Checking the Response

The Response object contains information about the HTTP response.

For example:

```javascript
console.log(response.status);
```

A successful request can return:

```text
200
```

The Response object also provides:

```javascript
response.ok
```

For a successful response:

```text
true
```

For an unsuccessful HTTP response:

```text
false
```

We can therefore check:

```javascript
if (!response.ok) {

    throw new Error("Request failed");

}
```

This allows the application to treat an unsuccessful HTTP response as an error.

---

## 8. Using `try...catch`

Because `fetch()` is asynchronous, it can be combined with `try...catch`.

Example:

```javascript
async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error);

    }

}

getUsers();
```

The flow is:

```text
Start function
     ↓
fetch()
     ↓
wait for response
     ↓
check response
     ↓
read JSON
     ↓
use data
```

If an error occurs:

```text
Error
  ↓
catch
  ↓
handle error
```

---

## 9. Working With API Data

Once:

```javascript
const users = await response.json();
```

has been executed, the returned data can be processed using normal JavaScript.

For example:

```javascript
users.forEach((user) => {

    console.log(user.name);
    console.log(user.email);

});
```

This uses the same `forEach()` and object-property access learned earlier.

The API data becomes something JavaScript can work with:

```text
API
 ↓
JSON
 ↓
JavaScript array
 ↓
forEach()
 ↓
user object
 ↓
user.name
user.email
```

---

## 10. Accessing Object Properties

Each user is an object.

For example:

```javascript
{
    name: "Leanne Graham",
    email: "Sincere@april.biz"
}
```

Properties can be accessed using dot notation:

```javascript
user.name
```

and:

```javascript
user.email
```

This connects directly to the object concepts learned earlier.

---

## 11. Final Day 68 Code

The complete code used for the Day 68 exercise is:

```javascript
async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const users = await response.json();

        console.log(users);

        users.forEach((user) => {
            console.log(user.name);
            console.log(user.email);
        });

    } catch (error) {

        console.log(error);

    }

}

getUsers();
```

This code performs the complete process:

```text
Call getUsers()
      ↓
fetch API
      ↓
Wait for response
      ↓
Check response
      ↓
Convert response to JSON
      ↓
Store users
      ↓
Loop through users
      ↓
Print name and email
```

---

## 12. Practice

### Task 1 — Make a GET Request

Use:

```text
https://jsonplaceholder.typicode.com/users
```

and retrieve the users.

### Task 2 — Print the Data

Print the complete `users` array.

### Task 3 — Print Names

Use `forEach()` to print every user's name.

### Task 4 — Print Names and Emails

Use:

```javascript
user.name
user.email
```

to print each user's name and email.

### Task 5 — Inspect the Response

Print:

```javascript
response.status
```

and:

```javascript
response.ok
```

and observe the values returned by the API.

---

## Day 68 Summary

The main concepts learned today are:

```text
fetch()
→ makes an HTTP request

fetch() returns a Promise
→ use await to receive the Response

Response
→ represents the HTTP response from the server

response.json()
→ reads the response body as JSON data

response.ok
→ indicates whether the HTTP response was successful

forEach()
→ can process the returned API data

user.name
user.email
→ access properties from returned objects
```

The key mental model is:

```text
fetch(url)
    ↓
HTTP GET request
    ↓
Promise
    ↓
await
    ↓
Response
    ↓
response.json()
    ↓
Promise
    ↓
await
    ↓
JavaScript data
    ↓
Array / Objects
    ↓
forEach()
    ↓
Use the data
```

Day 68 was the first practical step from understanding APIs conceptually to actually communicating with one using JavaScript.

The next stage is learning how to **send data to a server using POST requests**.