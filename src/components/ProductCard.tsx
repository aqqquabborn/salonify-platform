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

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    console.log("Adding to cart:", { id, name, price });
    toast({
      title: "Added to Cart",
      description: `${name} has been added to your cart`,
    });
  };

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
      <Button className="w-full mt-4" size="sm" onClick={handleAddToCart}>
        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
      </Button>
    </div>
  );
};