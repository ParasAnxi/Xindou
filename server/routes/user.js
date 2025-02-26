//** IMPORTS */
import express from "express";
import { searchUser } from "../controllers/user.js";

//** CONFIG */
const router = express.Router();

//** GET USERS */
router.post("/findusers",searchUser);

export default router;