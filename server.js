const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const app = express();
const port = 3000;

// Configure CORS
const corsOptions = {
  origin: 'http://192.168.1.100:3000', // Ensure no trailing slash here
};
app.use(cors(corsOptions));

// Open SQLite database
const db = new sqlite3.Database('./user_info.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Root route
app.get('/', (req, res) => {
  res.send(
    
  );
});

// Endpoint to get all users
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM user_info'; // Query to fetch all user data

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Send the user data as a JSON response
    res.json(rows);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
