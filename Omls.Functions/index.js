const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello, Welcome to OMLS Website!!!!!!!!!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});