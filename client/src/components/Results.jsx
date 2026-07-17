import Chip from "./Chip";

const Results = ({ results, isError }) => {
  return (
    <div className="border border-neutral-200 p-3 rounded-md w-full space-y-4 bg-[#f1f1f1] drop-shadow-xl">
      <p className="text-center text-xl font-semibold">Results</p>

      {isError && (
        <p className="flex items-center justify-center">
          <Chip
            text="Sorry! Unable to fetch match results"
            textColor="text-white"
            bgColor="bg-red-600"
          />
        </p>
      )}

      {results && (
        <>
          <div className="space-y-2">
            <p className="font-medium text-neutral-800">Matched Skills:</p>
            <div className="flex items-center gap-2 flex-wrap">
              {results?.matched_skills.map((skill, i) => (
                <Chip
                  key={i}
                  text={skill}
                  textColor="text-neutral-500"
                  bgColor="bg-neutral-200"
                />
              ))}
              {results?.matched_skills.length === 0 && (
                <Chip
                  text="None"
                  textColor="text-neutral-500"
                  bgColor="bg-neutral-200"
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-neutral-800">Missing Skills:</p>
            <div className="flex items-center gap-2 flex-wrap">
              {results?.missing_skills.map((skill, i) => (
                <Chip
                  key={i}
                  text={skill}
                  textColor="text-neutral-500"
                  bgColor="bg-neutral-200"
                />
              ))}
              {results?.missing_skills.length === 0 && (
                <Chip
                  text="None"
                  textColor="text-neutral-500"
                  bgColor="bg-neutral-200"
                />
              )}
            </div>
          </div>

          <p>
            <span className="font-medium text-neutral-800">Match: </span>
            <span className="font-medium text-neutral-800">
              {results?.match_percentage}%
            </span>
          </p>

          <p>
            <span className="font-medium text-neutral-800">Verdict: </span>
            <span>{results?.verdict}</span>
          </p>

          <div>
            <p className="font-medium text-neutral-800">Reasons:</p>
            {results?.reasons.map((reason, i) => (
              <li className="ml-9 text-sm " key={i}>
                {reason}
              </li>
            ))}
            {results?.reasons.length === 0 && <p>None</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
