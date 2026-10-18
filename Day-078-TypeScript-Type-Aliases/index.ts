export {}

type Student = {
    name: string;
    age: number;
    cgpa: number;
};

const student1: Student = {
    name: "Mehedi",
    age: 23,
    cgpa: 3.5
};

const student2: Student = {
    name: "Rahim",
    age: 22,
    cgpa: 3.7
};
type Student2 = {
    name: string;
    age: number;
    cgpa: number;
};

const Student3: Student2[] = [
    {
        name: "Mehedi",
        age: 23,
        cgpa: 3.5
    },
    {
        name: "Rahim",
        age: 22,
        cgpa: 3.7
    }
];
console.log(student1);
console.log(student2);
console.log(Student3);