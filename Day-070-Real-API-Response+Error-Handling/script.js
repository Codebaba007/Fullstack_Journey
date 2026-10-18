async function fetchUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log("Status:", response.status);
        console.log("OK:", response.ok);


        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }


        const users = await response.json();


        console.log("Users:", users);


        users.forEach((user) => {

            console.log("Name:", user.name);
            console.log("Email:", user.email);

        });


    } catch (error) {

        console.log("Error:", error);

    }

}


fetchUsers();