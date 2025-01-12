import { ProductCard } from "@/components/ProductCard";

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

const Products = () => {
  return (
    <div className="container py-8">
      <h1 className="font-display text-4xl mb-8">Our Products & Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;