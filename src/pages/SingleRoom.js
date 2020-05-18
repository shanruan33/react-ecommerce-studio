import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext, RoomConsumer } from '../context';
import StyledHero from '../components/StyledHero';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';


// original version
export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    //componentDidMount(){}

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        //console.log(room);
        if (!room) {
            return <div className="error">
                <h3>No such item could be found...</h3>
                <Link to='/classes' className="btn-primary">back to classes</Link>
            </div>
        }
        const { name, slug, description, capacity, price, dance, fitness, images, inCart } = room;
        const [mainImg, ...defaultImg] = images;
        //console.log(defaultImg);
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} class`} >
                        <Link to='/classes' className="btn-primary">back to classes</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price} /month</h6>
                            <h6>max capacity :{" "}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                            <h6>fitness class :{fitness ? "Yes" : "No"}</h6>
                            <h6>dance class :{dance ? "Yes" : "No"}</h6>
                        </article>
                    </div>
                </section>
                {/* addToCart button */}
                <RoomConsumer>
                    {value => {
                        if (inCart) {
                            return (
                                <div className="addToCart-btn">
                                    <div className="inCart">
                                        In the Cart
                                    </div>
                                    {/* <Link to="/cart"><FaShoppingCart className="nav-icon cart-icon" /></Link> */}
                                </div>
                            )
                        } else {
                            return (
                                <div className="addToCart-btn">
                                    <button
                                        className="btn-primary"
                                        //disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(slug)
                                        }}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            )
                        }
                    }}
                </RoomConsumer>
                {/* addToCart button */}
            </>
        )
    }
}


// SingleRoom.propTypes = {
//     room: PropTypes.shape({
//         name: PropTypes.string,
//         price: PropTypes.number,
//         inCart: PropTypes.bool

//     }).isRequired
// };
