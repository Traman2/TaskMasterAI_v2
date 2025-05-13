import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
