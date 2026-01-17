export const loggerMiddleware  = (store) => (next) => (action) => {
    console.log('dispatch action', action.type);
    return next(action)
}

// function loggerMiddleware(store) {
//     return function(next){
//         return function(action){
//             console.log('dispatch action', action.type)
//             return next(action);
//         }
//     }
// }