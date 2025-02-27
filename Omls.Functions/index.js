const express = require('express');

const app = express();
const db = require('./models');
const cors = require('cors');
//const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const PostRouter = require('./routes/Posts');
app.use("/posts", PostRouter);

db.sequelize.sync().then(() => {  
  app.listen(5000, () => {  
    console.log("server running in server port 5000");
   });
});   



// // Middleware
// app.use(express.json());

// // Sample Route
// app.get('/', (req, res) => {
//   res.send('Hello, Welcome to OMLS Website!!!!!!!!!');
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });