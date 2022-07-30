import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer } from "../Context";
import Loading from "./Loading";
const RoomsContainer = () => {
    return (
        <>
            <RoomConsumer>
                {
                    (value) => {
                       // console.log(value.data);
                        const {loading, sortedrooms, rooms} = value.data;
                        if (loading) {
                            return <Loading />
                        }
                        return (
                            <div>
                                {/* helo from rooms RoomsContainer */}
                                <RoomsFilter rooms={rooms}/>
                                <RoomsList rooms={sortedrooms} />
                            </div>
                        )
                    }
                }
            </RoomConsumer>

        </>
    )
}

export default RoomsContainer
