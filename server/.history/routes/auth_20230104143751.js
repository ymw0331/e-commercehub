//Authentication related routes store here
import express from "express";
const router = express.Router();

//controllers
import { users } from '../controllers/auth';

router.get( "/users", users );

export default router;