# Day 71 — Loading, Success & Error UI States

## 📌 Overview

Today I learned how to connect API requests with the webpage UI.

Instead of only printing API results and errors in the console, I learned how to show different states directly on the webpage:

- Loading
- Success
- Error

This created a basic real-world API user interface.

## 🎯 Learning Objectives

- Connect API requests with the DOM
- Display a loading message while data is being requested
- Display a success message when data is received
- Display an error message when the request fails
- Dynamically create HTML elements from API data
- Use `document.querySelector()`
- Use `document.createElement()`
- Use `textContent`
- Use `appendChild()`
- Combine `fetch()`, `async/await`, `try/catch`, and DOM manipulation

## 📁 Project Structure

```text
Day71-Loading-Success-&-Error-UI-States/
│
├── index.html
└── script.js
```

## 🌐 HTML Structure

The page contains:

```html
<h1>User Dashboard</h1>

<p id="status">Loading...</p>

<div id="users"></div>
```

The `status` element is used to display the current API state.

The `users` container is used to display the API data.

## 💻 JavaScript

First, I selected the required DOM elements:

```javascript
const statusText = document.querySelector("#status");
const usersContainer = document.querySelector("#users");
```

Then I set the initial state:

```javascript
statusText.textContent = "Loading...";
```

## 🔄 API Request

The users were retrieved using `fetch()`:

```javascript
const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
);
```

The response was checked before processing the data:

```javascript
if (!response.ok) {
    throw new Error("Failed to fetch users");
}
```

Then the response was converted into JavaScript data:

```javascript
const users = await response.json();
```

## 🟢 Success State

After successfully receiving the users:

```javascript
statusText.textContent = "Users loaded successfully!";
```

The users were then displayed dynamically:

```javascript
users.forEach((user) => {

    const userElement = document.createElement("p");

    userElement.textContent = `${user.name} - ${user.email}`;

    usersContainer.appendChild(userElement);

});
```

## 🔴 Error State

If the API request failed:

```javascript
catch (error) {

    statusText.textContent = "Failed to load users.";

    console.log(error);

}
```

This prevents the page from remaining stuck on the loading state.

## 🔄 Three-State API Flow

The main concept of Day 71 was:

```text
Page loads
    ↓
Loading...
    ↓
API request
    ↓
Response
    ↓
 ┌───────────────┐
 │               │
 ▼               ▼
Success         Error
 │               │
 ▼               ▼
Show users      Show error
```

## 🧠 Complete Code

```javascript
const statusText = document.querySelector("#status");
const usersContainer = document.querySelector("#users");

statusText.textContent = "Loading...";


async function fetchUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        statusText.textContent = "Users loaded successfully!";


        users.forEach((user) => {

            const userElement = document.createElement("p");

            userElement.textContent = `${user.name} - ${user.email}`;

            usersContainer.appendChild(userElement);

        });


    } catch (error) {

        statusText.textContent = "Failed to load users.";

        console.log(error);

    }

}


fetchUsers();
```

## 🧪 Error Testing

I tested the error state by intentionally changing the API URL.

Working:

```text
https://jsonplaceholder.typicode.com/users
```

Incorrect:

```text
https://jsonplaceholder.typicode.com/users123
```

The incorrect endpoint produces a failed HTTP response, allowing the error state to be displayed.

After testing, the correct URL was restored.

## ⚠️ Important Development Environment Lesson

This project uses browser APIs such as:

```javascript
document.querySelector()
document.createElement()
```

Therefore, the JavaScript should be run through the browser using the HTML page and Live Server.

Running:

```bash
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

## 🧠 Key Takeaways

### Loading

```javascript
statusText.textContent = "Loading...";
```

### Success

```javascript
statusText.textContent = "Users loaded successfully!";
```

### Error

```javascript
statusText.textContent = "Failed to load users.";
```

### Select DOM element

```javascript
document.querySelector()
```

### Create DOM element

```javascript
document.createElement()
```

### Change element content

```javascript
element.textContent = ...
```

### Add element to the page

```javascript
parent.appendChild(element)
```

## 📚 Main Takeaway

Day 71 connected the API concepts from the previous days with the DOM.

Instead of:

```text
API
 ↓
console.log()
```

I can now build:

```text
API
 ↓
JavaScript
 ↓
DOM
 ↓
Webpage UI
```

The core real-world pattern is:

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

This same loading/success/error pattern will be important when I start working with React and larger applications.