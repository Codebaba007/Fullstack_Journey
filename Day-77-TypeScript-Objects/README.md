# Day 77 — TypeScript Objects

## Overview

Day 77 focused on working with **objects in TypeScript** and understanding how TypeScript describes the structure, or **shape**, of an object.

The main goal was to move beyond simple variables and arrays and learn how to make sure an object's properties contain the correct types.

---

## Topics Covered

- Object type inference
- Explicit object type annotations
- Object shapes
- Required properties
- Optional properties
- Optional property syntax `?`
- Nested objects
- Accessing nested object properties
- Type checking inside objects

---

## 1. Object Type Inference

TypeScript can automatically determine the types of an object's properties.

```typescript
const student = {
    name: "Mehedi",
    age: 23,
    cgpa: 3.5
};
```

TypeScript infers:

```text
name → string
age  → number
cgpa → number
```

So we do not always need to explicitly write the types.

---

## 2. Explicit Object Type Annotation

We can explicitly describe the object's structure.

```typescript
const student: {
    name: string;
    age: number;
    cgpa: number;
} = {
    name: "Mehedi",
    age: 23,
    cgpa: 3.5
};
```

The section:

```typescript
{
    name: string;
    age: number;
    cgpa: number;
}
```

describes the **shape** of the object.

It tells TypeScript:

> This object must contain these properties with these types.

---

## 3. Required Properties

Properties without `?` are required.

```typescript
const student: {
    name: string;
    age: number;
    department: string;
} = {
    name: "Mehedi",
    age: 23,
    department: "CSE"
};
```

If we remove `department`:

```typescript
const student: {
    name: string;
    age: number;
    department: string;
} = {
    name: "Mehedi",
    age: 23
};
```

TypeScript reports an error because `department` is required.

---

## 4. Type Checking Object Properties

Each property must contain the correct type.

```typescript
const student: {
    name: string;
    age: number;
    cgpa: number;
} = {
    name: "Mehedi",
    age: 23,
    cgpa: 3.5
};
```

This is incorrect:

```typescript
age: "23"
```

because:

```text
"23" → string
23   → number
```

TypeScript catches the mismatch before the code is considered valid TypeScript.

---

## 5. Optional Properties

Sometimes a property should not be required.

TypeScript uses `?` to mark an optional property.

```typescript
const student: {
    name: string;
    age: number;
    phone?: string;
} = {
    name: "Rahim",
    age: 21
};
```

`phone?: string` means:

```text
phone
  ↓
optional
  ↓
if provided → must be a string
```

Both of these are valid:

```typescript
const student1: {
    name: string;
    age: number;
    phone?: string;
} = {
    name: "Rahim",
    age: 21
};
```

```typescript
const student2: {
    name: string;
    age: number;
    phone?: string;
} = {
    name: "Nusrat",
    age: 22,
    phone: "01700000000"
};
```

---

## 6. Required vs Optional

### Required

```typescript
phone: string;
```

The property must exist.

### Optional

```typescript
phone?: string;
```

The property may exist.

```text
Required
    ↓
MUST exist

Optional
    ↓
MAY exist
```

---

## 7. Nested Objects

Objects can contain other objects.

```typescript
const student: {
    name: string;
    age: number;
    department: string;
    address: {
        city: string;
        country: string;
    };
} = {
    name: "Mehedi",
    age: 23,
    department: "CSE",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
```

The structure can be visualized as:

```text
student
│
├── name → string
├── age → number
├── department → string
│
└── address
    │
    ├── city → string
    └── country → string
```

---

## 8. Accessing Nested Properties

Normal object properties:

```typescript
console.log(student.name);
```

Nested properties:

```typescript
console.log(student.address.city);
```

Another nested property:

```typescript
console.log(student.address.country);
```

The `.` operator allows us to move deeper into the object.

---

## 9. Complete Practice Object

The final Day 77 practice combined the concepts together.

```typescript
const student: {
    name: string;
    age: number;
    department: string;
    cgpa: number;
    phone?: string;
    address: {
        city: string;
        country: string;
    };
} = {
    name: "Mehedi",
    age: 23,
    department: "CSE",
    cgpa: 3.5,
    phone: "01700000000",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
```

This object contains:

```text
name       → required string
age        → required number
department → required string
cgpa       → required number
phone      → optional string
address    → required object
    city   → required string
    country → required string
```

---

## 10. Key Syntax to Remember

### Object annotation

```typescript
const object: {
    property: type;
} = {
    property: value
};
```

### Optional property

```typescript
property?: type;
```

### Nested object

```typescript
const object: {
    property: {
        nestedProperty: type;
    };
} = {
    property: {
        nestedProperty: value
    }
};
```

---

## What I Learned

By the end of Day 77, I learned how TypeScript can describe the structure of objects and verify that their properties contain the expected types.

I learned:

- TypeScript can infer object property types automatically.
- Object types can be written explicitly.
- An object's type describes its shape.
- Properties are required by default.
- `?` makes a property optional.
- Optional properties can still have a required type when they are provided.
- Objects can contain other objects.
- Nested properties can be accessed using the `.` operator.
- TypeScript catches incorrect property types and missing required properties.

---

## Practice Checklist

- [x] Create a basic TypeScript object
- [x] Understand object type inference
- [x] Write an explicit object type
- [x] Understand required properties
- [x] Test an incorrect property type
- [x] Understand optional properties
- [x] Use `?` for optional properties
- [x] Create a nested object
- [x] Access nested properties
- [x] Create a complete typed student object

---

## Day 77 Summary

```text
TypeScript Objects
        │
        ├── Type Inference
        │
        ├── Explicit Object Types
        │
        ├── Object Shape
        │
        ├── Required Properties
        │
        ├── Optional Properties (?)
        │
        └── Nested Objects
```

Day 77 completed the foundation of working with typed objects in TypeScript.