import LoginPage from "./routes/auth/login.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./routes/Home.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}
