import { Request, Response } from "express";
import User from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const loggedInUserId = req.user?._id;
    const fillteredUsers = await User.find({ _id: { $ne: loggedInUserId } });
    res.status(200).json(fillteredUsers);
  } catch (error: any) {
    console.log("Error in getUsers controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
