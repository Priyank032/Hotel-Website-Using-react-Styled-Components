import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
import styled from "styled-components";

const FilterContainer = styled.section`
padding: 5rem 0;
`;

const FilterForm = styled.form`
 width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;

  @media screen and (min-width: 776px) {
    width: 70vw;
}
@media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
}
`;

const FormGroup = styled.div`
 text-transform: capitalize;
 label{
  display: block;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
 }
`;

const SelectFormControl = styled.select`
width: 100%;
  background: transparent;
  font-size: 1rem;
`; 

const SingleExtra = styled.div`
label{
  display: inline-block;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
`;
const BtnPrimary = styled.button`
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
// get all unique values
const getUnique = (items, value) => {
    //console.log(items);
    return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
    // react hooks
    const context = useContext(RoomContext);
    console.log(context);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        breakfast,
        ClearFilter,
        pets
    } = context;

    // get unique types
    let types = getUnique(rooms, "type");
    // console.log(rooms);
    //console.log(types);

    // add all
    types = ["all",...types];
    // map to jsx
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
    return (
        <FilterContainer>
            <Title title="search rooms" />
            <FilterForm>
                {/* select type */}
                <FormGroup >
                    <label htmlFor="type">room type</label>
                    <SelectFormControl
                        name="type"
                        id="type"
                        onChange={handleChange}
                        className="form-control"
                        value={type}
                    >
                        {types}
                    </SelectFormControl>
                </FormGroup>
                {/* end of select type */}
        {/* guests  */}
        <FormGroup>
          <label htmlFor="capacity">Guests</label>
          <SelectFormControl
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </SelectFormControl>
        </FormGroup>
        {/* end of guests */}
        {/* room price */}
        <FormGroup >
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={600}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </FormGroup>
        {/* end of room price*/}
         {/* extras */}
         <FormGroup>
          <SingleExtra>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </SingleExtra>
          <SingleExtra>
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </SingleExtra>
        </FormGroup>
        {/* end of extras type */}
        {/* size */}
        <FormGroup>
          <BtnPrimary onClick={ClearFilter}>Clear All Filter</BtnPrimary>         
        </FormGroup>
        {/* end of select type */}
       
            </FilterForm>
        </FilterContainer>
    );
};

export default RoomsFilter;