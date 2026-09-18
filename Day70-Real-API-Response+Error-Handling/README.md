# Day 70 — Real APIs + API Responses + Error Handling

## 📌 Overview

Today I learned how to properly handle API responses when working with JavaScript's `fetch()`.

I learned that `fetch()` returns a **Response object** first, and that I need to check whether the HTTP request was successful before processing the returned JSON data.

I also practiced handling API errors using `response.ok` and `try...catch`.

## 🎯 Learning Objectives

- Understand the `Response` object
- Understand `response.status`
- Understand `response.ok`
- Handle successful API requests
- Handle HTTP errors such as `404`
- Understand why `fetch()` does not automatically throw an error for HTTP errors
- Use `try...catch` for request failures
- Convert API responses into JavaScript data using `response.json()`
- Create a reusable API-fetching function

## 🧠 The Fetch Flow

When making an API request:

```text
fetch()
   ↓
Response object
   ↓
Check response.ok
   ↓
response.json()
   ↓
Actual data
   ↓
Use the data
```

If something goes wrong during the request:

```text
fetch()
   ↓
Request failure
   ↓
catch
   ↓
Handle error
```

## 🔹 Response Object

The result of:

```javascript
const response = await fetch(url);
```

is not immediately the actual JSON data.

It is a `Response` object containing information about the HTTP response.

Important properties and methods include:

```javascript
response.status
response.ok
response.json()
```

## 🔢 HTTP Status Codes

Some common HTTP status codes:

| Status | Meaning |
|---|---|
| `200` | Request successful |
| `201` | Resource successfully created |
| `400` | Bad request |
| `401` | Authentication required/failed |
| `403` | Forbidden |
| `404` | Resource not found |
| `500` | Server error |

## 🔹 `response.status`

`response.status` gives the HTTP status code.

Example:

```javascript
console.log(response.status);
```

A successful GET request will commonly return:

```text
200
```

## 🔹 `response.ok`

`response.ok` gives a Boolean value.

```javascript
console.log(response.ok);
```

A successful HTTP response:

```text
true
```

An unsuccessful HTTP response:

```text
false
```

This allows the program to check whether the request succeeded.

## ⚠️ Important Fetch Behavior

`fetch()` does not automatically throw an error simply because the server returned an HTTP error such as `404`.

For example:

```text
API
 ↓
404 response
 ↓
fetch() receives Response
```

Therefore, I need to check:

```javascript
if (!response.ok) {
    throw new Error("Failed to fetch users");
}
```

## 💻 Practice Code

I created a reusable function for retrieving users:

```javascript
async function fetchUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log("Status:", response.status);
        console.log("OK:", response.ok);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log("Users:", users);

        users.forEach((user) => {

            console.log("Name:", user.name);
            console.log("Email:", user.email);

        });

    } catch (error) {

        console.log("Error:", error);

    }

}

fetchUsers();
```

## 🔄 Code Flow

The function follows this process:

```text
fetchUsers()
      ↓
fetch() API request
      ↓
Receive Response object
      ↓
Check status and ok
      ↓
If unsuccessful → throw Error
      ↓
If successful
      ↓
response.json()
      ↓
Receive users array
      ↓
forEach()
      ↓
Print names and emails
```

## 🧪 Error Handling Practice

I tested the error-handling logic by intentionally changing the API URL.

Working URL:

```text
https://jsonplaceholder.typicode.com/users
```

Test URL:

```text
https://jsonplaceholder.typicode.com/users123
```

The incorrect endpoint returns:

```text
404
```

and:

```javascript
response.ok
```

becomes:

```text
false
```

The program then throws an error:

```javascript
throw new Error("Failed to fetch users");
```

which is handled by:

```javascript
catch (error) {
    console.log("Error:", error);
}
```

## 🧠 Key Concepts Learned

### `response.status`

Returns the HTTP status code.

```javascript
response.status
```

### `response.ok`

Returns `true` or `false` depending on whether the HTTP response was successful.

```javascript
response.ok
```

### `response.json()`

Reads the response body and converts JSON into usable JavaScript data.

```javascript
const users = await response.json();
```

### `throw new Error()`

Creates an error when the response is unsuccessful.

```javascript
throw new Error("Failed to fetch users");
```

### `try...catch`

Allows the program to handle errors without crashing the normal flow.

```javascript
try {
    // API request
} catch (error) {
    // Handle error
}
```

## 📚 Main Takeaway

The main lesson from Day 70 was that making an API request is not just about calling `fetch()`.

A proper API request should follow this pattern:

```text
fetch()
   ↓
Receive Response
   ↓
Check response.ok
   ↓
response.json()
   ↓
Use the data
```

And when something goes wrong:

```text
Error
 ↓
catch
 ↓
Handle the error
```

This pattern will become important when building frontend applications with React and Next.js.