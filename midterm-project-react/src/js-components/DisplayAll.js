import '../css-components/main.css';
import React from 'react';
import Dashboard from './Dashboard';

function DisplayAll({ itemList, setItemList }) {

  return (
    <div>
      <Dashboard />
      <h3 className='mb-5'>Display Item List</h3>
      {itemList.length > 0 ? (
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
            {itemList.map((item) => (
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
        <p>No items added yet.</p>
      )}
    </div>
  );
}

export default DisplayAll;
