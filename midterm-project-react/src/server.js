const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Route to get the items from the JSON file
app.get('/items', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      res.status(500).send("Error reading data");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Route to add new items to the JSON file
app.post('/add-item', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      res.status(500).send("Error reading data");
      return;
    }
    
    // Parse existing data, add new item, then write back
    const items = JSON.parse(data);
    items.push(req.body);

    fs.writeFile('data.json', JSON.stringify(items, null, 2), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
        res.status(500).send("Error writing data");
      } else {
        res.send("Item added successfully");
      }
    });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
