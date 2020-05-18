import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from '../components/Loading';
import Room from '../components/Room';
import Title from '../components/Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms:rooms } = this.context;
        //console.log(rooms);
        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="featured classes" />
                <div className="featured-rooms-center">
                    {loading?<Loading />:rooms}
                </div>
                
                
            </section>
        )
    }
}
