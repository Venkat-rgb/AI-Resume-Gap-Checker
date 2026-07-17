// Creating JSON Schema for Structured Output
export const ResultSchema = {
  type: "object",
  properties: {
    matched_skills: {
      type: "array",
      items: { type: "string" },
      description:
        "Technical skills present in both the resume and the job description.",
    },
    missing_skills: {
      type: "array",
      items: { type: "string" },
      description:
        "Technical skills required by the job description but missing from the resume.",
    },
    match_percentage: {
      type: "number",
      description:
        "Percentage of job description skills matched by the resume, between 0 and 100.",
    },
    verdict: {
      type: "string",
      enum: ["Qualified", "Almost There", "Not Yet"],
      description:
        "Overall assessment of the candidate's suitability for the job.",
    },
    reasons: {
      type: "array",
      items: { type: "string" },
      description: "Exactly three concise reasons explaining the verdict.",
    },
  },

  required: [
    "matched_skills",
    "missing_skills",
    "match_percentage",
    "verdict",
    "reasons",
  ],
};
