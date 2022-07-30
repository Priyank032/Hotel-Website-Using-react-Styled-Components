import React from 'react'
import HeroRoom from "../components/HeroRoom"
import Banner from "../components/Banner"
import { Link } from "react-router-dom";
import styled from "styled-components"
import RoomsContainer from "../components/RoomsContainer"
import Footer from '../components/Footer';
const BtnPrimary = styled(Link)`
    display: inline-block;
    text-decoration: none;
    letter-spacing:3px;
    color:  #222;
    background: #af9a7d;
    padding: 0.4rem 0.9rem;
    border: 3px solid #af9a7d;
    transition: all 0.3s linear;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        background: transparent;
        color: #af9a7d;
    }
`;

const Rooms = () => {
    return (
        <>
        <HeroRoom>
            <Banner title="Our Rooms" >
                <BtnPrimary to="/">
                    Return Home
                </BtnPrimary>
            </Banner>
        </HeroRoom>
        <RoomsContainer />
        <Footer />
        </>
    )
}

export default Rooms
