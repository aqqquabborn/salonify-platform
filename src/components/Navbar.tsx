import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import { AuthDialog } from "./AuthDialog";

export const Navbar = () => {
  // Временно хардкодим для демонстрации
  const isAdmin = false;

  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="font-display text-xl">
          Салон Красоты
        </Link>

        <div className="ml-auto flex items-center space-x-4">
          <Link to="/products">Продукты</Link>
          <Link to="/categories">Категории</Link>
          {isAdmin && <Link to="/admin">Админ панель</Link>}
          <AuthDialog />
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