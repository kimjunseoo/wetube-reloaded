import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);

// Handle Request

const handleHome = (req, res) => {
  return res.send("<h1> This page is home </h1>");
};

const handleAbout = (req, res) => {
  return res.send("<h1> This page is /about </h1>");
};

const handleContact = (req, res) => {
  return res.send("<h1> This page is /contact </h1>");
};

const handleLogin = (req, res) => {
  return res.send("<h1> This page is /login </h1>");
};

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);