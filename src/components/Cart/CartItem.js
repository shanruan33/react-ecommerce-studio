import React from 'react';

export const CartItem = ({ item, value }) => {
    const { slug, name, images, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    const [mainImg, ...defaultImg] = images;
    return (
        <li className="CartPage-item">
            <div className="Item">
                <div className="Item-left">
                    <div className="Item-title">
                        <img src={mainImg} className="Item-image" />
                        <span >Class: {name}</span>
                    </div>
                    <span>Price: ${price}</span>
                </div>
                <div className="Item-right">
                    <div className="Cart-control">
                        <span className="CartItem-removeOne" onClick={() => decrement(slug)}>-</span>
                        <span className="CartItem-count">{count}</span>
                        <span className="CartItem-addOne" onClick={() => increment(slug)}>+</span>
                    </div>
                    <div className="" onClick={() => removeItem(slug)}>
                        Remove
                        </div>
                    <strong>Item Total: ${total}</strong>
                </div>
            </div>
        </li>
    )
}

export default CartItem;