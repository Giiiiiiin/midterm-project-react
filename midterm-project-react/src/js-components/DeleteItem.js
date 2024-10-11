import '../css-components/main.css';
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Button from 'react-bootstrap/Button';

function DeleteItem({ itemList, setItemList }) {

  const [notification, setNotification] = useState("");
  const [deleteID, setUpdateID] = useState("");

  const handleDeleteID = (event) => {
    setUpdateID(event.target.value);
  }
  
  // Function to update Quantity or Price of an item based on ID
  const deleteItem = () => {
      const targetItem = itemList.some(item => item.id === deleteID);
      
      if (!targetItem) {
        alert("Item not found! Please use an existing ID.");
        return;
      }
      
      itemList.map(item => {
        if (item.id === deleteID) {
          const updatedList = itemList.filter(item => item.id !== deleteID);
          setNotification(`Item "${item.name}" has been removed from the inventory`);
          setItemList(updatedList);  // Update the itemList using the passed setter function 
        }
      });
    } 

  // Clear the notification message after a few seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 5000); // Clear after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div>
      <Dashboard />
      <h2 className='mb-5'>Delete Item</h2>

      <div>
        <input
          className='mb-3'
          type="text"
          name="id"
          placeholder="Item ID"
          value={deleteID}
          onChange={handleDeleteID}
        />
        <br />
        <Button variant='danger' onClick={deleteItem}>Delete Item</Button>
        <br />

        {notification && <p style={{ color: "green" }}>{notification}</p>}
      </div>
    </div>
  );
}

export default DeleteItem;
