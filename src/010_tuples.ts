// tuples => fixed length and fixed types

// Define the tuple

let user: [number, string] = [101, 'Zakir']

//practical uses

type response = [number, string]

const success: response = [200, "Success"];
const notFound: response = [404, "Not Found"];

console.log(success[0].toFixed(0))
console.log(success[1].toUpperCase())