import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { RoomConsumer } from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';
import Banner from '../Banner';
import Hero from '../Hero';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <RoomConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <>
                                    <Hero>
                                        <Banner title='My Cart'>
                                            <Link to='/' className="btn-primary ">Return Home</Link>

                                        </Banner>
                                    </Hero>
                                    {/* <CartColumns /> */}
                                    <CartList value={value} />
                                    <CartTotal value={value} history={this.props.history} />
                                </>
                            );
                        } else {
                            return <EmptyCart />
                        }
                    }}
                </RoomConsumer>


            </section>
        )
    }
}
