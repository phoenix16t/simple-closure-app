export default function Experience({ data }) {
  return (
    <>
      <h2 className="text-4xl">Experience</h2>
      <ul className="flex flex-col divide-y divide-gray-300">
        {data.map((job, i) => {
          return (
            <li key={`${job.title}-${i}`} className="py-2">
              <div className="flex flex-row justify-between">
                <div className="flex gap-2">
                  <a
                    className="font-bold underline"
                    href={job.organisation.salesNavLink}
                    target="_blank"
                  >
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
    </>
  );
}
