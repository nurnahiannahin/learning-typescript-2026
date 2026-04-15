// type InExample1 = {role: "Admin", permissions: string[]}
// type InExample2 = {role: "User", expiryDate: Date}

// type UserExample = InExample1 | InExample2

// function describeUserExample(u: UserExample) {
//     if('permissions' in u) {
//         return `Admin ${u.permissions.join(',')}`
//     }
//     return `User ${u.expiryDate.toISOString()}`
// }

// console.log(describeUserExample({role: "Admin", permissions: ['read']}))



// User Profiles with Optional Metadata

type Admin = {role: "Admin"; permission: string[]; profile?: {address?: {city: string}} };
type Guest = {role: "Guest"; temporaryId: string};

type Person = Admin | Guest;

function getAdminCity(person: Person) {
    if("permissions" in person) {{
        const city = person.profile?.address?.city;

        return `Admin from ${city ?? "Unknown city"}`// using nullish
    }}

    return "Guest User - No city data"
}