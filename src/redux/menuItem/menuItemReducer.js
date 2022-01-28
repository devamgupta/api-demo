import {
    FETCH_MENU_ITEMS_REQUEST,
    FETCH_MENU_ITEMS_SUCCESS,
    FETCH_MENU_ITEMS_FAILURE,
} from "./menuItemTypes";


const initialState = {
    loading: true,
    items: [],
    error: '',
}


const menuItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MENU_ITEMS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_MENU_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
                error: '',
            }
        case FETCH_MENU_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                items: [],
                error: action.payload,
            }
        default:
            return state
    }
}

export default menuItemReducer;