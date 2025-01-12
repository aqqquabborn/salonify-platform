import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import { AuthDialog } from "./AuthDialog";

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="font-display text-xl">
          Beauty Salon
        </Link>

        <div className="ml-auto flex items-center space-x-4">
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/admin">Admin</Link>
          <AuthDialog>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </AuthDialog>
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};