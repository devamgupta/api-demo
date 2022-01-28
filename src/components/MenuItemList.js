import React, { useEffect } from 'react';
import ItemCard from './ItemCard';
import './MenuItemList.css';
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuItemsRequest, fetchMenuItemsSuccess, fetchMenuItemsFailure } from '../features/menuItem/menuItemSlice';

const API_URL = 'https://api.dotpe.in/api/catalog/store/1/menu?mDomain=fryerstory.in&saletype=delivery&serviceSubtype=delivery'
function MenuItemList() {
    const loading = useSelector(state => state.menuItem.loading);
    const items = useSelector(state => state.menuItem.items);
    const error = useSelector(state => state.menuItem.error);
    const dispatch = useDispatch();

    useEffect(() => {
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
    }, []);

    return (
            <div className='menuItemList'>
                {
                    loading ?
                    <p>Loading Items...</p> :
                    (
                        error ?
                        <p>{error}</p> :
                        items.map(item => {
                            return <ItemCard key={item.itemID} item={item}/>
                        })
                    )
                }
            </div>
    )
}

export default MenuItemList;
