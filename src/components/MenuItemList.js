import React, { useEffect } from 'react';
import ItemCard from './ItemCard';
import './MenuItemList.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuItems } from '../redux';

function MenuItemList() {
    const loading = useSelector(state => state.menuItem.loading);
    const items = useSelector(state => state.menuItem.items);
    const error = useSelector(state => state.menuItem.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuItems())
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
