import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="product-image" />
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{category}</p>
          <h3 className="font-medium mt-1">{name}</h3>
          <p className="font-semibold mt-1">${price}</p>
        </div>
      </Link>
      <Button className="w-full mt-4" size="sm">
        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
      </Button>
    </div>
  );
};