import React from 'react'
import loadingGif from "../images/gif/loading-arrow.gif"
import styled from "styled-components"

const LoadingDiv = styled.div`
    text-transform: capitalize;
    text-align: center;
    margin-top: 3rem;
`;
const Loading = () => {
    return (
        <LoadingDiv>
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt="loader" />
        </LoadingDiv>
    )
}

export default Loading
