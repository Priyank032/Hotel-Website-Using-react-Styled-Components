import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom";
import styled from "styled-components"
import Sevices from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"
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

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <BtnPrimary to="/rooms">
                        our rooms
                </BtnPrimary>
                </Banner>
            </Hero>
            <Sevices />
            <FeaturedRooms />
            <Footer/>
        </>
    )
}

export default Home
