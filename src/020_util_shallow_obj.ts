// // Partial<T> -> make all the top level fields optional

// type addressN8 = {
//     line1: string;
//     city: string;
// }

// type User10 = {
//     id: string;
//     name: string;
//     email?: string;
//     address: addressN8
// }




// Example 1: E-Commerce Brand

interface Product2 {
    id: string;
    title: string;
    price: number;
    description: string;
    category: "Knitwear" | "Outerwear" | "Accessories";
}

// 1. Partial<T> -> Makes everything optional (For "Edit Profile" forms)
type UpdateProduct = Partial<Product2>

//2. Pick<T> -> selected specifics keys
type ProductPreview = Pick<Product2 , "title" | "price">;

//3. Omit<T, K> -> Remove specifics keys
type NewProduct = Omit<Product2, "id">

//4. Readonly <T> -> Prevant any changes
type LockedProduct = Readonly<Product2>

//5. Reuired<T> - Make optional field mandatory
interface DraftProduct {
    id?: string;
    title?: string;
}

type ConfirmedProduct = Required<DraftProduct>;

// --- Using OMIT (Creating) ---
const entry: NewProduct = {
  title: "Classic Knit Sweater",
  price: 1200,
  description: "100% Cotton",
  category: "Knitwear"
};

// --- Using PICK (Displaying) ---
function displayPreview(data: ProductPreview) {
  console.log(`${data.title} costs ${data.price} BDT`);
}

// --- Using PARTIAL (Updating) ---
function updateProduct(id: string, changes: UpdateProduct) {
  // 'changes' can be { price: 1300 } or { title: "New Name" } or empty
  console.log(`Updating product ${id} with:`, changes);
}