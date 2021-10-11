import express from "express";
import { getChazyy } from "../controllers/chazyy-cont.js";

const router = express.Router();

router.get("/", getChazyy);

export default router;
