import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
