function getStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Rahim");
        }, 2000);

    });

}
function getCourse() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("JavaScript");
        }, 2000);

    });

}

function getAttendance() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("92%");
        }, 2000);

    });

}

async function loadData() {

    try {

        const results = await Promise.all([
            getStudent(),
            getCourse(),
            getAttendance()
        ]);

        console.log(results);

    } catch (error) {

        console.log("Something went wrong");

    }

}
loadData();