# Day 128: React Context API

## Overview

This lesson introduces prop drilling and explains why React Context API is useful for sharing data across multiple components.

## What I Learned

### 1. Prop Drilling

Prop drilling happens when data is passed through multiple intermediate components to reach a deeply nested component that actually needs it.

### 2. Component Data Flow

Implemented a component hierarchy:

```text
App
 └── Dashboard
      └── UserPanel
           └── UserProfile
                └── UserName
```

The `App` component stores the username and passes it through intermediate components until `UserName` uses it.

### 3. Understanding the Problem

- `App` stores the username.
- `Dashboard` forwards the username.
- `UserPanel` forwards the username.
- `UserProfile` forwards the username.
- `UserName` displays the username.

This demonstrates how prop drilling creates unnecessary prop forwarding.

## Key Takeaways

- Props allow parent components to pass data to child components.
- Prop drilling can make larger component trees harder to maintain.
- React Context API provides another way to share data across descendant components.
- Props remain useful for normal component communication.

## Current Progress

**Status:** In progress

**Next:** Implement React Context API using `createContext`, a Provider, and `useContext`.