import {
    BASIC_ACTION_REQUEST,
    BASIC_ACTION_SUCCESS,
    BASIC_ACTION_FAIL
} from "../constants"

const basic = {
    loaded: false,
    loading: false,
    loadingError: false,
    error: ""
}

export default (state = basic, action) => {
    switch (action.type) {
        case BASIC_ACTION_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
                error: ""
            }
        case BASIC_ACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                loadingError: false,
                error: ""
            }
        case BASIC_ACTION_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
                error: action.payload.message
            }
        default:
            return state;
    }
}