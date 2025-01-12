import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-2xl">BeautySalon</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active-nav-link" : ""}`}>
              Home
            </Link>
            <Link to="/products" className={`nav-link ${location.pathname === "/products" ? "active-nav-link" : ""}`}>
              Products
            </Link>
            <Link to="/categories" className={`nav-link ${location.pathname === "/categories" ? "active-nav-link" : ""}`}>
              Categories
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};