import React from 'react';
import './ItemCard.css';
// ₹
const EGG_ICON = '';
const VEG_ICON = 'https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png';
const NVEG_ICON = 'https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png';
function ItemCard({ item }) {
    return (
        <div className='card'>
            <div className='card__content'>
            <img className='foodTypeIcon' src={(item.isVegetarian==='Y')?VEG_ICON:NVEG_ICON}/>
                <h2 className='itemName'>
                    {item.itemName}
                </h2>
            
                <div className='priceBox'>
                    <p className='originalPrice'>
                        ₹{item.originalPrice}
                    </p>
                    <p className='price'>
                        ₹{item.price}
                    </p>
                </div>

                <p className='itemDescription'>
                    {item.description}
                </p>
            </div>

            <div className='card__image'>
                <img
                    className='image'
                    src={(item?.image?.length)? (item?.image[0]): ''}
                    alt='NO_IMAGE'
                />
            </div>
        </div>
    )
}

export default ItemCard;
