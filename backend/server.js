import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/error.js';

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(errorHandler);

app.use('/api', authRoutes);


const PORT = process.env.PORT || 1911

mongoose
    .connect(process.env.MONGODB_URL);
console.log("connect to database");
app.listen(PORT, () => {
    console.log(`connect to server on port ${PORT}`);
})