const user1 = {
    name: "Rahim Ahmed",
    email: "rahim@example.com"
};

const user2 = {
    name: "Nusrat Jahan",
    email: "nusrat@example.com"
};

const user3 = {
    name: "Tanvir Hasan",
    email: "tanvir@example.com"
};


async function createUser(user) {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)
            }
        );


        if (!response.ok) {
            throw new Error("Failed to create user");
        }


        const createdUser = await response.json();


        console.log("User Created");
        console.log("Name:", createdUser.name);
        console.log("Email:", createdUser.email);
        console.log("ID:", createdUser.id);

    } catch (error) {

        console.log("Error:", error);

    }

}


createUser(user1);
createUser(user2);
createUser(user3);