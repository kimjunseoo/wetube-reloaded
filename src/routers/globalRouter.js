import express from "express";
import { join, login } from "../controllers/userController";
import { search, trending } from "../controllers/videoController";



// Global Router(Root Router)
const globalRouter = express.Router();

const handleHome = (req, res) => {
  res.send("Home");
};

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;