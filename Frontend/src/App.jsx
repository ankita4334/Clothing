import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./components/Shop";
import ItemHome from "./components/ItemHome";
import Contactus from "./components/Contactus";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/itemhome" element={<ItemHome />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/slider" element={<Slider/>} />
        <Route path="/hero" element={<Hero/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
