const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${new Date().toISOString()}`);
    next();
});

app.use((req, res, next) => {
    console.log("Global Middleware 2");
    next();
});

const routeMiddleware1 = (req, res, next) => {
    console.log("Route Middleware 1");
    next();
};

const routeMiddleware2 = (req, res, next) => {
    console.log("Route Middleware 2");
    next();
};

app.get("/", (req, res) => {
    console.log("Final Handler");
    res.send("Home Route");
});

app.get("/users", routeMiddleware1, routeMiddleware2, (req, res) => {
    console.log("Users Handler");
    res.json({ message: "Users Route" });
});

app.get("/products", (req, res, next) => {
    console.log("Products Middleware");
    next();
}, (req, res) => {
    console.log("Products Handler");
    res.json({ message: "Products Route" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});