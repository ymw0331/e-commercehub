//Authentication related routes store here
import express from "express";
const router = express.Router();

//Middlewares
import {require}

//Controllers
import { register, login } from '../controllers/auth.js';

router.post( "/register", register );
router.post( "/login", login );

//Testing
router.get( "/secret", ( req, res ) =>
{
  res.json( { message: "You have accesss to this secret route" } );
} );

export default router;