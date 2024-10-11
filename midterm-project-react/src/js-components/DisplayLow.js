import '../css-components/main.css';
import React from 'react';
import Dashboard from './Dashboard';

function DisplayLow({ itemList }) {

  // Filter item list if quanlity is 5 or lower
  const filteredAndSortedList = itemList
    .filter(item => item.quantity <= 5);

  return (
    <div>
      <Dashboard />
      <h3 className='mb-5'>Display Low Stock</h3>
      {filteredAndSortedList.length > 0 ? (
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
            {filteredAndSortedList.map((item) => (
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
        <p>No items with low stock found.</p>
      )}
    </div>
  );
}

export default DisplayLow;
