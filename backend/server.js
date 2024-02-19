import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', (req, res) => {
    res.send("salam olsun cemi yaxsilara")
})


const PORT = process.env.PORT || 1911

mongoose
    .connect(process.env.MONGODB_URL);
console.log("connect to database");
app.listen(PORT, () => {
    console.log(`connect to server on port ${PORT}`);
})