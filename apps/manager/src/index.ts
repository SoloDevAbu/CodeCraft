import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import managerRoute from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', managerRoute);

app.listen(9090, () => {
    console.log('Manager service is running on port 9090');
})