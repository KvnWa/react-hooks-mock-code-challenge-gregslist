import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [ listings, setListings ] = useState([])
const [ search, setSearch ] = useState('')


useEffect(() => {
  fetch('http://localhost:6001/listings')
  .then(res => res.json())
  .then(data => setListings(data))
},[])


function deleteItem(deleted) {
  const deleteUp = listings.filter(list => { return list.id !== deleted})
  setListings(deleteUp)
}

const filterSearch = listings.filter(list => { return list.description.toLowerCase().includes(search.toLowerCase())})



  return (
    <div className="app">
      <Header setSearch={setSearch} search={search}/>
      <ListingsContainer listings={filterSearch} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
