# Day 87 — TypeScript Utility Types

## Overview

Today, I learned about **TypeScript Utility Types**.

Utility types allow me to create modified versions of existing types without having to rewrite the entire type.

The utility types covered today were:

- `Partial`
- `Pick`
- `Omit`
- `Readonly`

The main idea is:

```text
Existing Type
      ↓
Utility Type
      ↓
Modified Type
```

---

## 1. Base Student Interface

All of today's examples were based on this interface:

```ts
interface Student {
    id: number;
    name: string;
    cgpa: number;
    department: string;
}
```

The `Student` interface contains four required properties:

- `id`
- `name`
- `cgpa`
- `department`

---

# 2. Partial<T>

`Partial<T>` makes all properties of a type optional.

Original:

```ts
interface Student {
    id: number;
    name: string;
    cgpa: number;
    department: string;
}
```

Using:

```ts
type StudentUpdate = Partial<Student>;
```

Conceptually creates:

```ts
{
    id?: number;
    name?: string;
    cgpa?: number;
    department?: string;
}
```

The `?` means the property is optional.

This is useful when updating an object where we only want to change some properties.

Example:

```ts
type StudentUpdate = Partial<Student>;

let studentUpdate: StudentUpdate = {
    cgpa: 3.90
};

console.log("Student Update:", studentUpdate);
```

We don't need to provide the other properties.

We can also update multiple properties:

```ts
let multipleUpdates: StudentUpdate = {
    name: "Mehedi",
    cgpa: 3.90
};
```

### Key Idea

```text
Partial → Make all properties optional
```

---

# 3. Pick<T, K>

`Pick<T, K>` allows us to select specific properties from an existing type.

For example:

```ts
type StudentBasicInfo = Pick<Student, "id" | "name">;
```

This takes only `id` and `name` from `Student`.

Conceptually:

```text
Student
├── id
├── name
├── cgpa
└── department

        ↓ Pick

StudentBasicInfo
├── id
└── name
```

Example:

```ts
type StudentBasicInfo = Pick<Student, "id" | "name">;

let basicInfo: StudentBasicInfo = {
    id: 101,
    name: "Mehedi"
};

console.log("Basic Info:", basicInfo);
```

Properties that were not picked, such as `cgpa` and `department`, cannot be included as part of the expected type.

### Key Idea

```text
Pick → Keep only the properties I choose
```

---

# 4. Omit<T, K>

`Omit<T, K>` does almost the opposite of `Pick`.

Instead of selecting the properties we want to keep, we specify the properties we want to remove.

Example:

```ts
type StudentWithoutCGPA = Omit<Student, "cgpa">;
```

Conceptually:

```text
Student
├── id
├── name
├── cgpa       ← removed
└── department

        ↓ Omit

StudentWithoutCGPA
├── id
├── name
└── department
```

Example:

```ts
type StudentWithoutCGPA = Omit<Student, "cgpa">;

let studentWithoutCGPA: StudentWithoutCGPA = {
    id: 101,
    name: "Mehedi",
    department: "CSE"
};

console.log("Student Without CGPA:", studentWithoutCGPA);
```

The `cgpa` property is no longer part of `StudentWithoutCGPA`.

### Key Idea

```text
Omit → Keep everything except the properties I remove
```

---

# 5. Readonly<T>

`Readonly<T>` makes the properties of a type readonly.

Example:

```ts
let student: Readonly<Student> = {
    id: 101,
    name: "Mehedi",
    cgpa: 3.75,
    department: "CSE"
};
```

Conceptually:

```text
Readonly<Student>

readonly id
readonly name
readonly cgpa
readonly department
```

This means the properties should not be changed after the object is created.

For example:

```ts
student.cgpa = 3.90;
```

TypeScript reports an error because `cgpa` is readonly.

### Key Idea

```text
Readonly → Prevent properties from being modified
```

---

# 6. Complete Example

```ts
export {};

interface Student {
    id: number;
    name: string;
    cgpa: number;
    department: string;
}


// -------------------------
// 1. Partial
// -------------------------

type StudentUpdate = Partial<Student>;

let studentUpdate: StudentUpdate = {
    cgpa: 3.90
};

console.log("Student Update:", studentUpdate);


// -------------------------
// 2. Pick
// -------------------------

type StudentBasicInfo = Pick<Student, "id" | "name">;

let basicInfo: StudentBasicInfo = {
    id: 101,
    name: "Mehedi"
};

console.log("Basic Info:", basicInfo);


// -------------------------
// 3. Omit
// -------------------------

type StudentWithoutCGPA = Omit<Student, "cgpa">;

let studentWithoutCGPA: StudentWithoutCGPA = {
    id: 101,
    name: "Mehedi",
    department: "CSE"
};

console.log("Student Without CGPA:", studentWithoutCGPA);


// -------------------------
// 4. Readonly
// -------------------------

let student: Readonly<Student> = {
    id: 101,
    name: "Mehedi",
    cgpa: 3.75,
    department: "CSE"
};

console.log("Read Only Student:", student);
```

---

# 7. Utility Types Comparison

| Utility Type | Purpose |
|---|---|
| `Partial<T>` | Makes all properties optional |
| `Pick<T, K>` | Keeps selected properties |
| `Omit<T, K>` | Removes selected properties |
| `Readonly<T>` | Prevents properties from being modified |

### Easy way to remember

```text
Partial  → Make everything optional
Pick     → Keep what I PICK
Omit     → Remove what I don't want
Readonly → Don't let me modify it
```

---

# Key Takeaways

- Utility types modify existing TypeScript types.
- They reduce the need to rewrite similar interfaces and types.
- `Partial` makes properties optional.
- `Pick` selects specific properties.
- `Omit` removes specific properties.
- `Readonly` prevents properties from being reassigned.
- Utility types are especially useful when working with existing data models.
- The original type remains unchanged when creating a utility type from it.

---

## Day 87 Completion

**Topic:** TypeScript Utility Types

**Status:** Completed

**Utility Types Covered:**
- `Partial`
- `Pick`
- `Omit`
- `Readonly`

**Next:** Practical TypeScript Review