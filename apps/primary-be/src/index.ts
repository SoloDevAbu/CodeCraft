import express from 'express';
import cors from 'cors';

import mainRoute from './route/index'

const app = express();

app.use(cors());

app.use('api/v1', mainRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})