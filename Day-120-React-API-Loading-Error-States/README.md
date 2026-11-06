# Day 120 - React API Loading and Error States

## Overview

Today I learned how to manage loading, success, and error states when fetching API data in React.

I combined JavaScript asynchronous programming and error handling with React state management and conditional rendering.

## Concepts Covered

- Managing multiple state variables with `useState`.
- Understanding loading states.
- Understanding error states.
- Fetching API data inside `useEffect`.
- Using `async/await` with Fetch API.
- Handling errors using `try...catch`.
- Using `finally` to finish loading regardless of success or failure.
- Checking HTTP responses using `response.ok`.
- Throwing errors using `throw new Error()`.
- Conditional rendering using ternary operators.

## API Used

**JSONPlaceholder**

Endpoint:

https://jsonplaceholder.typicode.com/users

## Practical Implementation

Built a React User Dashboard featuring:

- Fetching users from an external API.
- Loading message while fetching data.
- Error message when an API request fails.
- Displaying user information after successful fetching.
- Dynamic user cards using `.map()`.
- HTTP response validation.
- CSS styling for the dashboard.

## Important Code Example

```jsx
try {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();

  setUsers(data);

} catch (error) {
  setError(error.message);

} finally {
  setLoading(false);
}
```

## Key Takeaways

- Loading state indicates that an API request is in progress.
- Error state stores information about a failed request.
- `response.ok` checks whether the HTTP response indicates success.
- Fetch does not automatically throw errors for HTTP 404 or 500 responses.
- `try...catch` handles errors during asynchronous operations.
- `finally` executes after the try or catch block.
- Conditional rendering displays the appropriate UI for each request state.

## Status

Completed