class UserN15 {
    id: string;
    name: string;
    email?: string;
    createAt: Date = new Date()

    constructor(id: string, name: string, email?: string) {
        // assign all required fill
        this.id = id,
        this.name = name;
        if(email) this.email = email
    }
}


const result4 = new UserN15("3", "Nahian")