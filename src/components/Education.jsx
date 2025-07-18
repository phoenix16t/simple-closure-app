export default function Education({ data }) {
  return (
    <>
      <h2 className="text-4xl">Education</h2>
      <ul className="flex flex-col divide-y divide-gray-300">
        {data.map((schooling, i) => {
          return (
            <li key={`${schooling.degree}-${i}`} className="py-2">
              <div className="flex flex-row justify-between">
                <div className="flex gap-2">
                  <a
                    className="font-bold underline"
                    href={schooling.organisation.link}
                    target="_blank"
                  >
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
    </>
  );
}
