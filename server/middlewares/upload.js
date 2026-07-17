import multer from "multer";

// Configuring in-memory file store
const storage = multer.memoryStorage();

export const upload = multer({ storage });
