import { BrowserRouter, Route, Routes } from "react-router-dom";
import WellcomePage from "./pages/WellcomePage";
import Product from "./pages/Product";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Resgister from "./pages/Register";
import Terms from "./pages/Terms";
import Forgot from "./pages/Forgot";
import { BACKEND_URL } from "./services/authService";

function App() {
  console.log(BACKEND_URL);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WellcomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Resgister />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
