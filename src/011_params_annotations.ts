function greet(name: string, age: number) {
    console.log(`Hello ${name}, you are ${age} years old.`)
}

greet("zakir", 26)


// optional and default
function createUser(username: string, isAdmin?: boolean, status: string = 'active') {
    console.log(`User: ${username}, Admin: ${isAdmin}, Status: ${status}`);
}

createUser("dev_user")