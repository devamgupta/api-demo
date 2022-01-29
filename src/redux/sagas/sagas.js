import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios';

import { fetchMenuItems, fetchMenuItemsRequest, fetchMenuItemsSuccess, fetchMenuItemsFailure } from '..';

const API_URL = 'https://api.dotpe.in/api/catalog/store/1/menu?mDomain=fryerstory.in&saletype=delivery&serviceSubtype=delivery';

function* handleFetchMenuItems() {
    yield put(fetchMenuItemsRequest())
    try {
        const response = yield call(axios.get, API_URL)
        const data = response.data;
        const items = Object.keys(data.menuItems).map(key => 
            data.menuItems[key]
        )

        yield put(fetchMenuItemsSuccess(items));
    } catch (error) {
        yield put(fetchMenuItemsFailure(error.message));
    }
    
}

// You shall use different names for actions which you catch from React components,
// and actions which are used for optimistical and real up-dating of a status.
export function* watchFetchMenuItems() {
  yield takeEvery(fetchMenuItems().type, handleFetchMenuItems)
}

