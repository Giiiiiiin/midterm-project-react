import '../css-components/main.css';
import React, { useState } from 'react';
import Dashboard from './Dashboard';

function DisplayCategory({ itemList }) {

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
      <Dashboard />
      <h3 className='mb-5'>Display List By Category</h3>

      {/* Dropdown for category selection */}
      <label className='mb-5'>
        Category: &nbsp;
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
        <table border="1" cellPadding="5" align='center' className='mb-5'>
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
