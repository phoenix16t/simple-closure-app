import data from "./assets/data.json";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-6xl">Resume</h1>

      <h2 className="text-4xl">Experience</h2>
      <ul className="flex flex-col divide-y divide-gray-300">
        {data.experience.map((job, i) => {
          return (
            <li className="py-2" key={`${job.title}-${i}`}>
              <div className="flex flex-row justify-between">
                <div className="flex gap-2">
                  <a href={job.organisation.salesNavLink} target="_blank">
                    {job.organisation.name}
                  </a>
                  -<div className="italic">{job.title}</div>
                </div>
                <div>
                  {job.dateStarted} - {job.dateEnded}
                </div>
              </div>
              <div>{job.location}</div>
              <ul>
                {job.description?.split("\n").map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <h2 className="text-4xl">Education</h2>
      <ul className="flex flex-col divide-y divide-gray-300">
        {data.education.map((schooling, i) => {
          return (
            <li className="py-2" key={`${schooling.degree}-${i}`}>
              <div className="flex flex-row justify-between">
                <div className="flex gap-2">
                  <a href={schooling.organisation.link} target="_blank">
                    {schooling.organisation.name}
                  </a>
                </div>
                <div>
                  {schooling.dateStarted} - {schooling.dateEnded}
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="italic">{schooling.degree}</div>
                <div>{schooling.fieldOfStudy}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
