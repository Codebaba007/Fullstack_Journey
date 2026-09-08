
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
});