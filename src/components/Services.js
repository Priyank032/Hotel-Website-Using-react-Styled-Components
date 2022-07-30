import React from 'react'
import Title from "./Title";
import { ServicesData } from "../Data/ServicesData"
import styled from "styled-components";

const ServicesSecion = styled.section`
    padding: 5rem 0;
    background: #cfcfcf;
    text-align: center;
    h6{
        letter-spacing:3px;
        text-tranform:capitalize;
    }
    p{
        width: 80%;
        margin: 0 auto;
        @media screen and (min-width: 1200px) {
            width: 100%;
        }
    }
`;

const ServicesCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
    @media screen and (min-width: 992px) {
        width: 95vw;
        max-width: 1170px;
    }
`;

const ServiceArticle = styled.article`
    span{
        display: inline-block;
        color: #af9a7d;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
`;

const Services = () => {
    return (
        <ServicesSecion>
            <Title title="Services" />
            <ServicesCenter>
                {ServicesData.map((item, index) => {
                    return (
                        <ServiceArticle key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </ServiceArticle>
                    );
                })
                }
            </ServicesCenter>
        </ServicesSecion>
    )
}

export default Services
