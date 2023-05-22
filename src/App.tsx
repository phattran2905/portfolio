import { useState } from "react";
import Navbar from "./scences/Navbar";
import Header from "./scences/Header";

function App() {
  return (
    <div className="bg-black">
      <div className="bg-primary">
        <Navbar />
        <Header />
      </div>

      <div className="bg-black"></div>
    </div>
  );
}

export default App;
