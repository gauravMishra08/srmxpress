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
  password: 'stillR@nger@1406',
  database: 'user_db' 
});


db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});


app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;


  const checkEmail = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmail, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    try {

      const hashedPassword = await bcrypt.hash(password, 10);

      const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'Server error' });
        }
        return res.status(201).json({ message: 'User registered successfully' });
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ message: 'Password hashing failed' });
    }
  });
});


app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

