# Day 105 — React Forms: Handling Multiple Inputs

## Overview

Day 105 focuses on handling multiple controlled inputs in React using a single state object and a reusable change handler.

The project is a Student Registration Form with three fields: full name, email, and department. A live preview displays the current form data as the user types or changes a selection.

## Learning Objectives

- Manage multiple input fields using React's `useState` Hook.
- Store form data in a single JavaScript object.
- Create controlled text inputs and a controlled select element.
- Understand `event.target.name` and `event.target.value`.
- Use object destructuring to extract event properties.
- Use the spread syntax to preserve existing object properties.
- Use computed property names to update a specific field.
- Create one reusable change handler for multiple inputs.
- Display form data dynamically in JSX.

## Project Setup

This project uses React and Vite.

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

## Project Structure

```text
Day-105-React-Multiple-Inputs/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Main Concepts

### 1. Managing Multiple Fields with One State Object

```jsx
const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "CSE"
});
```

The `formData` object stores all three fields.

- `name` stores the student's name.
- `email` stores the student's email address.
- `department` stores the selected department.
- `setFormData` requests a state update.

### 2. Controlled Inputs

```jsx
<input
    name="name"
    value={formData.name}
    onChange={handleChange}
/>
```

The `value` prop reflects the current state in the input. The `onChange` handler updates the state when the user changes the input.

### 3. Reading Input Information

```jsx
const { name, value } = event.target;
```

This uses object destructuring to extract two properties from the input element.

- `name` identifies the field that changed.
- `value` contains the field's current value.

The same handler can therefore identify different inputs.

### 4. Updating the State Object

```jsx
setFormData(previousData => ({
    ...previousData,
    [name]: value
}));
```

This update has three important parts:

- `previousData` represents the previous state object.
- `...previousData` copies the existing properties.
- `[name]: value` updates the property identified by the input's `name` attribute.

The updater function creates a new object instead of modifying the existing state object directly.

### 5. Live Preview

```jsx
<p>Name: {formData.name || "Not entered"}</p>
<p>Email: {formData.email || "Not entered"}</p>
<p>Department: {formData.department}</p>
```

The live preview displays the current state values. The fallback text appears when the name or email field is empty.

## Implementation

### App.jsx

```jsx
import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "CSE"
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(previousData => ({
            ...previousData,
            [name]: value
        }));
    }

    return (
        <main className="registration">
            <h1>Student Registration</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="student-name">Full Name</label>
                    <input
                        id="student-name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="student-email">Email</label>
                    <input
                        id="student-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="student-department">
                        Department
                    </label>
                    <select
                        id="student-department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    >
                        <option value="CSE">CSE</option>
                        <option value="EEE">EEE</option>
                        <option value="BBA">BBA</option>
                    </select>
                </div>
            </form>

            <section className="preview">
                <h2>Live Preview</h2>
                <p>Name: {formData.name || "Not entered"}</p>
                <p>Email: {formData.email || "Not entered"}</p>
                <p>Department: {formData.department}</p>
            </section>
        </main>
    );
}

export default App;
```

## Styling

### App.css

```css
.registration {
    max-width: 600px;
    margin: 50px auto;
    padding: 32px;
    background-color: #f4f7fb;
    border-radius: 12px;
}

.registration h1 {
    text-align: center;
    margin-bottom: 28px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
}

.form-group input,
.form-group select {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background-color: white;
    font-size: 16px;
}

.form-group input:focus,
.form-group select:focus {
    outline: 2px solid #2563eb;
    border-color: #2563eb;
}

.preview {
    margin-top: 28px;
    padding: 20px;
    background-color: white;
    border: 1px solid #dbe3ef;
    border-radius: 10px;
    overflow-wrap: anywhere;
}

.preview h2 {
    margin-bottom: 14px;
}

.preview p {
    margin: 10px 0;
}
```

## Testing

1. Start the development server using `npm run dev`.
2. Enter a name and verify that the live preview updates.
3. Enter an email address and verify that the name remains unchanged.
4. Change the department selection.
5. Confirm that each field updates independently.
6. Verify that changing one field preserves the values of the other fields.

## Key Takeaways

- Multiple controlled inputs can share one state object.
- The `name` attribute identifies the field being updated.
- `event.target.value` retrieves the current input value.
- Object destructuring makes event data easier to read.
- The spread syntax preserves existing state properties.
- Computed property names allow a reusable handler to update different fields.
- State updates should create a new object rather than mutate the existing one.

## Practice Extensions

- Add a student ID field to the form.
- Add another department option.
- Explain why `...previousData` is necessary.
- Add a separate character counter for the student's name.

## Next Step

Continue learning React forms and state management by building on controlled inputs and reusable event handlers.