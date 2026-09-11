/*st myPromise = new Promise((resolve, reject)=>{
    resolve("Success");
});
myPromise.then((result) => {
    console.log(result);
});
const myPromise2 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("Data Recived");

    },2000);
});
myPromise2.then((result) => {
    console.log(result);
});
const myPromise3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received");
    }, 2000);

});

console.log("Waiting...");

myPromise3.then((result) => {
    console.log(result);
});

console.log("Finished starting program");*/
const loginPromise = new Promise((resolve, reject) => {
    console.log("Checking login credentials...");
    const loginSuccessful = false;

   setTimeout(() => {

    if (loginSuccessful) {
        resolve("Login Successful");
    } else {
        reject("Login Failed");
    }

}, 2000);
});
loginPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});