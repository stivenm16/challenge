import "./App.css";
import Login from "./components/Login/Login";
import { AuthProvider } from "./context/store/auth/AuthContext";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/Home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
