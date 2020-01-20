import React, { Component } from 'react';
import Client from './Contentful';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        dance: false,
        fitness: false,
        inCart: false,
        count: 0,
        total: 0,
        cart: [],
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: process.env.REACT_APP_CONTENT_TYPE,
                order: 'sys.createdAt'
                //oredr:'-field.price'
            });
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            this.setState({
                rooms,
                sortedRooms: rooms,
                featuredRooms,
                loading: false,
                price: maxPrice,
                maxPrice
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData();
    }


    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url
            );
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    };

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    }

    handleChange = event => {
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        //console.log(value);
        this.setState({
            [name]: value
        }, this.filterRooms);

    }

    filterRooms = () => {
        let {
            rooms, type, capacity, price, dance, fitness
        } = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);

        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity === capacity);
        }
        tempRooms = tempRooms.filter(room => room.price <= price);
        if (dance) {
            tempRooms = tempRooms.filter(room => room.dance === true);
        }
        if (fitness) {
            tempRooms = tempRooms.filter(room => room.fitness === true);
        }
        this.setState({
            sortedRooms: tempRooms
        });
    }

    //added function

    addToCart = (slug) => {

        let itemAddToCart = this.getRoom(slug);
        itemAddToCart.inCart = true;
        itemAddToCart.count = 1;
        const price = itemAddToCart.price;
        itemAddToCart.total = price;
        this.setState(() => {
            return { cart: [...this.state.cart, itemAddToCart] }
        }, () => {
            this.addTotals();
        });


    }

    // methods on My Cart Page
    increment = (slug) => {
        let tempItemsInCart = [...this.state.cart];
        const selectedItem = tempItemsInCart.find(item => item.slug == slug);
        selectedItem.count = selectedItem.count + 1;
        selectedItem.total = selectedItem.count * selectedItem.price;
        this.setState(() => {
            return {
                cart: [...tempItemsInCart]
            }
        }, () => {
            this.addTotals();
        });

    }
    decrement = (slug) => {
        let tempItemsInCart = [...this.state.cart];
        const selectedItem = tempItemsInCart.find(item => item.slug == slug);
        selectedItem.count = selectedItem.count - 1;
        if (selectedItem.count === 0) {
            this.removeItem(slug);
        } else {
            selectedItem.total = selectedItem.count * selectedItem.price;
            this.setState(() => {
                return {
                    cart: [...tempItemsInCart]
                }
            }, () => {
                this.addTotals();
            });
        }

    }
    removeItem = (slug) => {
        let tempItemsInCart = [...this.state.cart];
        tempItemsInCart = tempItemsInCart.filter(item => item.slug !== slug);

        let removedItem = this.getRoom(slug);
        removedItem.inCart = false;
        removedItem.count = 0;
        removedItem.total = 0;

        this.setState(() => {
            return {
                cart: [...tempItemsInCart]
            }
        }, () => {
            this.addTotals();
        });


    }
    clearCart = () => {
        let tempItemsInCart = [...this.state.cart];
        tempItemsInCart.map(item => item.inCart = false);
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.addTotals();
        })
    }
    checkout = () => {
        let tempItemsInCart = [...this.state.cart];
        const stripe = window.Stripe(process.env.REACT_APP_STRIPE_ID);
        stripe.redirectToCheckout({
            items: tempItemsInCart.map(item => ({
                quantity: item.count,
                sku: item.sku
            })),
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled'
        });
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (
            subTotal += item.total
        ));
        const tempTax = subTotal * 0.13;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        });
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                handleChange: this.handleChange,
                addToCart: this.addToCart,// added for cart
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                checkout: this.checkout
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export const withRoomConsumer = (Component) => {
    return function ConsumerWrapper(props) {
        return (<RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>);
    }
}


export { RoomProvider, RoomConsumer, RoomContext };
