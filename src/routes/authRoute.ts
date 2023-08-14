import express, { NextFunction, Request, Response } from "express";
import { deserializeUser } from '../middleware/deserializedUser';
import { requireUser } from '../middleware/requireUser';
import { validate } from "../middleware/validate";
import { createUserSchema, loginUserSchema } from "../schema/user.schema";
import {
  loginHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerHandler,
} from '../controllers/auth.controller';

const router = express.Router();

// Testing
router.get(
  "/healthChecker",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      status: "success",
      message: "Api is running😂😂👈👈",
    });
  }
);

// Register user route
router.post("/auth/register", validate(createUserSchema), registerHandler);

// Login user route
router.post("/auth/login", validate(loginUserSchema), loginHandler);

// Refresh access token route
router.get('/auth/refresh', refreshAccessTokenHandler);

router.use(deserializeUser, requireUser);

// Logout User
router.get('/auth/logout', logoutHandler);

export default router;
