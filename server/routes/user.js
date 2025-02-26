//** IMPORTS */
import express from "express";
import { searchUser, getUserProfile, followUser, unfollowUser } from "../controllers/user.js";

//** CONFIG */
const router = express.Router();

//** GET USERS */
router.post("/findusers",searchUser);
router.post("/userprofile", getUserProfile);
router.post("/followuser", followUser);
router.post("/unfollowuser", unfollowUser);

export default router;