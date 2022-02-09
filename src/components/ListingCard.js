import React, { useState } from "react";

function ListingCard({id, description, image, location, deleteItem}) {

const [ like, setLike ] = useState(true)

function handleLike() {
  setLike(!like)
}


function handleDelete(){
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(() => deleteItem(id))
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
