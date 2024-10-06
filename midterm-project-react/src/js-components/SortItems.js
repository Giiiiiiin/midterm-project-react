import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SortItems({ itemList }) {
  
  const navigate = useNavigate();

  const [sortField, setSortField] = useState("");  // To select between Price or Quantity
  const [sortOrder, setSortOrder] = useState("");  // To select ascending or descending order

  // Handle sort field selection (Price or Quantity)
  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
  };

  // Handle sort order selection (Ascending or Descending)
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Sort items based on selected field (Price or Quantity) and order
  const sortedList = [...itemList].sort((a, b) => {
    if (sortField && sortOrder) {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      if (sortOrder === "Ascending") {
        return fieldA - fieldB;
      } else if (sortOrder === "Descending") {
        return fieldB - fieldA;
      }
    }
    return 0; // No sorting if no field or order is selected
  });

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
      <h3>Item List</h3>

      {/* Dropdown for selecting sort field (Price or Quantity) */}
      <label>
        Sort By:
        <select name="sortField" value={sortField} onChange={handleSortFieldChange}>
          <option value="">Select Field</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </label>

      {/* Dropdown for selecting sort order (Ascending or Descending) */}
      <label>
        Order:
        <select name="order" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="">Select Order</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </label>

      {/* Display the sorted list in a table */}
      {sortedList.length > 0 ? (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sortedList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}

export default SortItems;
