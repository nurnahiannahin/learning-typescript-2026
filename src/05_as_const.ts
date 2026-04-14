// const ROLES = ["admin", "user", "customer"] as const

// type Role = (typeof ROLES) [number]

// function setRole(r: Role) {
//     console.log(r)
// }

// setRole("admin")


// Another example 
const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
} as const;


// Deriving types
type StatusLabel = keyof typeof STATUS_CODES

// get the values
type StatusCode = (typeof STATUS_CODES)[keyof typeof STATUS_CODES];

function respond(code: StatusCode) {
    console.log(`Response sent with code: ${code}`)
}

respond(STATUS_CODES.OK);
respond(404);