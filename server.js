const express = require("express");
const app = express();

// Egyszerű route
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

// Vercel port beállítása
const port = process.env.PORT || 3000;

// Remove explicit listening when deploying to Vercel; export the app so the @vercel/node builder can handle incoming requests
module.exports = app;
