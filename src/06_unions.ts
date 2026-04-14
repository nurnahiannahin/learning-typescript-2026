// type Admin = {role: 'Admin', permissions: string[]}
// type Customer = {role: 'Customer', loyalityPoints : number}

// function describeUser(u : Admin | Customer) {
//     if(u.role === 'Admin') {
//         console.log(u.)
//     } else {

//     }
// }



// API Response Example

type LoadingState = {status: 'Loading'};
type ErrorState = {status: 'error', message: string};
type SuccessState = {status: 'success', data: string[]};

type ApiState = LoadingState | ErrorState | SuccessState;

function RenderComponent(state: ApiState) {
    switch(state.status) {
        case 'Loading':
            return "Loading...";

        case 'error':
            return `X Error: ${state.message}`;
        case 'success':
            return `Found ${state.data.length} items`
    }
}