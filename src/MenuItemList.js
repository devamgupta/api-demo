import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import './MenuItemList.css';

const API_URL = 'https://api.dotpe.in/api/catalog/store/1/menu?mDomain=fryerstory.in&saletype=delivery&serviceSubtype=delivery'
function MenuItemList() {
    const [menuItems, setMenuItems] = useState([]);
    

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setMenuItems(
            Object.keys(data.menuItems).map(function(key, index) {
                return data.menuItems[key];
            })
        ));
    }, [])

    
    return (
            <Grid
                className='menuItemList'
                container
                direction='column'
            >
                {
                    menuItems.map((item,index) => {
                        return <ItemCard item={item}/>
                    })

                }
            </Grid>
    )
}

export default MenuItemList;