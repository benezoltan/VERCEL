const express = require("express");
const app = express();

// Egyszerű route
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

// Vercel port beállítása
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
