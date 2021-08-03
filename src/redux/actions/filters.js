import { SET_CATEGORY, SORT_BY } from "../types"

export const setSortBy = ({order, type}) => {
    return {
        type: SORT_BY,
        payload: {
            order, type
        }
    }
};

export const setCategory = (catIndex) => {
    return {
        type: SET_CATEGORY,
        payload: catIndex
    }
};