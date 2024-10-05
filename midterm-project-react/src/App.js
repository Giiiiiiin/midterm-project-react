import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DisplayAll from './DisplayAll';
import AddItem from './AddItem';
import './App.css';


function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <div>
      <b><h1>INVENTORY MANAGEMENT SYSTEM</h1></b>
      <i><h4>The Inventory That Manages Your Grades and Sanity</h4></i>
      <div>
        <Button variant='primary'>Add Item</Button>
        <Button variant='primary'>Update Item</Button>
        <Button variant='primary'>Remove Item</Button>
        <Button variant='primary'>Display by Category</Button>
        <Button variant='primary'>Display All</Button>
        <Button variant='primary'>Sort Items</Button>
        <Button variant='primary'>Display Low Stock Items</Button>
        <Button variant='primary'>Search Item</Button>
      </div>
      <Router>

          <Routes>
          </Routes>
        </Router>
      {/*<DisplayAll /> <AddItem /> */} 
      <AddItem itemList={itemList} setItemList={setItemList} />
      <DisplayAll itemList={itemList} setItemList={setItemList} />
    </div>
  );
}

export default App;