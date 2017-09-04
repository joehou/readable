import {fetchCategories} from '../utils/api'

export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const LOAD_CATS_SUCCESS = 'LOAD_CATS_SUCCESS'

export function selectCategory(category){
    console.log("this is from the select Category action",category)
    return {
        type: SELECT_CATEGORY,
        category
    }
}

export function loadCategories() {
    return (dispatch) => {
        return fetchCategories().then(cats => {
            dispatch(loadCategoriesSuccess(cats))
        }).catch(error=>{
            throw(error)
        })
    }
}

export function loadCategoriesSuccess(categories) {
    return {type: LOAD_CATS_SUCCESS,categories}
}
