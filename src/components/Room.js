import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg"
//import {memo} from "react";
const RoomArticle = styled.article`
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    transition: all 0.3s linear;
    &:hover{
        box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
    }
`;

const ImageContainer = styled.div`
    position: relative;
    &:hover{
        background: rgba(0, 0, 0, 0.8);
        img {
            opacity: 0.3;
        }
        .Room-Link {
            transform: translate(-50%, -50%) scale(1);
        }
        .Price-Top{
            opacity: 0.8;
        }
    }
    img{
        width: 100%;
        display: block;
        transition: all 0.3s linear;
    }
`;

const PriceTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-right-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition:all 0.3s linear;
    h6{
        margin-bottom: 0;
        font-size: 0.9rem;
        font-weight: 300;
        letter-spacing: 3px;
    }
`;

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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
        &:hover{
            background: transparent;
            color: #af9a7d;
        }
`;

const RoomInfo = styled.p`
    background: #cfcfcf;
    text-transform: capitalize;
    padding: 0.5rem 0;
    text-align: center;
    font-weight: 700;
    letter-spacing:3px;
`;

const Room =({ room }) => {
    // console.log(room);
    const { name, slug, images, price } = room;
    return (
        <RoomArticle>
            <ImageContainer>
                <img src={images[0] || defaultImg} alt="single room" />
                <PriceTop className="Price-Top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </PriceTop>
                <BtnPrimary className="Room-Link" to={`/rooms/${slug}`}>
                    Features
                </BtnPrimary>
            </ImageContainer>
            <RoomInfo>{name}</RoomInfo>
        </RoomArticle>
    )
};
// Room.propTypes = {
//     room: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         slug: PropTypes.string.isRequired,
//         images: PropTypes.arrayOf(PropTypes.string).isRequired,
//         price: PropTypes.number.isRequired
//     })
// };
export default Room
