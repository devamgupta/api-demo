import axios from "axios";
import {
    FETCH_MENU_ITEMS_REQUEST,
    FETCH_MENU_ITEMS_SUCCESS,
    FETCH_MENU_ITEMS_FAILURE,
} from "./menuItemTypes";

export const fetchMenuItemsRequest = () => {
    return {
        type: FETCH_MENU_ITEMS_REQUEST
    }
}

export const fetchMenuItemsSuccess = items => {
    return {
        type: FETCH_MENU_ITEMS_SUCCESS,
        payload: items,
    }
}

export const fetchMenuItemsFailure = error => {
    return {
        type: FETCH_MENU_ITEMS_FAILURE,
        payload: error,
    }
}

const API_URL = 'https://api.dotpe.in/api/catalog/store/1/menu?mDomain=fryerstory.in&saletype=delivery&serviceSubtype=delivery'

export const fetchMenuItems = () => {
    return function(dispatch) {
        dispatch(fetchMenuItemsRequest())
        axios.get(API_URL)
        .then(response => {
            const data = response.data;
            const items = Object.keys(data.menuItems).map(function(key, index) {
                return data.menuItems[key];
            })
            dispatch(fetchMenuItemsSuccess(items));
        })
        .catch(error => {
            dispatch(fetchMenuItemsFailure(error.message));
        })
    }
}