import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useAuth();
  return (
    <div className="flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={!authUser ? <Navigate to={"/login"} /> : <Home />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
