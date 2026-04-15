// 1. Primitive and Inference
let storeName = "First Wear";
let totalStock = 150;


// 2. Union type: Defining strict business rules
// A product can only be one of these categories or sizes

type Category = "Knitwear" | "Accessories" | "Newborn";
type Size = "S" | "M" | "L" | "XL";

// 3. Objects and Interfaces: Modeling the data

interface newProdduct {
    readonly id: string;
    name: string;
    category: Category;
    price: number;
    sizes: Size[];
    isDiscounted?: boolean;
}

type DiscountInfo = {
    discountPercent: number;
    expiryDate: string;
};

type SaleItem = newProdduct & DiscountInfo;

// Implementation

const newOnesie: newProdduct = {
    id: "FW-101",
    name: "Cotton Baby Onesie",
    category: "Knitwear",
    price: 1200,
    sizes: ["S", "M"],
}

const clearanceTee: SaleItem = {
    id: "FW-202",
    name: "Logo Tee",
    category: "Knitwear",
    price: 800,
    sizes: ["L", "XL"],
    discountPercent: 20,
    expiryDate: "2026-05-01"
}