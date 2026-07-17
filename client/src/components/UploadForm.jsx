const UploadForm = ({ onSubmit, onChange, isLoading }) => {
  return (
    <div className="border border-neutral-200 p-3 rounded-md space-y-5 w-full bg-[#f1f1f1] drop-shadow-xl h-[500px]">
      <p className="text-center text-xl font-semibold">Upload Form</p>
      <form
        className="space-y-3"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="resume_file" className="font-medium">
            Upload Resume
          </label>
          <input
            className="cursor-pointer px-2 py-1 border border-neutral-200 rounded"
            id="resume_file"
            name="resume_file"
            type="file"
            onChange={(e) => onChange(e)}
            accept="application/pdf"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="font-medium">
            Job Description
          </label>
          <textarea
            name="description"
            id="description"
            className="outline-none border border-neutral-300 text-sm py-2 px-3 rounded-tr-md rounded-bl-md focus:ring-1 focus:ring-offset-0 ring-black/50 resize-none"
            placeholder="Enter the Job Description..."
            onChange={(e) => onChange(e)}
            rows={11}
          ></textarea>
        </div>

        <button
          className={`${isLoading ? "bg-indigo-500" : "bg-indigo-600"} cursor-pointer text-sm font-semibold p-2 rounded text-[#f1f1f1]`}
          disabled={isLoading}
        >
          {isLoading ? "Analyzing..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
