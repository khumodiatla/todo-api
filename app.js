const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/User');
const todoRoutes = require('./routes/Todo');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', userRoutes);
app.use('/', todoRoutes);

module.exports = app;