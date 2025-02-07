import { useState } from "react";
import reactLogo from "@/react.svg";
import "@/style.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-white">
      <div className="logos flex justify-center">
        <img src={reactLogo} className="h-24 mx-[10px]" alt="React logo" />
      </div>
      <h2>Codeigniter Vite + React + TypeScript</h2>
      <p className="my-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="cursor-pointer rounded-[11px] border border-gray-500 px-4 py-2"
        >
          count is {count}
        </button>
      </p>
      <p className="my-6">Edit resources/App.tsx and save to test HMR</p>
    </div>
  );
}

export default App;
