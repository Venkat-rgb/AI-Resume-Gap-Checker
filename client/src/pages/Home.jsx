import UploadForm from "../components/UploadForm";
import Results from "../components/Results";
import { useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const formChangeHandler = (e) => {
    if (e.target.name === "resume_file") {
      // Only allowing user to upload pdf
      if (e.target.files[0].type !== "application/pdf") {
        toast.error(`Enter valid PDF file!`);
        return;
      }

      setResumeFile(e.target.files[0]);
    } else {
      setJobDescription(e.target.value);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      const trimmedJobDescription = jobDescription.trim();

      // Error if JD is not provided
      if (!trimmedJobDescription) {
        toast.error(`Please Enter Job Description!`);
        return;
      }

      // Error if JD characters are extremely long
      if (trimmedJobDescription.length > 4000) {
        toast.error(`Please Enter Job Description less than 4000 characters!`);
        return;
      }

      formData.append("jobDescription", trimmedJobDescription);

      setIsLoading(true);

      // Making API Call
      const result = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/resume/check`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await result.json();

      // Storing match result
      setResults(data?.match_result);

      setIsLoading(false);
    } catch (err) {
      toast.error(err?.message);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div className="h-screen mx-auto w-full p-10 space-y-10 bg-gradient-to-br from-sky-100 to-indigo-100">
      <p className="font-bold text-4xl text-center">AI Resume Gap Checker</p>

      <div className="flex items-start justify-center gap-3">
        <UploadForm
          onSubmit={formSubmitHandler}
          onChange={formChangeHandler}
          isLoading={isLoading}
        />

        {/* Shows match results */}
        <Results results={results} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
};

export default Home;
