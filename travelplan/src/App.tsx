import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./components/routes";
import { UserProvider } from "./context/userContext";

export default function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}