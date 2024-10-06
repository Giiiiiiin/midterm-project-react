import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function UpdateItem({ itemList, setItemList }) {
  
  const navigate = useNavigate();

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
      <Button variant='primary' onClick={() => navigate('/add')}>Add Item</Button>
      <Button variant='primary' onClick={() => navigate('/update')}>Update Item</Button>
      <Button variant='primary' onClick={() => navigate('/delete')}>Remove Item</Button>
      <Button variant='primary' onClick={() => navigate('/category')}>Display by Category</Button>
      <Button variant='primary' onClick={() => navigate('/all')}>Display All</Button>
      <Button variant='primary' onClick={() => navigate('/sort')}>Sort Items</Button>
      <Button variant='primary' onClick={() => navigate('/low-stock')}>Display Low Stock Items</Button>
      <Button variant='primary' onClick={() => navigate('/search')}>Search Item</Button>
      <h2>Update Item</h2>

      <div>
        <input
          type="text"
          name="id"
          placeholder="Item ID"
          value={updateID}
          onChange={handleUpdateID}
        />
        <br />
        <select
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
          type="number"
          name="updateValue"
          placeholder="New Value"
          value={updateValue}
          onChange={handleUpdateValue}
        />
        <br />
        <button onClick={updateItem}>Update Item</button>
        <br />

        {notification && <p style={{ color: "green" }}>{notification}</p>}
      </div>
    </div>
  );
}

export default UpdateItem;
