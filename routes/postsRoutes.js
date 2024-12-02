import express from "express";
import posts from "../posts.js";

const postsRoute = express.Router();

postsRoute.get('/', (req, res) => {
    res.status(200).send({ status: 200, message: 'success', data: posts });
})

export default postsRoute;