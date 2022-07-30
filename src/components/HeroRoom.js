import React from 'react'
import styled from "styled-components";
import roomTwo from "../images/roomTwo.jpeg"

const DefaultHero = styled.header`
    min-height: 60vh;
    background: url(${roomTwo}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Hero = ({children}) => {
    return (
        <DefaultHero>{children}</DefaultHero>
    )
}

export default Hero
