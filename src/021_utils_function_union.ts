// // 1. The Union Type: Defining the "Either/Or" options
// type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

// // 2. The Utility Function: A reusable helper
// function getStatusTheme(status: OrderStatus): string {
//   switch (status) {
//     case "pending":
//       return "Awaiting Processing";
//     case "shipped":
//       return "Out for Delivery";
//     case "delivered":
//       return "Package Arrived";
//     case "cancelled":
//       return "Order Voided";
//     // TypeScript will error here if we miss a case!
//   }
// }

// // Usage
// const currentStatus: OrderStatus = "shipped";
// console.log(getStatusTheme(currentStatus)); // Out for Delivery"




// Example API response 

type ApiResponse2 = 
  | { status: "success"; data: string[] } 
  | { status: "error"; message: string };

function getResponseSummary(response: ApiResponse2): string {
    if(response.status === "success") {
        return `Loaded ${response.data.length} items successfully.`;
    }

    return `Failed to load: ${response.message}`;
}


const okResponse: ApiResponse2 = { status: "success", data: ["Shirt", "Pants"] };
const badResponse: ApiResponse2 = { status: "error", message: "Timeout" };

console.log(getResponseSummary(okResponse)); // "Loaded 2 items successfully."