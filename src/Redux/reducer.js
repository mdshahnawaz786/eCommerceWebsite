
export function basicReducer(storeData={product:[],category:[],addToCart:[], cartPaymentCount:[] }, action){

    if(action.type === "product"){
        return {
            ...storeData,
            product:action.payload,
            category:action.payload
        }
    }
    else if(action.type === "category"){
        // console.log(action);
        return{
            ...storeData,
            category:action.payload 
        }
    }
    else if(action.type === "addToCart"){
        
        if(storeData.addToCart.length === 0){
            return{
                ...storeData,
                addToCart:[action.payload]
            }
        }
        else {
            let boolean = false
            for(let i=0; i<storeData.addToCart.length; i++){
                if(storeData.addToCart[i].id === action.payload.id){
                    boolean = true
                }
            }
            if(boolean === false){
                return {
                    ...storeData,
                addToCart:[...storeData.addToCart,action.payload]
                }
            }
        }
    }
    else if(action.type === "deleteCartItem"){
        return{
            ...storeData,
            addToCart:action.payload
        }
    }

    else if(action.type === "cartPaymentCount"){
        return{
            ...storeData,
            cartPaymentCount:action.payload
        }
    }

    return storeData
}