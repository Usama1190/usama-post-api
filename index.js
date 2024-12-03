import express from "express";
import dotenv from 'dotenv';
import postsRoute from "./routes/postsRoutes.js";

const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.status(200).send('Welcome to Usama Posts APIs. To visit enter /posts');
})

app.use('/posts', postsRoute);

app.get('*', () => {
    res.status(404).send('Route not found!')
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})