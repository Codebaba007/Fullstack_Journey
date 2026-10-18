const statusText = document.querySelector("#status");
const usersContainer = document.querySelector("#users");


async function fetchUsers() {

    try {

        statusText.textContent = "Loading users...";


        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }


        const users = await response.json();


        statusText.textContent = "Users loaded successfully!";


        users.forEach((user) => {

            const card = document.createElement("div");

            const name = document.createElement("h2");
            const email = document.createElement("p");
            const phone = document.createElement("p");
            const website = document.createElement("p");


            name.textContent = user.name;
            email.textContent = `Email: ${user.email}`;
            phone.textContent = `Phone: ${user.phone}`;
            website.textContent = `Website: ${user.website}`;


            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(phone);
            card.appendChild(website);


            usersContainer.appendChild(card);

        });


    } catch (error) {

        statusText.textContent = "Failed to load users.";

        console.log(error);

    }

}


fetchUsers();