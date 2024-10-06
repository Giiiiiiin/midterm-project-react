import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Buttons */}
      <div>
        <Button variant='primary' onClick={() => navigate('/add')}>Add Item</Button>
        <Button variant='primary' onClick={() => navigate('/update')}>Update Item</Button>
        <Button variant='primary' onClick={() => navigate('/delete')}>Remove Item</Button>
        <Button variant='primary' onClick={() => navigate('/category')}>Display by Category</Button>
        <Button variant='primary' onClick={() => navigate('/all')}>Display All</Button>
        <Button variant='primary' onClick={() => navigate('/sort')}>Sort Items</Button>
        <Button variant='primary' onClick={() => navigate('/low-stock')}>Display Low Stock Items</Button>
        <Button variant='primary' onClick={() => navigate('/search')}>Search Item</Button>
      </div>
    </div>
  );
}

export default Dashboard;