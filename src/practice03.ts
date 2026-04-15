let companyName: string = "First Wear";

type Currency = "USD" | "BDT" | "AUD";
type PaymentMethod = "Card" | "MobileBanking" | "Cash";
type OrderStatus = "Processing" | "Shipped" | "Delivered";

interface BaseProduct {
    readonly sku: string;
    name: string;
    price: number;
}

interface ShippingDetails {
    address: string;
    city: string;
    postalCode: number;
}

type Order = BaseProduct & ShippingDetails & {
    status: OrderStatus;
    payment: PaymentMethod;
    currency: Currency;
}

const bulkOrder: Order = {
    sku: "Winter_2026",
    name: "Knitwear_Cardigan",
    price: 240,
    address: "300no. Road",
    city: "Melbourne",
    postalCode: 4335,
    status: "Processing",
    payment: "Card",
    currency: "AUD"
}

const inventory: BaseProduct[] = [
    { sku: "KW-01", name: "Knit Onesie", price: 1200 },
    { sku: "CS-02", name: "Cotton Socks", price: 300 },
    { sku: "WC-03", name: "Winter Cap", price: 550 }
];