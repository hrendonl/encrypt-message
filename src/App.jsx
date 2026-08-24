import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
