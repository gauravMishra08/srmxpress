// src/server.js
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'users_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const checkEmail = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmail, [email], async (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.length > 0) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err) => {
      if (err) return res.status(500).json({ message: 'Server error' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // Send back user info along with the token
      res.json({ 
        success: true, 
        user: { username: user.username, email: user.email }, 
        token: 'your-jwt-token-here' 
      });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  });
});


app.get('/user/:id', (req, res) => {
  const sql = 'SELECT username, email FROM users WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(results[0]);
  });
});

app.get('/profile', (req, res) => {
  const userId = req.headers['user-id']; // Assumes a user ID is passed in headers

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  const sql = 'SELECT username, email FROM users WHERE id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(results[0]);
  });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
