/*getuser()
    .then((user) => {
        return getCourses(user.id)
    })
    .then((courses) => {
        return getCourseDeatails(courses);
    })
    .then((details) => {
        console.log(details);
    })
    .catch((error) => {
        console.log(error.message);
    });*/

async function hello() {
    return "Hello";
}

console.log(hello());
function getNumber() {
    return Promise.resolve(10);
}

async function calculate() {

    const result = await getNumber();

    console.log(result);

}

calculate();
function getStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Rahim Ahmed");

        }, 2000);

    });

}
async function showStudent() {

    const student = await getStudent();

    console.log(student);

}

showStudent();
function loadStudent() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve({
                name: "Rahim Ahmed",
                cgpa: 3.75
            });

        }, 2000);

    });

}