function sumAllNumbers(...xs: number[]): number {
    return xs.reduce((s, n) => s + n, 0);
}

console.log(sumAllNumbers(2, 3,4, 5, 6,5,3,3 ))


function notifyUsers(message: string, ...userIds: string[]): void {
    console.log(`Notification: "${message}"`);

    userIds.forEach(id => {
        console.log(`Sending to database ID: ${id}`)
    });
}


//usage

notifyUsers(
    "Your order has shipped!",
    "user_01", "user_09", "user_33"
)