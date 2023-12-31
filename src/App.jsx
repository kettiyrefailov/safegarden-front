import { BrowserRouter, Route, Routes } from "react-router-dom";
import WellcomePage from "./pages/WellcomePage";
import Product from "./pages/Product";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WellcomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
