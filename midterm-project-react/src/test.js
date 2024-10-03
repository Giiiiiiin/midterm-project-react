import { data } from './database';
import { useState } from 'react';
import './App.css';

function DataGrid() {
  const [item,setItem] = useState(data);

  const renderItems = () => {
    return item.map((item) => {
      return (
        <tr>
          <td>{ item.ID }</td>
          <td>{ item.Name }</td>
          <td>{ item.Quantity }</td>
          <td>{ item.Price }</td>
          <td>{ item.Category }</td>
        </tr>
      )
    })
  }

  return (
    <div className="App">
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th><span>ID</span></th>
              <th><span>Name</span></th>
              <th><span>Quantity</span></th>
              <th><span>Price</span></th>
              <th><span>Category</span></th>
            </tr>
          </thead>
          <tbody>
            { renderItems() }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataGrid;
