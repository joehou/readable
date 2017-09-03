export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export function selectCategory(category){
    console.log("this is from the select Category action",category)
    return {
        type: SELECT_CATEGORY,
        category
    }
}

export function fetchCategories() {

    return (dispatch) => {

    }
}

