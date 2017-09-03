import {combineReducers} from 'redux'
import  {SELECT_CATEGORY} from '../actions'


function posts ( state = initialCategoriesState,action ) {
    switch(action.type){
        case SELECT_CATEGORY:
            return {
                ...state,
            }
        default:
            return state
    }
}

const initialCategoriesState= {
    selectedCategory: "react",
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

    ],
    posts:
        [
            {
                "id": "8xf0y6ziyjabvozdd253nd",
                "timestamp": 1467166872634,
                "title": "Udacity is the best place to learn React",
                "body": "Everyone says so after all.",
                "author": "thingtwo",
                "category": "react",
                "voteScore": 6,
                "deleted": false
            },
            {
                "id": "6ni6ok3ym7mf1p33lnez",
                "timestamp": 1468479767190,
                "title": "Learn Redux in 10 minutes!",
                "body": "Just kidding. It takes more than 10 minutes to learn technology.",
                "author": "thingone",
                "category": "redux",
                "voteScore": -5,
                "deleted": false
            }
        ]
}

export default combineReducers({posts})