import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mainRoute from './route/index'

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', mainRoute);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})