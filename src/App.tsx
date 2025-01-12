import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Categories from "@/pages/Categories";
import Cart from "@/pages/Cart";
import Profile from "@/pages/Profile";
import Admin from "@/pages/Admin";
import ProductDetail from "@/pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;