import React from 'react'
import ShopItem from './ShopItem'

function Shop() {
    return (
        <div className="shop">
            <p>Please select the note you would like to buy</p>
            <ShopItem title="Blue Border" cost="3" color="blue"/>

            
        </div>
    )
}

export default Shop
