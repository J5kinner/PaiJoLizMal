import React from 'react'
import Note from './Note.js';
import '../assets/scss/components/Shop.scss'

const ShopItem = (props) => {
    return (
        <div className={"shop-item shop-item-" + props.color}>
            <Note/>
            <p>{props.title}</p>
            <p>{props.price}</p>

            
        </div>
    )
}

export default ShopItem
