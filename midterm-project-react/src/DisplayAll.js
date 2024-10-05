import React from 'react';
import App from './App';

function DisplayAll({ itemList, setItemList }) {
  
  // Function to remove an item from the list
  const deleteItem = (id) => {
    const updatedList = itemList.filter(item => item.id !== id);
    setItemList(updatedList);  // Update the itemList using the passed setter function
  };

  return (
    <div>
      <h3>Item List</h3>
      {itemList.length > 0 ? (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
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
                <td>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
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
