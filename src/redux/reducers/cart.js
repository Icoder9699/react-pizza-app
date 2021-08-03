import { ADD_PIZZA_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM } from "../types";

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
// const newItems = {
//     ...state.items,
//     [action.payload.id]: !state.items[action.payload.id] ? 
//     [action.payload] : [...state.items[action.payload.id], action.payload]
// }
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum,0);

export default function cartReducer(state = initialState, action){
    switch(action.type){
        case ADD_PIZZA_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                  items: currentPizzaItems,
                  totalPrice: getTotalPrice(currentPizzaItems),
                }
              };
         
            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);
    
            return {
                ...state, 
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            };
        }
        case CLEAR_CART: return {
            items: {},
            totalCount: 0,
            totalPrice: 0
        };

        case REMOVE_CART_ITEM:{
            const newItems = {...state.items}; // newItems = {obj = 0, 1, 2, 3};

            const currentTotalPrice = newItems[action.payload].totalPrice; 
            const currentTotalCount = newItems[action.payload].items.length; // id: 0 = [items, totalPrice].length 
            
            delete newItems[action.payload];
            
            return {
                ...state, 
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        case MINUS_CART_ITEM: {
            const oldItems = state.items[action.payload].items; // id : [{}, {}, {}]
            
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            };
            
            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items)  // massiv massivov 

            return {
                ...state,
                items: newItems,
                totalPrice: getTotalPrice(allPizzas),
                totalCount: allPizzas.length
            }
        }
        case PLUS_CART_ITEM: {
            const newObjItems = [                        
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];
            
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            };
            
            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);  // massiv massivov 

            return {
                ...state,
                items: newItems,
                totalPrice: getTotalPrice(allPizzas),
                totalCount: allPizzas.length
            }
        }
        default: return state;
    }
}


