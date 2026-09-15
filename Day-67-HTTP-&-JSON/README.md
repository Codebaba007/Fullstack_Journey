# Day 67 — HTTP, JSON, and APIs

## Overview

Day 67 introduces the concepts behind communication between a frontend application and a server. Before working directly with `fetch()`, this day focuses on understanding what happens when a browser communicates with a backend or API.

The main focus is understanding the relationship between clients, servers, HTTP requests, HTTP responses, status codes, JSON, and APIs.

---

## Learning Objectives

By the end of Day 67, the following concepts should be understood:

- What a client is
- What a server is
- How clients and servers communicate
- What HTTP is
- What an HTTP request represents
- What an HTTP response represents
- The purpose of common HTTP methods
- The meaning of common HTTP status codes
- What JSON is
- Why JSON is commonly used for exchanging data
- What a web API is
- How HTTP, APIs, JSON, JavaScript, and the DOM connect together

---

## 1. Client and Server

A browser is commonly the client in a web application.

A server is responsible for receiving requests, processing them, and returning responses.

The basic communication model is:

```text
Client
   ↓
Request
   ↓
Server
   ↓
Response
   ↓
Client
```

For example, a student dashboard might request student information from a server.

```text
Website
   ↓
"Give me the students"
   ↓
Server
   ↓
Student data
   ↓
Website
```

---

## 2. HTTP

HTTP stands for HyperText Transfer Protocol.

HTTP provides the rules used for communication between clients and servers on the web.

The basic model is:

```text
Browser
   ↓
HTTP Request
   ↓
Server
   ↓
HTTP Response
   ↓
Browser
```

HTTPS is the secure version commonly used for web communication.

---

## 3. HTTP Request

An HTTP request is sent by the client to the server.

A request can contain information such as:

```text
Method
URL
Headers
Body
```

For example:

```text
GET /students
```

can represent a request asking the server for student information.

The important idea is:

> A request represents what the client wants the server to do or provide.

---

## 4. HTTP Methods

HTTP methods describe the intended action of a request.

Important methods include:

```text
GET
POST
PUT
PATCH
DELETE
```

The two most important methods introduced today are:

### GET

Used when the client wants to retrieve data.

```text
GET /students
```

Mental model:

```text
GET
↓
"Give me data."
```

### POST

Used when the client sends data, commonly to create a new resource.

```text
POST /students
```

Mental model:

```text
POST
↓
"Here is some data. Create something with it."
```

Other methods will become more relevant as backend and API development progresses.

---

## 5. HTTP Response

After processing a request, the server sends a response.

The basic flow is:

```text
Client
   ↓
Request
   ↓
Server
   ↓
Response
   ↓
Client
```

A response can contain:

```text
Status
Headers
Data
```

The status code is particularly useful because it tells the client what happened with the request.

---

## 6. HTTP Status Codes

HTTP status codes are grouped into categories.

```text
2xx → Success
4xx → Client/request-related problem
5xx → Server-side problem
```

Important status codes introduced today:

```text
200 → OK
201 → Created
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Internal Server Error
```

### 200 — OK

The request succeeded.

### 201 — Created

A resource was successfully created.

This is commonly associated with successful POST operations.

### 400 — Bad Request

The server could not properly process the request because the request was invalid.

### 401 — Unauthorized

Authentication is required or the provided authentication was not accepted.

### 403 — Forbidden

The server understood the request but will not allow access.

### 404 — Not Found

The requested resource could not be found.

### 500 — Internal Server Error

Something went wrong on the server.

The most important pattern to remember is:

```text
2xx → success

4xx → problem with the request/client side

5xx → problem on the server side
```

---

## 7. JSON

JSON stands for JavaScript Object Notation.

JSON is a structured data format commonly used when exchanging information between applications.

A JavaScript object can look like:

```javascript
const student = {
    name: "Rahim Ahmed",
    cgpa: 3.75,
    department: "Computer Science"
};
```

The same information represented as JSON looks like:

```json
{
    "name": "Rahim Ahmed",
    "cgpa": 3.75,
    "department": "Computer Science"
}
```

One noticeable difference is that JSON property names are written using double quotes.

---

## 8. Why JSON Is Useful

A server can return structured data using JSON.

For example:

```json
{
    "name": "Rahim Ahmed",
    "cgpa": 3.75,
    "department": "Computer Science"
}
```

The frontend can then use the data with JavaScript.

The general flow is:

```text
Server
   ↓
JSON
   ↓
JavaScript
   ↓
Use the data
   ↓
Update the DOM
```

JSON makes it possible to represent structured information in a format that applications can exchange.

---

## 9. JSON Arrays

JSON can also represent collections of objects.

For example:

```json
[
    {
        "name": "Rahim Ahmed",
        "cgpa": 3.75
    },
    {
        "name": "Nusrat Jahan",
        "cgpa": 3.88
    },
    {
        "name": "Tanvir Hasan",
        "cgpa": 3.62
    }
]
```

This is especially useful for applications that need to retrieve lists of data.

For example:

```text
Server
   ↓
JSON array
   ↓
JavaScript array-like data
   ↓
forEach()
   ↓
Create student cards
```

This connects directly to the DOM and array concepts already learned.

---

## 10. JSON Data Types

JSON can represent common data types such as:

```text
String
Number
Boolean
Object
Array
null
```

Example:

```json
{
    "name": "Rahim",
    "age": 22,
    "active": true,
    "skills": ["HTML", "CSS", "JavaScript"],
    "address": {
        "city": "Dhaka"
    },
    "middleName": null
}
```

JSON represents data. It is not JavaScript code.

JavaScript can read and work with JSON data.

---

## 11. APIs

API stands for Application Programming Interface.

For the current stage of the journey, a web API can be understood as a way for applications to communicate with a server and exchange data.

The basic flow is:

```text
Frontend
   ↓
API Request
   ↓
API / Server
   ↓
API Response
   ↓
Frontend
```

The response commonly contains structured data such as JSON.

Therefore, these concepts are closely connected:

```text
API
 ↓
HTTP
 ↓
Request / Response
 ↓
JSON
 ↓
JavaScript
```

---

## 12. Connecting HTTP With Async JavaScript

Server communication takes time.

Therefore, making a request is an asynchronous operation.

The general idea is:

```text
HTTP Request
      ↓
Waiting
      ↓
HTTP Response
```

This connects directly to the Promise and `async` / `await` concepts learned previously.

Eventually, JavaScript can use:

```text
fetch()
   ↓
HTTP Request
   ↓
Promise
   ↓
await
   ↓
Response
   ↓
JSON Data
   ↓
JavaScript
   ↓
DOM
```

`fetch()` itself will be covered in the following lessons.

---

## 13. Complete Web Communication Model

The concepts learned so far can be connected into one flow:

```text
User
  ↓
Frontend
  ↓
JavaScript
  ↓
HTTP Request
  ↓
Server / API
  ↓
HTTP Response
  ↓
Status Code + JSON
  ↓
JavaScript
  ↓
DOM
  ↓
Updated Interface
```

For example:

```text
Student Dashboard
        ↓
GET /students
        ↓
Student API
        ↓
200 OK
        ↓
JSON student data
        ↓
JavaScript
        ↓
Create student cards
```

This is the foundation for working with real APIs.

---

## 14. Connection to Previous JavaScript Concepts

Day 67 connects several previously learned concepts.

### Promises

Server requests can take time, so asynchronous operations commonly involve Promises.

### `async` / `await`

`await` can be used to work with the result of an asynchronous request.

### Arrays and Objects

API responses commonly contain arrays and objects.

### Array Methods

Methods such as:

```javascript
forEach()
map()
filter()
find()
```

can be used to process API data.

### DOM

The resulting data can be used to dynamically update the webpage.

The overall pattern becomes:

```text
API
 ↓
JSON
 ↓
JavaScript objects/arrays
 ↓
Array methods
 ↓
DOM
```

---

## 15. Today's Practice

Day 67 is primarily a conceptual day, so the exercises focus on understanding rather than building a complete JavaScript application.

### Exercise 1

Explain what this request means:

```text
GET /students
```

### Exercise 2

Explain what this status code means:

```text
404
```

### Exercise 3

Look at:

```json
{
    "name": "Rahim Ahmed",
    "cgpa": 3.75,
    "department": "Computer Science"
}
```

Identify the three properties in the object.

### Exercise 4

Which HTTP method would normally be used for:

```text
Getting a list of students
```

and:

```text
Creating a new student
```

### Exercise 5

Explain this flow in your own words:

```text
Browser
   ↓
GET /students
   ↓
Server
   ↓
200 OK
   ↓
JSON
   ↓
JavaScript
   ↓
Student Cards
```

---

# Day 67 Summary

Day 67 established the foundation for working with web APIs.

The key concepts are:

```text
Client
→ application making the request

Server
→ system receiving and processing the request

HTTP
→ rules for communication between client and server

Request
→ what the client asks the server to do or provide

Response
→ what the server sends back

GET
→ retrieve data

POST
→ send data, commonly to create something

Status Code
→ tells the client what happened

JSON
→ structured data commonly exchanged between applications

API
→ interface through which applications communicate
```

The most important overall mental model is:

```text
Client
   ↓
HTTP Request
   ↓
Server / API
   ↓
HTTP Response
   ↓
JSON
   ↓
JavaScript
   ↓
DOM
```

Day 67 was intentionally kept conceptual. The next stage is applying these concepts using `fetch()` and making actual API requests.