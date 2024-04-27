const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/User');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', userRoutes);

module.exports = app;