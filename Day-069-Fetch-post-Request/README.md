# Day 69 — Fetch POST Requests

## 📌 Overview

Today I learned how to use JavaScript's `fetch()` to send data to an API using a **POST request**.

This was the next step after learning how to retrieve data with GET requests. Instead of only receiving data from an API, I learned how to send JSON data to an API and handle the response.

For practice, I used the JSONPlaceholder API.

## 🎯 Learning Objectives

- Understand what a POST request is
- Understand the difference between GET and POST
- Use `fetch()` with the POST method
- Understand request headers
- Understand the `Content-Type` header
- Send data using the request body
- Use `JSON.stringify()` to convert JavaScript objects into JSON
- Receive and process the server response with `response.json()`
- Check whether a request succeeded using `response.ok`
- Use `try...catch` for error handling
- Create a reusable function that can send different users

## 🧠 GET vs POST

### GET

GET is used to retrieve data.

```javascript
const response = await fetch(url);
```

### POST

POST is commonly used to send or create data.

```javascript
const response = await fetch(url, {
    method: "POST"
});
```

## 📦 Request Structure

A POST request can contain:

```text
URL
 ↓
Method
 ↓
Headers
 ↓
Body
 ↓
Server
 ↓
Response
```

## 🔹 Headers

The request specifies that the data being sent is JSON:

```javascript
headers: {
    "Content-Type": "application/json"
}
```

The `Content-Type` header tells the server what type of data is being sent.

## 🔹 Request Body

The data sent to the server goes inside the `body`.

Example JavaScript object:

```javascript
const newUser = {
    name: "Rahim Ahmed",
    email: "rahim@example.com"
};
```

The object is converted into JSON before being sent:

```javascript
body: JSON.stringify(newUser)
```

### Sending vs Receiving JSON

```text
Sending JSON:
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON data
       ↓
Server

Receiving JSON:
Server
  ↓
JSON data
  ↓
response.json()
  ↓
JavaScript Object
```

## 💻 Practice

I created three user objects:

```javascript
const user1 = {
    name: "Rahim Ahmed",
    email: "rahim@example.com"
};

const user2 = {
    name: "Nusrat Jahan",
    email: "nusrat@example.com"
};

const user3 = {
    name: "Tanvir Hasan",
    email: "tanvir@example.com"
};
```

Instead of creating three separate functions, I created one reusable function:

```javascript
async function createUser(user) {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)
            }
        );

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        const createdUser = await response.json();

        console.log("User Created");
        console.log("Name:", createdUser.name);
        console.log("Email:", createdUser.email);
        console.log("ID:", createdUser.id);

    } catch (error) {

        console.log("Error:", error);

    }

}
```

Then I reused the function for all three users:

```javascript
createUser(user1);
createUser(user2);
createUser(user3);
```

## 🔄 Request Flow

The complete process is:

```text
createUser(user1)
       ↓
fetch()
       ↓
POST request
       ↓
JSON.stringify(user)
       ↓
JSON data sent to API
       ↓
API processes request
       ↓
Response received
       ↓
response.json()
       ↓
createdUser
       ↓
Console output
```

## 🌐 Practice API

I used:

```text
https://jsonplaceholder.typicode.com/users
```

JSONPlaceholder is a public practice API used for testing and learning.

The POST request simulates creating a user and returns a response, but it is not a permanent personal database.

## 🧠 Key Concepts Learned

### `method`

Specifies the HTTP method being used.

```javascript
method: "POST"
```

### `headers`

Provides additional information about the request.

```javascript
headers: {
    "Content-Type": "application/json"
}
```

### `body`

Contains the data being sent.

```javascript
body: JSON.stringify(user)
```

### `JSON.stringify()`

Converts a JavaScript object into a JSON string.

```javascript
JSON.stringify(user)
```

### `response.json()`

Converts the JSON response into a JavaScript object.

```javascript
const createdUser = await response.json();
```

### `response.ok`

Checks whether the HTTP request was successful.

```javascript
if (!response.ok) {
    throw new Error("Failed to create user");
}
```

## 🛠️ Error Handling

The POST request was placed inside `try...catch`:

```javascript
try {
    // request
} catch (error) {
    console.log(error);
}
```

This prevents the application from failing silently when the request encounters an error.

## 📚 Main Takeaway

The main concept of Day 69 was learning how to **send data to an API using POST**.

The basic pattern I learned is:

```text
JavaScript Object
      ↓
JSON.stringify()
      ↓
fetch() POST
      ↓
API
      ↓
Response
      ↓
response.json()
      ↓
JavaScript Object
```

This builds on Day 68's GET requests and prepares me for working with more realistic APIs and backend applications.