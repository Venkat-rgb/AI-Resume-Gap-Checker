import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Configuring the LLM
export const llm = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
