import express from "express";
import { resumeJobMatcher } from "../controllers/resumeJDMatcherController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.post("/check", upload.single("resume"), resumeJobMatcher);

export default router;
