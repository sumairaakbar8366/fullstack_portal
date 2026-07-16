const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend is Live and Running!");
});

// SIGNUP API 
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Validation check
  if (!name || !email || !password) {
    return res.status(400).send("Please fill all fields");
  }

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error("DB Insert Error:", err); 
      return res.status(500).send("Database Error: " + err.message);
    }
    res.status(200).send("User registered successfully");
  });
});

// LOGIN API
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).send("Login Error: " + err.message);
    }
    if (result.length > 0) {
      res.send("Login successful");
    } else {
      res.send("Invalid credentials");
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
