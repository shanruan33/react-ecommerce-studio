import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../context';
import Loading from './Loading';

export const RoomsContainer = () => {
    return (
        <RoomConsumer>
            {
                value => {
                    const { loading, sortedRooms, rooms } = value;
                    if (loading) { return <Loading /> }
                    return (
                        <div>
                            <RoomsFilter rooms={rooms} />
                            <RoomsList rooms={sortedRooms} />
                        </div>
                    );
                }
            }
        </RoomConsumer>

    )
}

export default RoomsContainer;
