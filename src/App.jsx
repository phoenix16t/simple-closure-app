import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";
import { useState } from "react";

import ResumeViewer from "./components/ResumeViewer";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchPerson(linkedin) {
    setLoading(true);
    try {
      const response = await axios.get("/lixapi/v1/person", {
        params: {
          profile_link: `https://www.linkedin.com/in/${linkedin}`,
        },
        headers: {
          Authorization: import.meta.env.VITE_API_KEY,
        },
      });
      setData(response.data);
    } catch (error) {
      alert("Error:", error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username) fetchPerson(username);
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-4">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <label>
          Enter LinkedIn Username:&nbsp;
          <input
            className="rounded border"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
        </label>
        <button
          className="ml-2 flex rounded border bg-green-500 p-1 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={loading || !username}
          type="submit"
        >
          {loading ? "Loading..." : "Load Resume"}
        </button>
      </form>

      {data && (
        <PDFViewer
          style={{ width: "850px", height: "1100px", maxWidth: "100%" }}
        >
          <ResumeViewer data={data} />
        </PDFViewer>
      )}
    </div>
  );
}

export default App;
