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
//** USER PROFILE */
export const getUserProfile = async (req, res) => {
  try {
    const { userName } = req.body;
    const user = await User.findOne({ userName: userName });
    if (!user) res.status(404).json({ error: "User Not Found!" });
    user.email = undefined;
    user.password = undefined;
    user.resetPasswordToken = undefined;
    user.notifications = undefined;
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(404).status({ error: error });
  }
};