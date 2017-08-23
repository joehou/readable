import {combineReducers} from 'redux'

function categoriesReducer ( state = initialCategoriesState,action ) {
    return state
}

const initialCategoriesState= {
    categories: [
        {
            "name": "react",
            "path": "react"
        },
        {
            "name": "redux",
            "path": "redux"
        },
        {
            "name": "udacity",
            "path": "udacity"
        }

        ]
}

export default combineReducers({categoriesReducer})