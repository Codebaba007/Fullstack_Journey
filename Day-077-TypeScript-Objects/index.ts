export {}; // This line is used to indicate that this file is a module
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

console.log(student.name);
console.log(student.address.city);
console.log(student.address.country);