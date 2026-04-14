// const a11 : number[] = [1,2 ,3 ,4]
// const aa22 : Array<number> = [4, 5, 6, 7]


// Handles an API response for different types of data

type user = {name: string, email: string};
type product = {title: string, price: number};

type ApiResponse<T> = {
    status: number;
    data: T;
};

function getData<T>(response: ApiResponse<T>): T {
    return response.data;
};


const userResp: ApiResponse<user> = {
    status: 200,
    data: {name: "zakir", email: "zakir@example.com"}
}

const result = getData(userResp)
console.log(result.name)


// B example

const prodResp: ApiResponse<product> = {
    status: 200,
    data: {title: "Laptop", price: 1200}
}

const result2 = getData(prodResp);
console.log(result2.title)