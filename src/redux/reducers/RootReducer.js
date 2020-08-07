import {combineReducers} from 'redux'
import BasicReducer from "./BasicReducer"

export default combineReducers(
    {
        basic: BasicReducer
    }
)
