import { catchAsync } from "../utils/catchAsync.js";
import { AppError } from "../utils/appError.js";
import { PDFParse } from "pdf-parse";
import { llm } from "../utils/llm.js";
import { ResultSchema } from "../utils/resultSchema.js";

export const resumeJobMatcher = catchAsync(async (req, res, next) => {
  const { jobDescription } = req.body;

  const trimmedJobDescription = jobDescription?.trim();

  if (!trimmedJobDescription) {
    return next(new AppError("Please Enter Job Description!", 400));
  }

  if (trimmedJobDescription.length > 4000) {
    return next(
      new AppError(
        "Please Enter Job Description less than 4000 characters!",
        400,
      ),
    );
  }

  // Extracting the text from the PDF
  const parser = new PDFParse({ data: req.file.buffer });

  const resumeText = (await parser.getText()).text?.trim();

  // Destroying the parser to free up the memory
  await parser.destroy();

  // Making LLM call
  const llmRes = await llm.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: `You are an expert technical recruiter. Analyze the provided resume against the job description.
    Very accurately extract the skills, calculate the match percentage, choose the final verdict status, 
    and provide exactly 3 concise bullet points defending that verdict.

    RESUME:
    ${resumeText}

    JOB DESCRIPTION:
    ${trimmedJobDescription}
    `,
    config: {
      temperature: 0.1,
      responseMimeType: "application/json",
      responseSchema: ResultSchema,
    },
  });

  const finalRes = JSON.parse(llmRes?.text);

  res.status(200).json({
    match_result: finalRes,
  });
});
