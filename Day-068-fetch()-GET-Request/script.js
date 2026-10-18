/*fetch("https://jsonplaceholder.typicode.com/users");

async function getusers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);

    const data = await response.json();
    console.log(data);

}
getusers();
*/
async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const users = await response.json();
        
        console.log(users);

        users.forEach((user) => {
            console.log(user.name);
            console.log(user.email);
        });

    } catch (error) {

        console.log(error);

    }

}
getUsers();