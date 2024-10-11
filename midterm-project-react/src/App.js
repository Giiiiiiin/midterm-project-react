import './css-components/App.css';
import './css-components/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayAll from './js-components/DisplayAll';
import AddItem from './js-components/AddItem';
import SortItems from './js-components/SortItems';
import DisplayCategory from './js-components/DisplayCategory';
import DisplayLow from './js-components/DisplayLow';
import UpdateItem from './js-components/UpdateItem';
import DeleteItem from './js-components/DeleteItem';
import SearchItem from './js-components/SearchItem';
import Dashboard from './js-components/Dashboard';

function App() {
  const [itemList, setItemList] = useState([]);
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
    category: ""
  });

  return (
    <body>
    <div className='App'>
      <div className='mt-5 mb-5'>
        <b><h1>INVENTORY MANAGEMENT SYSTEM</h1></b>
        <i><h4>The Inventory That Manages Your Grades and Sanity</h4></i>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddItem itemList={itemList} setItemList={setItemList} newItem={newItem} setNewItem={setNewItem} />} />
          <Route path="/update" element={<UpdateItem itemList={itemList} setItemList={setItemList} />} />
          <Route path="/delete" element={<DeleteItem itemList={itemList} setItemList={setItemList} />} />
          <Route path="/category" element={<DisplayCategory itemList={itemList} setItemList={setItemList} />} />
          <Route path="/all" element={<DisplayAll itemList={itemList} setItemList={setItemList} />} />
          <Route path="/sort" element={<SortItems itemList={itemList} setItemList={setItemList} />} />
          <Route path="/low-stock" element={<DisplayLow itemList={itemList} setItemList={setItemList} />} />
          <Route path="/search" element={<SearchItem itemList={itemList} setItemList={setItemList} />} />
        </Routes>
      </Router>
    </div>
    </body>
  );
}

export default App;
