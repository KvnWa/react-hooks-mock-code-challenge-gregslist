import React, { useState } from "react";

function Search({ search, setSearch, setData}) {

  const [ query, setQuery ] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(query)
  }

  // function sortArray(type) {
  //   const types = {
  //     location: 'location'
  //   }
  //   const sortLocation= types[type]
  //   const sorted = location.sort((a,b) => b[sortLocation] - a[sortLocation]);
  //   setData(sorted)
  // }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
      {/* <select onChange={() => sortArray(e.target.value)}>Sort By
        <option> Ascending Location</option>
        <option> Descending Location</option>
      </select> */}
    </form>
  );
}

export default Search;
