import {
    BASIC_ACTION_REQUEST,
    BASIC_ACTION_SUCCESS,
    BASIC_ACTION_FAIL
} from "../constants"

import Axios from "axios"

export const basicAction = (user) => {
    return (dispatch, getState) => {
        dispatch({type: BASIC_ACTION_REQUEST})
        Axios.get('route')
        .then(response => response.data)
        .then(response => { 
            dispatch({type: LOGIN_SUCCESS, payload: {}})
        })
        .catch(error => {
            dispatch({type: LOGIN_FAIL, payload: error})
        })
    }
}