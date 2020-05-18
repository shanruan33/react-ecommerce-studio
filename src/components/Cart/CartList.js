import React from 'react';
import CartItem from './CartItem'

export const CartList = ({ value }) => {
    const { cart } = value;
    //console.log(value,cart);

    return (
        <main className="Cart-content">
            <ul className="CartPage-items">
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value}/>
            })}
            </ul>
        </main>
    )
}

export default CartList;
