import express from "express";
import {
  getAllUsersHandler,
  getMeHandler,
} from '../controllers/user.controller';
import { deserializeUser } from '../middleware/deserializedUser';
import { requireUser } from '../middleware/requireUser';
import { restrictTo } from '../middleware/restrictTo';

const router = express.Router();

router.use(deserializeUser, requireUser);

// Admin Get Users route
router.get('/users', restrictTo('admin'), getAllUsersHandler);

// Get Profile
router.get('/user/me', getMeHandler);

export default router;