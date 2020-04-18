import React, { useState, useEffect } from 'react';
import PayPalButton from './PaypalButton';

export const CartTotal = ({ value, history }) => {
    const { cartSubtotal, cartTax, cartTotal, clearCart, checkout } = value;
    const [stripe, setStripe] = useState(null);
    const stripeToken = process.env.REACT_APP_STRIPE_TOKEN;

    useEffect(() => {
        if (window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken])
    return (
        <div className="Cart-checkout">
            <button className="btn-primary"
                type="button"
                onClick={() => clearCart()}
            >
                clear Cart
                </button>
            <h5>
                <span>Subtotal: </span><strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
                <span>Tax: </span><strong>$ {cartTax}</strong>
            </h5>
            <h5>
                <span>Total: </span><strong>$ {cartTotal}</strong>
            </h5>
//             <button className="btn-primary"
//                 type="button"
//                 onClick={() => checkout()} ////checkout stripe
//             >
//                 <strong>checkout with card</strong>
//             </button>
//             <p>or</p>
            <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
        </div>
    )
}

export default CartTotal;
