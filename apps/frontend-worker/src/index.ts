import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import frontendRoute from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', frontendRoute);

app.listen(9092, () => {
    console.log('Frontend worker service is running on port 9092');
});