import '../css-components/main.css'
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Button from 'react-bootstrap/Button';

function AddItem({ itemList, setItemList, newItem, setNewItem }) {

  const [notification, setNotification] = useState("");

  // Function to handle input change for any field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  // Function to add a new item to the list with validation
  const addItem = () => {
    const { id, name, quantity, price, category } = newItem;

    if (
      id.trim() !== "" &&
      name.trim() !== "" &&
      category.trim() !== "" &&
      !isNaN(quantity) &&
      !isNaN(price) &&
      quantity > 0 &&
      price > 0
    ) {
      // const parsedId = parseInt(id);
      const isDuplicateId = itemList.some(item => item.id === id);
      
      if (isDuplicateId) {
        alert("This ID already exists. Please use a unique ID.");
        return;
      }

      const newItemFilter = {
        //id: parsedId,
        id,
        name,
        quantity: parseInt(quantity),
        price: parseFloat(price),
        category
      };

      setItemList((prevList) => [...prevList, newItemFilter]);
      setNewItem({ id: "", name: "", quantity: "", price: "", category: "" });

      // Set the notification message
      setNotification(`Item "${name}" added successfully!`);
    } else {
      alert("Please fill out all fields correctly. Quantity and Price must be valid numbers.");
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
      <h2 className='mb-5'>Add Item</h2>

      {/* Input form for item details */}
      <div>
        <input
          className='mb-3'
          type="text"
          name="id"
          placeholder="Item ID"
          value={newItem.id}
          onChange={handleInputChange}
        />
        <br />
        <input
          className='mb-3'
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          className='mb-3'
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        <br />
        <input
          className='mb-3'
          type="number"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleInputChange}
        />
        <br />
        <select
          className='mb-3'
          name="category"
          value={newItem.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <br />
        <Button variant='success' onClick={addItem}>Add Item</Button>
        <br />

        {/* Display notification message */}
        {notification && <p style={{ color: "green" }}>{notification}</p>}
      </div>
    </div>
  );
}

export default AddItem;
