import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Facial Treatment",
    price: 99.99,
    image: "/placeholder.svg",
    category: "Treatments"
  },
  {
    id: "2",
    name: "Luxury Moisturizer",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Skincare"
  },
  {
    id: "3",
    name: "Hair Styling",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Hair"
  }
];

const CATEGORIES = ["All", "Treatments", "Skincare", "Hair"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = MOCK_PRODUCTS.filter(
    product => selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div className="container py-8">
      <h1 className="font-display text-4xl mb-8">Our Products & Services</h1>
      
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;