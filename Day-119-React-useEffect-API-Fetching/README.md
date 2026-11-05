# Day 119 - React useEffect with API Fetching

## Overview

Today I learned how to fetch external API data inside React using the `useEffect` Hook.

I combined my previous JavaScript knowledge of Fetch API, async/await, JSON handling, and array mapping with React state management.

## Concepts Covered

- Fetching API data inside `useEffect`.
- Understanding why API requests should not run directly during component rendering.
- Using asynchronous functions inside `useEffect`.
- Using `fetch()` to send API requests.
- Using `await` to wait for API responses.
- Converting API responses using `response.json()`.
- Storing fetched data using `useState`.
- Displaying API data using `.map()`.
- Using unique keys when rendering lists.

## API Used

**JSONPlaceholder**

Endpoint:

https://jsonplaceholder.typicode.com/users

A free testing API that provides sample user information.

## Practical Implementation

Built a React User Dashboard featuring:

- Fetching users from an external API.
- Managing API response data using React state.
- Displaying user names.
- Displaying email addresses.
- Displaying usernames.
- Rendering user cards dynamically using `.map()`.
- Styling the dashboard using CSS.

## Important Code Example

```jsx
useEffect(() => {
  async function fetchUsers() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsers(data);
  }

  fetchUsers();
}, []);
```

## Key Takeaways

- `useEffect` allows API requests to run after a component mounts.
- Async functions can be defined inside the effect.
- The effect callback itself should not be declared `async`.
- `fetch()` retrieves data from an external API.
- `response.json()` asynchronously parses the response body.
- `setUsers()` stores the retrieved data in React state.
- State updates trigger React to render the updated UI.
- `.map()` can dynamically display API data.

## Status

Completed