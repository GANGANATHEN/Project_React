const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sha2',
    database: 'my_database',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Signup API
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, hashedPassword], (err) => {
        if (err) {
            return res.status(500).send({ message: 'Error signing up' });
        }
        res.send({ success: true, message: 'User registered' });
    });
});

// Login API
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        const validPassword = await bcrypt.compare(password, results[0].password);
        if (validPassword) {
            const token = jwt.sign({ email }, 'secret_key', { expiresIn: '1h' });
            return res.send({ success: true, token });
        }
        res.status(401).send({ message: 'Invalid credentials' });
    });
});

// Fetch all users API
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send({ message: 'Error fetching users' });
        }
        res.send(results); // Send the user data as a response
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
