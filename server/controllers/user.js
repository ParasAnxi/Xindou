//** IMPORTS */
import mongoose from "mongoose";
import User from "../models/User.js";

//** SEARCH USERS */
export const searchUser = async (req, res) => {
  try {
    const { userName } = req.body;
    if (userName !== "") {
      const users = await User.find({
        userName: { $regex: `^${userName}`},
      });
      res.status(200).json({ users: users });
    } else if (userName === "") {
      res.status(200).json({ users: [] });
    }
  } catch (error) {
    res.status(401).json({ error: error });
  }
};