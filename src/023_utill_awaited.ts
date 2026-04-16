// Awaited<T>

type Promise1 = Awaited<Promise<number>>
type Promise2 = Awaited<Promise<Promise<string>>>
type Awaited2 = Awaited<string>

type PromiseUnionExample = Awaited<Promise<string | number>>



// Example: Fetching Products

// 1. A function that fetches data (Returns a Promise)

async function getProduct() {
    return {
        id: 1, 
        title: "Knitwear Sweater",
        price: 1200
    };
}

// 2. We want the TYPE of the product, but we don't want to rewrite the interface
// ReturnType<typeof getProduct> would give us: Promise<{id: number, ...}>
// We use Awaited to get the clean object inside the promise.

type ProductResult = Awaited<ReturnType<typeof getProduct>>;

// 3. Now we can use that type for our components or variables

const myProduct: ProductResult = {
    id: 2,
    title: "Casual Hoodie",
    price: 1500
}

async function processProduct() {
    const data: ProductResult = await getProduct();
    console.log(data.title)
}