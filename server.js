const express = require("express");
const path = require("path");

const app = express();
const PORT = 3743;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "services.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// 404
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Running http://localhost:${PORT}`);
});