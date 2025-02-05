import { useState } from "react";
import reactLogo from "@/react.svg";
import "@/style.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="logos">
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <h2>Codeigniter Vite + React + TypeScript</h2>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </p>
      <p>Edit resources/App.tsx and save to test HMR</p>
    </div>
  );
}

export default App;
