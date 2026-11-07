# Day 121 - React API Retry Functionality

## Overview

Today I learned how to implement API retry functionality in React.

The main focus was creating a reusable API-fetching function that can be called both when a component initially mounts and when a user clicks a Retry button.

## Concepts Covered

- Reusing API-fetching functions.
- Moving asynchronous functions outside the `useEffect` callback.
- Passing React state setter functions as arguments.
- Triggering API requests through button clicks.
- Resetting loading state before retrying.
- Clearing previous error messages.
- Handling successful and failed API requests.
- Reusing the same function for initial fetching and retry operations.

## API Used

**JSONPlaceholder**

Endpoint:

https://jsonplaceholder.typicode.com/users

## Practical Implementation

Built a React User Dashboard featuring:

- Fetching users from an external API.
- Loading indicator during API requests.
- Error message when a request fails.
- Retry button after a failed request.
- Successful data rendering after retrying.
- Reusable `fetchUsers()` function.
- Dynamic user cards using `.map()`.

## Important Code Example

```jsx
async function fetchUsers(setUsers, setLoading, setError) {
  setLoading(true);
  setError("");

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
}
```

## Key Takeaways

- Reusable functions prevent duplicated API-fetching logic.
- State setter functions can be passed as function arguments.
- The same API function can be called from `useEffect` and event handlers.
- Retry functionality allows users to repeat failed requests without refreshing the page.
- Previous error messages should be cleared before retrying.
- Loading state should be updated for every request attempt.

## Status

Completed