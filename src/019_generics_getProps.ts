type UserN7 = {
    id: string;
    name: string;
    email?: string;
}

function getUserN7<T, K extends keyof T>(objN7: T, keyN7: K): T[K] {
        return objN7[keyN7];
}

const myUser: UserN7 = { id: "01", name: "Zakir", email: "z@example.com" };

// ✅ Valid
const userName = getUserN7(myUser, "name"); // Inferred as string
const userId = getUserN7(myUser, "id");     // Inferred as string

// ❌ Error: "age" does not exist on UserN7
// getUserN7(myUser, "age");


// Another Example: Configuration Management

type AppConfig = {
    theme: "light" | "dark";
    port: number;
    dbUrl: string
};

const config: AppConfig = {theme: "dark", port: 3000, dbUrl: "mongodb://http.mongo.com"}

function getConfigValue<T, K extends keyof T>(cfg: T, key: K): T[K]{
    return cfg[key]
}