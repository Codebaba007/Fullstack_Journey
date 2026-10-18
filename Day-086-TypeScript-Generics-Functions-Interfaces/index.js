function createPair(value1, value2) {
    return [value1, value2];
}
let numbers = createPair(10, 20);
let names = createPair("Mehedi", "Rahim");
console.log(numbers);
console.log(names);
function createPair2(value1, value2) {
    return [value1, value2];
}
let result = createPair2(10, "Mehedi");
console.log(result);
let studentResponse = {
    data: {
        id: 101,
        name: "Mehedi",
        cgpa: 3.75
    },
    success: true
};
function displayResponse(response) {
    console.log("Data:", response.data);
    console.log("Success:", response.success);
}
displayResponse(studentResponse);
export {};
