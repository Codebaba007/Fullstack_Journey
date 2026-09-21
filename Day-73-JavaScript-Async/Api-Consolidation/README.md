# Day 73 — JavaScript Async & API Consolidation

## 📌 Overview

Day 73 was the final dedicated JavaScript day of this learning phase.

Instead of introducing a completely new JavaScript concept, I consolidated the asynchronous JavaScript, API, and DOM concepts learned throughout the previous days.

The goal was to understand how the individual concepts connect together to build a complete API-powered webpage.

## 🎯 Learning Objectives

- Consolidate asynchronous JavaScript concepts
- Review `async` and `await`
- Review Promises and `fetch()`
- Review HTTP requests and responses
- Review JSON handling
- Review `response.ok`
- Review error handling with `try...catch`
- Review loading, success, and error UI states
- Review DOM manipulation with API data
- Practice filtering API data
- Separate data fetching from UI rendering
- Build a small API-powered user directory

## 🧠 Core API Flow

The main pattern consolidated today was:

```text
User interaction
      ↓
JavaScript function
      ↓
API request
      ↓
await
      ↓
Response
      ↓
Check response.ok
      ↓
response.json()
      ↓
JavaScript data
      ↓
Process data
      ↓
Update DOM
      ↓
Webpage UI
```

## 🔄 Async JavaScript Review

### `async`

An `async` function works with asynchronous operations and allows the use of `await`.

```javascript
async function fetchUsers() {
    // asynchronous code
}
```

### `await`

`await` waits for the result of a Promise before continuing the function.

```javascript
const response = await fetch(url);
```

### `fetch()`

`fetch()` makes an HTTP request and returns a Promise.

```javascript
const response = await fetch(url);
```

### `response.json()`

`response.json()` reads the response body and converts JSON into JavaScript data.

```javascript
const data = await response.json();
```

## 🧠 Async Mental Model

```text
fetch()
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
```

## 🌐 API Request Pattern

A typical API request follows this structure:

```javascript
try {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

    // Use the data

} catch (error) {

    console.log(error);

}
```

This combines:

- `fetch()`
- Promises
- `async`
- `await`
- HTTP responses
- `response.ok`
- JSON
- Error handling

## 🔴 Error Handling

The API request is placed inside `try...catch`.

```javascript
try {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Request failed");
    }

} catch (error) {

    console.log(error);

}
```

The basic flow is:

```text
fetch()
   ↓
Response
   ↓
response.ok?
   ↓
 ┌───────────────┐
 ↓               ↓
true            false
 ↓               ↓
JSON            Error
 ↓               ↓
Data            catch
```

## 🖥️ API + DOM

The API data can be connected to the webpage using DOM manipulation.

For example:

```javascript
const element = document.createElement("p");

element.textContent = user.name;

usersContainer.appendChild(element);
```

This creates the flow:

```text
API
 ↓
JSON
 ↓
JavaScript
 ↓
DOM
 ↓
Webpage
```

## 🔄 Loading / Success / Error States

A real API-powered webpage should communicate its current state to the user.

### Loading

```javascript
statusText.textContent = "Loading users...";
```

### Success

```javascript
statusText.textContent = "Users loaded successfully!";
```

### Error

```javascript
statusText.textContent = "Failed to load users.";
```

The overall pattern is:

```text
LOADING
   ↓
API REQUEST
   ↓
 ┌───────────┐
 ↓           ↓
SUCCESS     ERROR
 ↓           ↓
DATA UI     ERROR UI
```

## 🔎 Filtering API Data

The API returns an array of users.

The downloaded data can be filtered locally using `filter()`.

Example:

```javascript
const filteredUsers = users.filter((user) => {

    return user.name
        .toLowerCase()
        .includes(searchTerm);

});
```

The important idea is that searching does **not** require another API request.

Instead:

```text
API request
     ↓
Users stored in JavaScript
     ↓
User searches
     ↓
filter()
     ↓
Filtered users
     ↓
Update UI
```

## 🧩 Separation of Responsibilities

The application was organized into separate responsibilities.

### `fetchUsers()`

Responsible for getting data from the API.

```javascript
async function fetchUsers() {
    // API request
}
```

### `displayUsers()`

Responsible for displaying data on the webpage.

```javascript
function displayUsers(usersToDisplay) {
    // Create and display user cards
}
```

### Search

Responsible for filtering the already-downloaded users.

```text
Search input
     ↓
filter()
     ↓
displayUsers()
```

This separation makes the code easier to understand and reuse.

## 💻 Consolidation Project

The final project was a User Directory.

It contains:

- User Directory heading
- Search input
- Loading state
- API request
- Error handling
- User cards
- Name
- Email
- Phone
- Website
- Search functionality

The API used for practice was:

```text
https://jsonplaceholder.typicode.com/users
```

## 📁 Project Structure

```text
Day-73-JavaScript-Async/
│
└── Api-Consolidation/
    │
    ├── index.html
    ├── script.js
    └── README.md
```

## 🧪 Error Testing

The API URL was intentionally changed from:

```text
https://jsonplaceholder.typicode.com/users
```

to an invalid endpoint such as:

```text
https://jsonplaceholder.typicode.com/users123
```

This was used to verify that the error state worked correctly.

After testing, the correct API URL was restored.

## ⚠️ Development Environment Lesson

This project uses browser APIs such as:

```javascript
document.querySelector()
document.createElement()
```

Therefore, it should be run through the browser using the HTML page and Live Server.

Running:

```text
node script.js
```

does not work for this project because Node.js does not provide the browser's `document` object.

The correct flow is:

```text
index.html
    ↓
Browser
    ↓
script.js
    ↓
DOM APIs available
```

## 🔗 Script File Path

The HTML and JavaScript files must be connected correctly.

If both files are in the same folder:

```html
<script src="script.js"></script>
```

If `script.js` is inside another folder, the correct relative path must be used.

An incorrect script path means the HTML can load while the JavaScript never executes.

## 📚 JavaScript Learning Progression

The JavaScript phase progressed through:

```text
JavaScript fundamentals
        ↓
Functions
        ↓
Arrays
        ↓
Array methods
        ↓
DOM
        ↓
Events
        ↓
Async JavaScript
        ↓
Promises
        ↓
async / await
        ↓
HTTP
        ↓
JSON
        ↓
GET requests
        ↓
POST requests
        ↓
API response handling
        ↓
Error handling
        ↓
Loading / Success / Error UI
        ↓
Mini API project
        ↓
Async/API consolidation
```

## 🔔 API Integration Will Be Revisited

API integration is not considered permanently finished after JavaScript.

When reaching other technologies, the JavaScript API concepts will be reviewed and compared with the new environment.

Planned examples include:

```text
JavaScript
    ↓
React
    ↓
Next.js
    ↓
Node.js / Express
    ↓
Python / FastAPI
```

The underlying HTTP and API concepts remain important, while the implementation and patterns can differ between technologies.

## 🏁 End of Dedicated JavaScript Phase

Day 73 marks the end of the dedicated JavaScript section of this learning roadmap.

The next major stage is:

```text
JavaScript
    ↓
TypeScript
    ↓
React
    ↓
Next.js
    ↓
Backend
    ↓
Databases
    ↓
Testing / SDET
    ↓
Linux / Networking
    ↓
Docker
    ↓
CI/CD
    ↓
AWS / DevOps
    ↓
Full-Stack Projects
```

## 🧠 Main Takeaway

The most important lesson from this phase is not memorizing individual JavaScript methods.

It is understanding how the pieces work together:

```text
JavaScript
    +
DOM
    +
Async Programming
    +
HTTP
    +
APIs
    +
JSON
    +
Error Handling
    ↓
Interactive Web Applications
```

This provides the JavaScript foundation needed for the next stage of the learning journey.