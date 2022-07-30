import React from 'react'
import Room from "./Room";
import styled from "styled-components";

const EmptySearch = styled.div`
text-align: center;
  text-transform: capitalize;
  margin: 2rem 0;
  padding: 1rem;
  letter-spacing: 3px;
`;

const RoomsListSection = styled.section`
 padding: 5rem 0;
`;

const RoomsListCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
}
`;

const RoomsList = ({ rooms }) => {
    //console.log(rooms);
    if (rooms.length === 0) {
        return (
            <EmptySearch>
                <h3>no rooms matched your Search parametres</h3>
            </EmptySearch>
        );
    }
    return <RoomsListSection>
        <RoomsListCenter>
            {rooms.map(item => {
                return <Room key={item.id} room={item} />
            })}
        </RoomsListCenter>
    </RoomsListSection>
}

export default RoomsList
