import React from 'react'
import styled from "styled-components";

const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 4rem;

    h4{
      font-size: 2rem;
      letter-spacing: 3px;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
`;

const Divison = styled.div`
  width: 5rem;
  height: 5px;
  margin: 0 auto;
  background: #af9a7d;
`;

const Title = ({ title }) => {
  return (
    <SectionTitle>
      <h4>{title}</h4>
      <Divison />
    </SectionTitle>
  )
}

export default Title
