const express = require('express');

const snackRouter = require('./routers/snacks');

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Snack Rankings",
    description: "Find and rate the best snacks ever!"
  })
})

module.exports = app;
