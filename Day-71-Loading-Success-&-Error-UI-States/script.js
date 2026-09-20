const statusText = document.querySelector("#status");
const usersContainer = document.querySelector("#users");

statusText.textContent = "Loading...";


async function fetchUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        statusText.textContent = "Users loaded successfully!";


        users.forEach((user) => {

            const userElement = document.createElement("p");

            userElement.textContent = `${user.name} - ${user.email}`;

            usersContainer.appendChild(userElement);

        });


    } catch (error) {

        statusText.textContent = "Failed to load users.";

        console.log(error);

    }

}


fetchUsers();