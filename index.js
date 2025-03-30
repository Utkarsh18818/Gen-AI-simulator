const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = "your_secret_key";

const generateToken = () => {
    return jwt.sign({}, SECRET_KEY, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ error: "Invalid token" });
        next();
    });
};

const mockDB = {
    customers: [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }],
    orders: [{ id: 101, customer_id: 1, amount: 250 }, { id: 102, customer_id: 2, amount: 300 }]
};

app.post("/query", verifyToken, (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query required" });
    
    if (query.toLowerCase().includes("total sales")) {
        return res.json({ result: "SELECT SUM(amount) FROM orders" });
    } else if (query.toLowerCase().includes("customer list")) {
        return res.json({ result: "SELECT * FROM customers" });
    } else {
        return res.json({ error: "Query not understood" });
    }
});

app.post("/explain", verifyToken, (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query required" });
    
    if (query.toLowerCase().includes("total sales")) {
        return res.json({ explanation: "Calculates total sales from orders table" });
    } else if (query.toLowerCase().includes("customer list")) {
        return res.json({ explanation: "Fetches all customer records" });
    } else {
        return res.json({ explanation: "Cannot explain query" });
    }
});

app.post("/validate", verifyToken, (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query required" });
    
    const isValid = query.toLowerCase().includes("total sales") || query.toLowerCase().includes("customer list");
    return res.json({ valid: isValid });
});

app.get("/token", (req, res) => {
    res.json({ token: generateToken() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
