const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

//Route Imports
const userRoutes = require('./routes/userRoutes')

//Express Defualt
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
require('dotenv').config();

//db Connect
require('./db/connect')

//Routes
app.use('/users', userRoutes);












app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

