import '../css-components/main.css';
import React, { useState } from 'react';
import Dashboard from './Dashboard';

function SearchItem({ itemList }) {

  const [searchID, setSearchID] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchID = (event) => {
    const id = event.target.value;
    setSearchID(id);

    // Filter items by the search ID
    if (id.trim() !== "") {
      const match = itemList.filter((item) => item.id === id);
      setSearchResults(match);
    } else {
      // Reset search results if the search input is cleared
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Dashboard />

      <h2 className='mb-5'>Search Item</h2>

      <div>
        <input
          className='mb-5'
          type="text"
          name="id"
          placeholder="Search Item ID"
          value={searchID}
          onChange={handleSearchID}
        />

        {searchResults.length > 0 || searchID === "" ? (
          itemList.length > 0 ? (
          <table border="1" cellPadding="5" align='center' className='mb-5'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {(searchID === "" 
                ? itemList 
                : searchResults).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.category}</td>
                  </tr>
              ))}
            </tbody>
          </table>
          ) : (
            <p>
              No items added yet.
            </p>
          )
        ) : (
          <p>Item not found! No items found for ID: {searchID}</p>
        )}
      </div>
    </div>
  );
}

export default SearchItem;
