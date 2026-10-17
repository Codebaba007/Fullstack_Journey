# Day 100 — React Event Handling

## Overview

Day 100 introduces event handling in React. The goal is to make UI elements respond to user interactions by connecting event handlers to JSX elements.

## Learning Objectives

- Understand what event handling means in React.
- Use the `onClick` event to respond to button clicks.
- Define named event handler functions inside a component.
- Connect event handlers to JSX elements.
- Understand the difference between passing a function and calling it immediately.
- Handle multiple buttons with separate event handlers.
- Understand how event handlers make React interfaces interactive.

## Project Setup

This project was created using Vite and React.

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

## Project Structure

```text
Day-100-React-Event-Handling/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Main Concepts

### 1. Event Handling

Event handling allows an application to respond to user actions, such as clicking a button.

React supports event props such as `onClick`. The event prop receives a function that React calls when the relevant interaction occurs.

### 2. Event Handler Functions

An event handler is a function that runs in response to an event.

Example:

```jsx
function handleWelcomeClick() {
    console.log("Welcome to the Student Dashboard!");
}
```

The function contains the instructions that should execute when the user clicks the button.

### 3. Connecting an Event Handler

```jsx
<button onClick={handleWelcomeClick}>
    Welcome
</button>
```

React receives the function reference and runs the function when the button is clicked.

The function is passed without parentheses.

Correct:

```jsx
<button onClick={handleWelcomeClick}>
    Welcome
</button>
```

Incorrect for this purpose:

```jsx
<button onClick={handleWelcomeClick()}>
    Welcome
</button>
```

The second example calls the function during rendering instead of waiting for the click.

### 4. Multiple Event Handlers

Different buttons can use different event handler functions.

```jsx
function handleWelcomeClick() {
    console.log("Welcome to the Student Dashboard!");
}

function handleHelpClick() {
    console.log("Help button was clicked!");
}
```

Each button can trigger its corresponding function.

## Implementation

The project contains a simple Student Dashboard with two buttons:

- **Welcome:** Logs a welcome message in the browser console.
- **Help:** Logs a help message in the browser console.

### App.jsx

```jsx
import "./App.css";

function App() {
    function handleWelcomeClick() {
        console.log("Welcome to the Student Dashboard!");
    }

    function handleHelpClick() {
        console.log("Help button was clicked!");
    }

    return (
        <main className="dashboard">
            <h1>Student Dashboard</h1>

            <p>Click a button to trigger its event handler.</p>

            <button onClick={handleWelcomeClick}>
                Welcome
            </button>

            <button onClick={handleHelpClick}>
                Help
            </button>
        </main>
    );
}

export default App;
```

## Testing

1. Start the development server using `npm run dev`.
2. Open the local URL provided by Vite.
3. Open the browser developer tools.
4. Select the Console tab.
5. Click the Welcome button and verify the welcome message.
6. Click the Help button and verify the help message.
7. Confirm that each button triggers the correct handler.

## Key Takeaways

- React event props connect UI elements to event handler functions.
- `onClick` handles click interactions.
- Named functions help keep event logic readable.
- Multiple buttons can trigger different handlers.
- Passing a function is different from calling a function.
- Event handling is a foundation for building interactive React applications.

## Next Step

The next lesson introduces React state with `useState`, which allows a component to remember changing information and update the displayed UI in response to user interactions.