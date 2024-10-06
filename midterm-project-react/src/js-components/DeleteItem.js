import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function DeleteItem({ itemList, setItemList }) {
  
  const navigate = useNavigate();

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
      <Button variant='primary' onClick={() => navigate('/add')}>Add Item</Button>
      <Button variant='primary' onClick={() => navigate('/update')}>Update Item</Button>
      <Button variant='primary' onClick={() => navigate('/delete')}>Remove Item</Button>
      <Button variant='primary' onClick={() => navigate('/category')}>Display by Category</Button>
      <Button variant='primary' onClick={() => navigate('/all')}>Display All</Button>
      <Button variant='primary' onClick={() => navigate('/sort')}>Sort Items</Button>
      <Button variant='primary' onClick={() => navigate('/low-stock')}>Display Low Stock Items</Button>
      <Button variant='primary' onClick={() => navigate('/search')}>Search Item</Button>
      <h2>Delete Item</h2>

      <div>
        <input
          type="text"
          name="id"
          placeholder="Item ID"
          value={deleteID}
          onChange={handleDeleteID}
        />
        <br />
        <button onClick={deleteItem}>Delete Item</button>
        <br />

        {notification && <p style={{ color: "green" }}>{notification}</p>}
      </div>
    </div>
  );
}

export default DeleteItem;
