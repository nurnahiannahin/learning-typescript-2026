// understand what is type parameter <T>
// how typescript infers <T> from your arguments automatically

// generics is a function -> the types "blanks" -> you fill later
// <T> is placeholder
// TS will try to understand what T should be

function id<T>(x: T): T {
    return x
}

// infers T
// id(4) -> T is a number
// id('string') -> T is string



// Example: Random item from a list

function getRandomItem<T>(list: T[]): T {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}


//input 1
const prices = [100, 400, 300];
const randomPrice = getRandomItem(prices); // T is inferred as number
console.log(randomPrice.toFixed(2))

//input 2
const categories = ["knitwear", "Outwear", "Accessories"];
const randomCat = getRandomItem(categories); // T as string
console.log(randomCat.toUpperCase())

