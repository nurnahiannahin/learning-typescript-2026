type User = {
    id: string;
    name: string;
    email? : string;
    readonly createAt : Date
}

const user1 : User = {
    id: "u1",
    name: "nahian",
    createAt: new Date()
}