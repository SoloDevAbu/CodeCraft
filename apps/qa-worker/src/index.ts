import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import qaRoute from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', qaRoute);

app.listen(9093, () => {
    console.log('QA worker service is running on port 9093');
});