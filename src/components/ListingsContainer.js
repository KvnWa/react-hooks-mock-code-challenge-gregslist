import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteItem }) {


  const listingsList = listings.map(list => { return <ListingCard deleteItem={deleteItem} key={list.id} description={list.description} image={list.image} location={list.location} id={list.id} /> })

  return (
    <main>
      <ul className="cards">
        {listingsList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
