function lenN4<T extends {length: number}> (xN4: T): number {
    return xN4.length
}


// Constraint: T must have an 'id' that is either a string or number
function logId<T extends {id: string | number}>(item: T): void {
    console.log(`The item ID is: ${item.id}`)
};

// Usage
const user2 = {id: "u_101", name: "zakir"}
const product = { id: 5005, title: "Knit Sweater" };

logId(user2);    // ✅ Valid
logId(product); // ✅ Valid

// ❌ Error: This object is missing the 'id' property
logId({ name: "Guest" });