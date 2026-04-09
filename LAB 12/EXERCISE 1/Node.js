

const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory data (acts like DB)
let users = [
    { id: 1, name: "Shanmukh" },
    { id: 2, name: "Rahul" }
];




app.get("/users", (req, res) => {
    res.json(users);
});


app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});


app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});


app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});


app.delete("/users/:id", (req, res) => {
    const exists = users.some(u => u.id == req.params.id);

    if (exists) {
        users = users.filter(u => u.id != req.params.id);
        res.send("User deleted");
    } else {
        res.status(404).send("User not found");
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});