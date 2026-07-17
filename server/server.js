import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { AppError } from "./utils/appError.js";
import cors from "cors";
import resumeJDRoutes from "./routes/resumeJDRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Parsing req/res data in json format
app.use(express.json({ limit: "10mb" }));

// Configuring CORS
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

// Routes
app.use("/api/v1/resume", resumeJDRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Global Error Handling Middleware
app.use(errorMiddleware);
