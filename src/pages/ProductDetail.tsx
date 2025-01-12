import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const MOCK_PRODUCTS = {
  "1": {
    id: "1",
    name: "Facial Treatment",
    price: 99.99,
    image: "/placeholder.svg",
    category: "Treatments",
    description: "Luxurious facial treatment that will leave your skin glowing and refreshed.",
    duration: "60 minutes",
    benefits: [
      "Deep cleansing",
      "Skin rejuvenation",
      "Anti-aging effects",
      "Improved circulation"
    ]
  },
  "2": {
    id: "2",
    name: "Luxury Moisturizer",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Skincare",
    description: "A rich moisturizer that hydrates and nourishes the skin.",
    duration: "30 minutes",
    benefits: [
      "Intense hydration",
      "Improves skin texture",
      "Enhances radiance"
    ]
  },
  "3": {
    id: "3",
    name: "Hair Styling",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Hair",
    description: "Professional hair styling to enhance your look.",
    duration: "45 minutes",
    benefits: [
      "Custom styling",
      "Use of premium products",
      "Long-lasting results"
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS[id as keyof typeof MOCK_PRODUCTS];

  if (!product) {
    return <div className="container py-8">Product not found</div>;
  }

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <h1 className="font-display text-4xl mt-2">{product.name}</h1>
            <p className="text-2xl font-semibold mt-4">${product.price}</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Description</h2>
            <p className="mt-2 text-muted-foreground">{product.description}</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Duration</h2>
            <p className="mt-2 text-muted-foreground">{product.duration}</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Benefits</h2>
            <ul className="mt-2 space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-muted-foreground">
                  • {benefit}
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
