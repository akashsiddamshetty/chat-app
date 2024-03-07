import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user.model";
import { IUser } from "../types/types";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - no token provided " });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "Unauthorized - user not found" });
    }

    req.user = user;

    next();
  } catch (error: any) {
    console.log("Error in protectRoute", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
