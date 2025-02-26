//** IMPORTS */
import express from "express";
import {
  loginUser,
  registerUser,
} from "../controllers/auth.js";

//** CONFIG */
const router = express.Router();

//** REGISTER */
router.post("/register",registerUser);
//** LOGIN */
router.post("/login",loginUser);
//** REFRESH USER */
router.post("/refreshuser", refreshUser);
//** EMAIL AND PASSWORD */
router.post("/resetpasswordlink",sendLink);
router.post("/changepassword/:id/:token",changePassword);

export default router;