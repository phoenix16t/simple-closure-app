import { Education, Experience } from "./components";

import data from "./assets/data.json";

function App() {
  return (
    <div className="flex max-w-6xl flex-col gap-4 p-4">
      <div className="flex flex-row items-center justify-center gap-4">
        <img className="max-h-30 max-w-30 rounded-full" src={data.img} />
        <h1 className="text-6xl">{data.name}'s resume</h1>
      </div>

      <Experience data={data.experience} />
      <Education data={data.education} />
    </div>
  );
}

export default App;
