import { useState } from "react";
import Navbar from "./scences/Navbar";

function App() {
  return (
    <div className="bg-black">
      <div className="bg-primary">
        <Navbar />
      </div>

      <div className="bg-black"></div>
    </div>
  );
}

export default App;
