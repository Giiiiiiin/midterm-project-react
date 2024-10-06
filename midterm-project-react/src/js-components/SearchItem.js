import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SearchItem({ itemList }) {

  const navigate = useNavigate();

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
      <Button variant='primary' onClick={() => navigate('/add')}>Add Item</Button>
      <Button variant='primary' onClick={() => navigate('/update')}>Update Item</Button>
      <Button variant='primary' onClick={() => navigate('/delete')}>Remove Item</Button>
      <Button variant='primary' onClick={() => navigate('/category')}>Display by Category</Button>
      <Button variant='primary' onClick={() => navigate('/all')}>Display All</Button>
      <Button variant='primary' onClick={() => navigate('/sort')}>Sort Items</Button>
      <Button variant='primary' onClick={() => navigate('/low-stock')}>Display Low Stock Items</Button>
      <Button variant='primary' onClick={() => navigate('/search')}>Search Item</Button>

      <h2>Search Item</h2>

      <div>
        <input
          type="text"
          name="id"
          placeholder="Search Item ID"
          value={searchID}
          onChange={handleSearchID}
        />

        {searchResults.length > 0 || searchID === "" ? (
          itemList.length > 0 ? (
          <table border="1" cellPadding="5">
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
