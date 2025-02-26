//** IMPORTS */
import express from "express";
import { emailExist, userNameExist } from "../controllers/exist.js";

//** ROUTER */

const router = express.Router();

router.post("/emailExist",emailExist);
router.post("/userNameExist",userNameExist);

export default router;