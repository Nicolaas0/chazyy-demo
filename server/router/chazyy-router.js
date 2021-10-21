import express from "express";
import { getChazyy, postChazyy } from "../controllers/chazyy-cont.js";

const router = express.Router();

router.get("/:username", getChazyy);

router.post("/:username/post", postChazyy);

export default router;
