import '../css-components/main.css'
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Button from 'react-bootstrap/Button';

function UpdateItem({ itemList, setItemList }) {
  

  const [notification, setNotification] = useState("");
  const [updateID, setUpdateID] = useState("");
  const [updateTarget, setUpdateTarget] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [previousValue, setPreviousValue] = useState(null);
  
  const handleUpdateID = (event) => {
    setUpdateID(event.target.value);
  }
  const handleUpdateTarget = (event) => {
    setUpdateTarget(event.target.value);
  }
  const handleUpdateValue = (event) => {
    setUpdateValue(event.target.value);
  }

  // Function to update Quantity or Price of an item based on ID
  const updateItem = () => {
    // Check if ID, update target, and value are valid
    if (
      updateID.trim() !== "" &&
      updateTarget &&
      !isNaN(updateValue) &&
      parseFloat(updateValue) > 0
    ) {
      const targetItem = itemList.some(item => item.id === updateID);
      
      if (!targetItem) {
        alert("Item not found! Please use an existing ID.");
        return;
      }

      const updatedItemList = itemList.map(item => {
        if (item.id === updateID) {

          // Capture previous value
          const previous = item[updateTarget.toLowerCase()];
          setPreviousValue(previous);

          // Update either Quantity or Price
          const updatedItem = {
            ...item,
            [updateTarget.toLowerCase()]: updateTarget === "Quantity" 
              ? parseInt(updateValue) 
              : parseFloat(updateValue)
          };
          // Set notification to display item update confirmation
          setNotification(`${updateTarget} of Item "${item.name}" is updated from ${previous} to ${updateValue}`);
          return updatedItem;
        }
        return item;
      });

      setItemList(updatedItemList);
    } else {
      alert("Please enter a valid ID, select Quantity or Price, and enter a positive number.");
    }
  };

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

      <h2 className='mb-5'>Update Item</h2>

      <div>
        <input
          className='mb-3'
          type="text"
          name="id"
          placeholder="Item ID"
          value={updateID}
          onChange={handleUpdateID}
        />
        <br />
        <select
          className='mb-3'
          name="target"
          value={updateTarget}
          onChange={handleUpdateTarget}
        >
          <option value="">Select Target</option>
          <option value="Quantity">Quantity</option>
          <option value="Price">Price</option>
        </select>
        <br />
        <input
          className='mb-3'
          type="number"
          name="updateValue"
          placeholder="New Value"
          value={updateValue}
          onChange={handleUpdateValue}
        />
        <br />
        <Button variant='success' onClick={updateItem}>Update Item</Button>
        <br />

        {notification && <p style={{ color: "green" }}>{notification}</p>}
      </div>
    </div>
  );
}

export default UpdateItem;
