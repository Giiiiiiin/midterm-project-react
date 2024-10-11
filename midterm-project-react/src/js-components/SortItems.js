import '../css-components/main.css';
import React, { useState } from 'react';
import Dashboard from './Dashboard';

function SortItems({ itemList }) {

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
      <Dashboard />
      <h3 className='mb-5'>Sort Item List</h3>

      {/* Dropdown for selecting sort field (Price or Quantity) */}
      <label className='mb-3'>
        Sort By: &nbsp;
        <select name="sortField" value={sortField} onChange={handleSortFieldChange}>
          <option value="">Select Field</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </label>
      <br />
      {/* Dropdown for selecting sort order (Ascending or Descending) */}
      <label className='mb-3'>
        Order: &nbsp; &nbsp;
        <select name="order" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="">Select Order</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </label>

      {/* Display the sorted list in a table */}
      {sortedList.length > 0 ? (
        <table border="1" cellPadding="5" align='center' className='mt-5 mb-5'>
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
