import React, { useState } from 'react';
import App from './App';

function ItemManager({ itemList, setItemList }) {
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
    category: ""
  });

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

    // Validate that all fields are filled, and that quantity and price are valid numbers
    if (
      id.trim() !== "" &&
      name.trim() !== "" &&
      category.trim() !== "" &&
      !isNaN(quantity) &&
      !isNaN(price) &&
      quantity > 0 &&
      price > 0
    ) {
      const parsedId = parseInt(id);

      // Check if the ID already exists in the item list
      const isDuplicateId = itemList.some(item => item.id === parsedId);
      
      if (isDuplicateId) {
        alert("This ID already exists. Please use a unique ID.");
        return;
      }

      // Add the new item to the list
      const newItemWithId = {
        id: parsedId,  // Use the user-provided ID
        name,
        quantity: parseInt(quantity),  // Ensure quantity is an integer
        price: parseFloat(price),      // Ensure price is a valid float
        category
      };

      setItemList((itemList) => [...itemList, newItemWithId]);
      
      // Clear inputs after adding the item
      setNewItem({ id: "", name: "", quantity: "", price: "", category: "" });
    } else {
      alert("Please fill out all fields correctly. Quantity and Price must be valid numbers.");
    }
  };

  return (
    <div>
      <h2>Item Manager</h2>

      {/* Input form for item details */}
      <div>
        <input
          type="number"
          name="id"
          placeholder="Item ID"
          value={newItem.id}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleInputChange}
        />
        <br />
        {/* Dropdown for category selection */}
        <select
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
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default ItemManager;
