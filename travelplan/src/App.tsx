import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./components/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  );
}