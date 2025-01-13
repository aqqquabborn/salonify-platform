import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
];

export const ProductCard = ({ id, name, price, category }: ProductCardProps) => {
  const { toast } = useToast();
  const randomImage = PLACEHOLDER_IMAGES[Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)];

  const handleAddToCart = () => {
    console.log("Adding to cart:", { id, name, price });
    toast({
      title: "Добавлено в корзину",
      description: `${name} добавлен в вашу корзину`,
    });
  };

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={randomImage} alt={name} className="w-full h-48 object-cover rounded-lg" />
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{category}</p>
          <h3 className="font-medium mt-1">{name}</h3>
          <p className="font-semibold mt-1">{price} ₽</p>
        </div>
      </Link>
      <Button className="w-full mt-4" size="sm" onClick={handleAddToCart}>
        <ShoppingCart className="mr-2 h-4 w-4" /> Добавить в корзину
      </Button>
    </div>
  );
};