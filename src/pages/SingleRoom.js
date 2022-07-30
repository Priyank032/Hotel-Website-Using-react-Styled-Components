import React, { useContext } from 'react'
import defaultBcg from "../images/room-1.jpeg";
import errorimage from "../images/No-Data-Found.png";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import styled from "styled-components"
import StyledHero from "../components/StyledHero";
import Footer from '../components/Footer';
const Error = styled.div`
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;

const Image = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
`;

const BtnPrimary = styled(Link)`
    display: block;
    width:20%;
    margin:auto;
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

const BtnPrimaryTwo = styled(Link)`
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

const SingleRoomSection = styled.section`
    padding: 5rem 0 0 0;
`;

const SingleRoomImages = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
    img{
        width: 100%;
    display: block;
    }
    @media screen and (min-width: 992px) {
        width: 95vw;
        max-width: 1170px;
    }
`;

const SingleRoomInfo = styled.div`
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr;
    margin: 2rem auto;
    @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    }
`;

const Description = styled.article`
    margin: 1rem 0;
    h3{
        text-transform: capitalize;
    letter-spacing: 3px;
    }
    p{
        line-height: 1.5;
    }
`;

const Info = styled.article`
    margin: 1rem 0;
    h3{
        text-transform: capitalize;
        letter-spacing: 3px;
    }
    h6{
        text-transform: capitalize;
        letter-spacing: 3px;
        font-weight: 300;
    }

    @media screen and (min-width: 992px) {
        padding-left: 3rem;
    }
`;

const RoomExtras = styled.section`
    width: 80vw;
    margin: 0 auto 3rem auto;
    h6{
        text-transform: capitalize;
        letter-spacing: 3px;
    }
    @media screen and (min-width: 992px) {
        width: 95vw;
        max-width: 1170px;
    }
`;

const ExtrasList = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
`;

const SingleRoom = (props) => {
    const slug = props.match.params.slug;
    const DefaultBcg = defaultBcg;
    //const [slug, setSlug] = useState(props.match.params.slug);
    //const [DefaultBcg, setDefaultBcg] = useState(defaultBcg)
    // console.log(props.match.params.slug);
    const { getRoom } = useContext(RoomContext);
    const room = getRoom(slug);
    //console.log(room);
    if (!room) {
        return <Error>
            <Image src={errorimage} alt="sorry not found data" />
            <BtnPrimary to="/rooms">
                Back To Rooms
             </BtnPrimary>
        </Error>

    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [mainImg, ...defaultImg] = images;
    return (
        <>
            <StyledHero img={mainImg || DefaultBcg}>
                <Banner title={`${name} room`}>
                    <BtnPrimaryTwo to="/rooms">
                        Back To Rooms
             </BtnPrimaryTwo>
                </Banner>
            </StyledHero>
            <SingleRoomSection>
                <SingleRoomImages>
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </SingleRoomImages>
                <SingleRoomInfo>
                    <Description>
                        <h3>details</h3>
                        <p>{description}</p>
                    </Description>
                    <Info>
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : ${size} SQFT</h6>
                        <h6>
                            max capacity :{
                                capacity > 1 ? `${capacity} people` : `${capacity} person`
                            }
                        </h6>
                        <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </Info>
                </SingleRoomInfo>
            </SingleRoomSection>
            <RoomExtras>
                <h6>extras</h6>
                <ExtrasList>
                    {extras.map((item, index) => {
                        return <li kry={index}>{item}</li>
                    })}
                </ExtrasList>
            </RoomExtras>
            <Footer />
        </>
    )
}

export default SingleRoom
