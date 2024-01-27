// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


const current_users: string[] = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const new_users: string[] = ["Eve", "Fred", "Alice", "Grace", "Harry"];

// for (let new_user of new_users)
for (let i = 0; i<new_users.length; i++){
    let isAvailable = true;
    for (let current_user of current_users){
        if (new_users[i].toLowerCase() === current_user.toLowerCase()){
            console.log(`Username ${new_users[i]} is already taken. Please choose a different username`);
            isAvailable = false;
            break;
        }
    }
    if (isAvailable){
        console.log(`Username ${new_users[i]} is available`);
    }
}