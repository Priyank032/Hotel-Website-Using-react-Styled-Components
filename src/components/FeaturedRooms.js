import React, { useContext } from 'react'
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import styled from "styled-components";

const FeaturedRoomDiv = styled.section`
    padding: 5rem 0;
`;

const FeaturedRoomDivCenter = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;

    @media screen and (min-width: 776px) {
        width: 90vw;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    }
    @media screen and (min-width: 992px) {
        width: 95vw;
        max-width: 1170px;
    }
`;

const FeaturedRooms = () => {
    
    let { data } = useContext(RoomContext);
    let { loading, featuredRooms: rooms } = data;
    //console.log(rooms);
    rooms = rooms.map(room => {
        return <Room key={room.id} room={room} />
    })
    return (
        <FeaturedRoomDiv>
            <Title title="featured rooms" />
            <FeaturedRoomDivCenter>
                {loading ? <Loading /> : rooms}
            </FeaturedRoomDivCenter>
        </FeaturedRoomDiv>
    )
}

export default FeaturedRooms
