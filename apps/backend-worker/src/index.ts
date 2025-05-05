import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import backendRoute from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', backendRoute);

app.listen(9091, () => {
    console.log('Manager service is running on port 9090');
})