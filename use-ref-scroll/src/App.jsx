import "./App.css";
import React from "react";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

const sections = ["header", "main", "about", "footer"];

const App = () => {
  const sectionRefs = useRef([]);
  const singleRef = useRef(null);
  
  return (
    <div>
      <Navbar
        singleRef={singleRef}
        sectionRefs={sectionRefs}
        sections={sections}
      />
      <Sections
        sections={sections}
        sectionRefs={sectionRefs}
        singleRef={singleRef}
      />
    </div>
  );
};

export default App;
