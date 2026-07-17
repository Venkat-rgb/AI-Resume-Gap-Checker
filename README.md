# AI Resume Gap Checker

## Live Demo
https://ai-resume-gap-checker.vercel.app/

## Images
### Verdict: Qualified
<img width="1366" height="686" alt="Qualified" src="https://github.com/user-attachments/assets/6c244845-9aee-424e-ac64-633ea95248c9" />

### Verdict: Almost There
<img width="1366" height="682" alt="Almost There" src="https://github.com/user-attachments/assets/c1f7c921-083f-4d79-83fb-be77255f641b" />

### Verdict: Not Yet
<img width="1356" height="686" alt="Not Yet" src="https://github.com/user-attachments/assets/36d44569-bfce-4282-92d0-f2f1f1244c27" />


## Project Overview

**AI Resume Gap Checker** is a full-stack web application that analyzes a candidate's resume against a job description using Google's Gemini AI. The application identifies matched and missing technical skills, calculates a resume-to-job match percentage, and provides an AI-generated hiring verdict with concise supporting reasons.

## Features

* Upload resume in **PDF** format.
* Paste a job description.
* Extract text from the uploaded resume.
* AI-powered analysis using **Gemini 3.1 Flash Lite**.
* Displays:

  * Matched Skills
  * Missing Skills
  * Match Percentage
  * Hiring Verdict (Qualified / Almost There / Not Yet)
  * Three AI-generated reasons supporting the verdict
* Loading and error handling.

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Hot Toast (for showing errors)

### Backend

* Node.js
* Express.js
* Multer
* pdf-parse

### AI

* Google Gemini 3.1 Flash Lite
* @google/genai

## Application Workflow

```text
User
    │
    ▼
Upload Resume (PDF) + Enter Job Description
    │
    ▼
React Frontend
    │
    ▼
Express Backend
    │
    ├── Accept PDF using Multer
    ├── Extract text from PDF
    ├── Send Resume + Job Description to Gemini
    ├── Receive structured JSON response
    │
    ▼
Frontend
    │
    ▼
Display
• Matched Skills
• Missing Skills
• Match Percentage
• Verdict
• Supporting Reasons
```

## Environment Variables

Create a `.env` file in the backend with the following variables:

```env
GEMINI_API_KEY=your_api_key
FRONTEND_URL=frontend_url
PORT=5000
```

## Trade-offs

* Supports **PDF resumes only**.
* Job descriptions are accepted as plain text input.
* The application processes one resume at a time.
* No database is used since persistent storage is not required for this assignment.
