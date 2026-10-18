export{};

interface Student{
    name: string;
    roll: number;
    cgpa: number;
    department: string;
}

enum StudentStatus{
    ACTIVE = "Active",
    INACTIVE = "Inactive",
    GRADUATED = "Graduated",
}
type StudentRecord = Student & {
    status: StudentStatus;
};
let Student: StudentRecord = {
    roll: 101,
    name: "Mehedi",
    cgpa: 3.75,
    department: "CSE",
    status: StudentStatus.ACTIVE
};
interface ApiResponse<T> {
    data: T;
    success: boolean;
}
let response: ApiResponse<StudentRecord> = {
    data: Student,
    success: true
};
function displayResponse<T>(response: ApiResponse<T>): void {
    console.log("Success:", response.success);
    console.log("Data:", response.data);
}
displayResponse(response);
function displayStudentId(id: number | string): void {
    if (typeof id === "number") {
        console.log("Numeric ID:", id);
    } else {
        console.log("String ID:", id);
    }
}
displayStudentId(101);
displayStudentId("CSE-101");