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
          <Route path="calendar" element={<Dashboard/>} />
          <Route path="classManager" element={<Dashboard/>} />
          <Route path="flashCards" element={<Dashboard/>} />
          <Route path="resources" element={<Dashboard/>} />
          <Route path="settings" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
