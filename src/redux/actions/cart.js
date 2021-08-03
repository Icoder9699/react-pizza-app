import { ADD_PIZZA_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM } from "../types";


export function addPizza(pizzaData){
    return {
        type: ADD_PIZZA_CART,
        payload: pizzaData
    }
}

export function clearCart(){
    return {
        type: CLEAR_CART,
    }
}


export function removeCartItem(id){
    return {
        type: REMOVE_CART_ITEM,
        payload: id
    }
}

export function minusCartItem(id){
    return {
        type: MINUS_CART_ITEM,
        payload: id
    }
}

export function plusCartItem(id){
    return {
        type: PLUS_CART_ITEM,
        payload: id
    }
}