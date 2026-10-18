/*
const title = document.getElementById("title");
const message = document.getElementById("message");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
    title.textContent = "Student Management System";
    message.textContent = "Dashboard updated successfully.";
});
const updateButton = document.getElementById("updateButton");
const dashboardTitle = document.getElementById("dashboardTitle");
const name = document.getElementById("name");
const cgpa = document.getElementById("cgpa");

updateButton.addEventListener("click", () => {
    dashboardTitle.textContent = "Updated Student Dashboard";
    name.textContent = "Name: Karim Khan";
    cgpa.textContent = "Cgpa: 3.85";
});*/
const students = [
    {
        name: "Rahim Ahmed",
        cgpa: 3.75,
        department: "Computer Science"
    },
    {
        name: "Nusrat Jahan",
        cgpa: 3.88,
        department: "Software Engineering"
    },
    {
        name: "Tanvir Hasan",
        cgpa: 3.62,
        department: "Computer Science"
    }
];
const studentContainer = document.getElementById("studentContainer");

students.forEach((student) => {

    const studentCard = document.createElement("div");

    studentCard.classList.add("student-card");

    const studentName = document.createElement("h2");
    studentName.textContent = student.name;

    const studentCgpa = document.createElement("p");
    studentCgpa.textContent = `CGPA: ${student.cgpa}`;

    const studentDepartment = document.createElement("p");
    studentDepartment.textContent = `Department: ${student.department}`;

    studentCard.appendChild(studentName);
    studentCard.appendChild(studentCgpa);
    studentCard.appendChild(studentDepartment);
    studentCard.addEventListener("click", () => {

        console.log(student.name);

        studentCard.classList.add("selected");

        studentName.textContent = `Selected: ${student.name}`;
    });

    // Add the card to the container
    studentContainer.appendChild(studentCard);
});