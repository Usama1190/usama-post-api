import express from "express";
import dotenv from 'dotenv';
import postsRoute from "./routes/postsRoutes.js";

const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.status(200).send('Welcome to Usama Posts APIs');
})

app.use('/posts', postsRoute);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})