import "./App.css";
import Navbar from "./components/Navbar";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
