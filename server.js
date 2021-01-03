const express = require ('express');
//import express from 'express'; TODO: fix package.json to allow typescript
const connectDB = require('./config/db');

const app = express();

// Connect db
connectDB();

// Init middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));