import express from "express";
import { userAdd, userLogin, userDetails } from "../controllers/user-cont.js";
const router = express.Router();

router.post("/new", userAdd);
router.post("/login", userLogin);
router.get("/details", userDetails);

export default router;
