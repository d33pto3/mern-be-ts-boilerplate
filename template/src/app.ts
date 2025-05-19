// Core Packages and Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import router from './routes';

dotenv.config();

// App Initialization
const app = express();
const PORT = process.env.PORT || 5000;


// Connect to DB
connectDB();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', router);


// Start the Server
app.listen(PORT, () => {
  console.log(`MERN backend app listening on port ${PORT}`)
})