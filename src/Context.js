import React, { createContext, useState, useEffect } from 'react'
import items from "./data";

const RoomContext = createContext();

function RoomProvider(props) {
  const [data, setData] = useState({
    rooms: [],
    sortedrooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  });

  useEffect(() => {
    let rooms = formatData(items);
    // console.log(rooms);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    setData({
      ...data,
      rooms,
      featuredRooms,
      sortedrooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    })
  }, [])

  const formatData = (items) => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let rooms = { ...item.fields, images, id };
      return rooms;
    });
    return tempItems;
  }

  const getRoom = (slug) => {
    let tempRooms = [...data.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  }

  const handleChange = (event) => {
    const type = event.target.type
    const name = event.target.name
    const value = event.target.value
    console.log(type, name, value);
    // price = parseInt(price);
    let newSortedRooms = data.rooms;
    if (name === 'type' && value !== 'all') {
      newSortedRooms = data.rooms.filter((room) => room[name] === value);
    }
    if (name === 'capacity' && value !== 1) {
      newSortedRooms = data.rooms.filter((room) => room[name] >= value);
    }
    // filter by price
    if (name === 'price') {
      let price = parseInt(value);
      newSortedRooms = data.rooms.filter(room => room[name] <= price);
    }
    if (name === 'breakfast') {
      newSortedRooms = data.rooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (name === 'pets') {
      newSortedRooms = data.rooms.filter(room => room.pets === true);
    }
    if (name === 'clear') {
      newSortedRooms = data.rooms;
    }
    
      // if(name==='minSize') {
      //   var minValue = value;       
      // }
      // if(name==='maxSize') {
      //   var maxValue = value ;
          
      // }
    //newSortedRooms = data.rooms.filter(room => room.size >= minValue && room.size <= maxValue);
    // if(name==='size') {
    
    // }
    //filter by size
    // 
    //filter by breakfast



    setData(
      {
        ...data,
        [name]: value,
        sortedrooms: newSortedRooms
      });
    // filterRooms(data);  //Currently no need of this.
  }
  const ClearFilter = () => {
    console.log("heelo");
    let newSortedRooms = data.rooms;
    setData(
      {
        ...data,
       sortedrooms: newSortedRooms
      });
  }
  return (
    <>
      <RoomContext.Provider value={{ data, getRoom, handleChange,ClearFilter }}>
        {props.children}
      </RoomContext.Provider>
    </>
  );
}

const RoomConsumer = RoomContext.Consumer;



export { RoomProvider, RoomConsumer, RoomContext };
