/*

const myPromise = Promise.resolve(10);

myPromise
          .then((result)=>{
            return result *2;
          })
          .then((result)=>{
            return result + 5;
          })
          .then((result)=>{
            console.log(result);
          });*/

const studentPromise = Promise.resolve({
    name: "Rahim Ahmed",
    cgpa: 3.75
});

studentPromise
    .then((student) => {
        return student.cgpa;
    })
    .then((cgpa) => {
        return cgpa >= 3.00;
    })
    .then((eligible) => {
        console.log(eligible);
    });

const firstPromise = Promise.resolve("First");

firstPromise
    .then((result) => {

        console.log(result);

        return Promise.resolve("Second");

    })
    .then((result) => {

        console.log(result);

    })
    .then(() => {
        console.log("This won't run");
    })
    .catch((error) => {
        console.log(error.message);
    });