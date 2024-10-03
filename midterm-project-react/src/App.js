import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import DataGrid from './test';
import './App.css';

function App() {
  return (
    <div>
      <h1>INVENTORY MANAGEMENT SYSTEM</h1>
      <div>
        <Button variant='primary'>ADD</Button>
      </div>
      
      <DataGrid />
    </div>
  );
}

export default App;