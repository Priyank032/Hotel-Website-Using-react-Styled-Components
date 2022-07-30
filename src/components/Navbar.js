import React, { useState } from 'react'
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavigationBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.75rem 2rem;
    background: #f7f7f7;
    z-index: 1;
`;

const NavCenter = styled.div`
    @media screen and (min-width: 768px) {
        max-width: 1170px;
        margin: 0 auto;
        display: flex;
    }
`;

const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Firstlink = styled(Link)``;

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const NavIcon = styled(FaAlignRight)`
    font-size: 1.5rem;
    color: #af9a7d;
`;

const UnorderList = styled.ul`
    height: ${({ isOpen }) => isOpen ? "100px" : "0"};
    overflow: hidden;
    transition: all 0.3s linear;
    list-style-type: none;
    @media screen and (min-width: 768px) {
        height: auto;
        display: flex;
        margin-left: 4rem;
    }

    a{
        display: block;
        text-decoration: none;
        padding: 1rem 0;
        color: #222;
        transition: all 0.3s linear;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 3px;
        @media screen and (min-width: 768px) {
            margin: 0 1rem;
            padding: 0.5rem 0;
        }
        &:hover{
            color: #af9a7d;
        }
    }
`;

const OrderList = styled.li``;

const BtnPrimary = styled(Link)`
    display: inline-block;
    max-height:40px;
    margin-left:auto;
    ${'' /* margin-top:5px; */}
    text-decoration: none;
    letter-spacing:3px;
    color: #222;
    font-weight:bold;
    background: #af9a7d;
    padding: 0.4rem 0.5rem;
    border: 3px solid #af9a7d;
    transition: all 0.3s linear;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        background: transparent;
        color: #af9a7d;
    }
    @media screen and (max-width:540px) {
        display: none;
    }
`;
const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false);
    const handleToggle = () => {
        SetIsOpen(!isOpen);
    }
    return (
        <NavigationBar>
            <NavCenter>
                <NavHeader>
                    <Firstlink to="/" style={{textDecoration:"none"}}>
                        {/* <Image src={logo} alt="Hotel" /> */}
                        <h3 style={{textDecoration:"none",border:"none", letterSpacing: "3px",marginTop:"8px"}}><span style={{color: "#000"}}>Clarks</span> <span style={{color: "#af9a7d"}}>Inn Suites</span> </h3>
                    </Firstlink>
                    <Button type="button" onClick={handleToggle}>
                        <NavIcon />
                    </Button>
                </NavHeader>
                <UnorderList isOpen={isOpen}>
                    <OrderList>
                        <Firstlink to="/" >Home</Firstlink>
                    </OrderList>
                    <OrderList>
                        <Firstlink to="/rooms" >Rooms</Firstlink>
                    </OrderList>
                </UnorderList>
                <BtnPrimary to="/contact" >
                        contact
                    </BtnPrimary>
            </NavCenter>
        </NavigationBar>
    )
}

export default Navbar
