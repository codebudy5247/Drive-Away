import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Login, Register } from "./features/authentication";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
