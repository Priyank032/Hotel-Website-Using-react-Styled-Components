import React from 'react'
import styled from "styled-components";
import defaultBcg from "../images/defaultBcg.jpeg"

const DefaultHero = styled.header`
    min-height: calc(100vh - 66px);
    background: url(${defaultBcg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Hero = ({ roomTwo,children}) => {
    return (
        <DefaultHero roomTwo={roomTwo}>{children}</DefaultHero>
    )
}

export default Hero
