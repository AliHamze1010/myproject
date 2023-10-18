const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bcrypt = require('bcrypt');
const { MongoClient } = require("mongodb");
require('dotenv').config();  // Ensure environment variables are loaded

const app = express();
const saltRounds = 10;

// Middleware
app.use(cors({ origin: '*' })); 
app.use(express.json());

// MongoDB setup
const dbUrl = process.env.DB_URL || "mongodb+srv://bob:bobby@cluster0.fg5zdv9.mongodb.net/?retryWrites=true&w=majority";
let db;

async function initializeDatabase() {
    const client = new MongoClient(dbUrl);

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db("project");
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
}
initializeDatabase();

app.get('/matches', (req, res) => {
   axios
      .get(`https://api.sportmonks.com/v3/football/fixtures?api_token=75Q1643blJLN0aXzYUXB6tOy5NJvyjnETdVDZlwleS4eEkQOfSaFBT6DgXva&include=scores`)
      .then((response) => {
         res.json(response.data);
      })
      .catch((error) => {
         console.log(error);
         res.status(500).json({ message: "Failed to fetch matches." });
      });
});

app.post('/signup', async (req, res) => {
    if (!db) {
        return res.status(500).json({ message: "Database not initialized." });
    }
    
    try {
        const { username, email, password } = req.body;
        const existingUser = await db.collection("users").findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = {
            username,
            email,
            password: hashedPassword
        };

        await db.collection("users").insertOne(newUser);
        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});