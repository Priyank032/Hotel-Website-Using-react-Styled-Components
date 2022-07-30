import React from 'react'
import styled from "styled-components"

const MainBanner = styled.div`
    display: inline-block;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 2rem 1rem;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 3px;
        @media screen and (min-width: 576px) {
            padding: 2rem 3rem;
        }
        @media screen and (min-width: 992px) {
            padding: 2rem 6rem;
        }
        h1{
            font-size: 2.5rem;
                @media screen and (min-width: 576px) {
                    font-size: 3rem;
                }
                @media screen and (min-width: 992px) {
                    font-size: 4rem;
                }
        }
        p{
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
`;

const Line = styled.div`
    width: 10rem;
    height: 5px;
    background: var(--primaryColor);
    margin: 1.7rem auto;
`;

const Banner = ({ children, title, subtitle }) => {
    return (
        <MainBanner>
            <h1>{title}</h1>
            <Line></Line>
            <p>{subtitle}</p>
            {children}
        </MainBanner>
    )
}

export default Banner
