require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString} ${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.send('My Week 2 API!');
});

app.post('/user', (req, res) => {
  const { name, email } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({error: 'name and email required!'});
  }
  res.send(`${Hello} name`);
});

app.get('/user/:id', (req, res) => {
  res.send(`User ${req.params.id} profile`);
});

app.listen(PORT, (err) => {
  if(err) {
    console.error(err);
    return;
  }
  console.log(`Running on port: ${PORT}`);
})