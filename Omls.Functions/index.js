const express = require('express');
const cors = require('cors');
const db = require('./models');

// test connection
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Connected to Azure MySQL using Sequelize');
  })
  .catch(err => {
    console.error('❌ MySQL connection error:', err.message);
  });
  db.sequelize.sync({ alter: true });

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Routers
const PostRouter = require('./routes/Posts');
const ContactRouter = require('./routes/Contact');

app.use('/contact', ContactRouter);
app.use('/posts', PostRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
