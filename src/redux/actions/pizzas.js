import axios from "axios";
import { SET_PIZZAS } from "../types";

export function fetchPizzas(sortBy, category){
    return dispatch => {
        dispatch(setLoading(false));
        axios.get(
                `/pizzas?${
                category !== null ? `category=${category}` : ''
                }&_sort=${sortBy.type}&_order=${sortBy.order}}`)
        .then(({data}) => {
          dispatch(setPizzas(data));
        }) 
       
    }
}

export function setPizzas (items){
    return{
        type: SET_PIZZAS,
        payload: items
    }
}

export function setLoading (payload){
    return{
        type: SET_PIZZAS,
        payload
    }
}