import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function DisplayCategory({ itemList }) {
  
  const navigate = useNavigate();

  const [categoryTarget, setCategoryTarget] = useState("");

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setCategoryTarget(event.target.value);
  };

  // Filter item list based on selected category
  const filteredList = itemList
    .filter(item => !categoryTarget || item.category === categoryTarget);

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

      {/* Dropdown for category selection */}
      <label>
        Category:
        <select
          name="category"
          value={categoryTarget}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </label>

      {filteredList.length > 0 ? (
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
            {filteredList.map((item) => (
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
        <p>No items found for the selected category.</p>
      )}
    </div>
  );
}

export default DisplayCategory;
