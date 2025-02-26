//** IMPORTS */
import express from "express";
import { searchUser, getUserProfile } from "../controllers/user.js";

//** CONFIG */
const router = express.Router();

//** GET USERS */
router.post("/findusers",searchUser);
router.post("/userprofile", getUserProfile);

export default router;