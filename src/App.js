import "./App.css";
import Navbar from "./components/Navbar";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import Home from "./pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <StudentProvider>
              <Outlet />
            </StudentProvider>
          }
        >
          <Route index element={<Home />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
