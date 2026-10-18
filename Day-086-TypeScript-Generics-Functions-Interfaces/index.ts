export{};

function createPair<T>(value1: T, value2: T): T[] {
    return [value1, value2];
}

let numbers = createPair(10, 20);

let names = createPair("Mehedi", "Rahim");

console.log(numbers);
console.log(names);

function createPair2<T, U>(value1: T, value2: U): [T, U] {
    return [value1, value2];
}
let result = createPair2(10, "Mehedi");
console.log(result);

interface Student {
    id: number;
    name: string;
    cgpa: number;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
}

let studentResponse: ApiResponse<Student> = {
    data: {
        id: 101,
        name: "Mehedi",
        cgpa: 3.75
    },
    success: true
};

function displayResponse<T>(response: ApiResponse<T>): void {
    console.log("Data:", response.data);
    console.log("Success:", response.success);
}

displayResponse(studentResponse);