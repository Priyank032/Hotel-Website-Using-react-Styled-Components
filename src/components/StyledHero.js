import defaultImg from "../images/room-1.jpeg";
import styled from  "styled-components";

const  StyledHero = styled.header`
    min-height:60vh;
    background:url(${props => (props.img ? props.img : defaultImg )});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default StyledHero
