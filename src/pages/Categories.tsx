import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CATEGORIES = [
  { id: "skincare", name: "Skincare", count: 24 },
  { id: "hair", name: "Hair Care", count: 18 },
  { id: "makeup", name: "Makeup", count: 32 },
  { id: "treatments", name: "Treatments", count: 12 },
];

const Categories = () => {
  return (
    <div className="container py-8">
      <h1 className="font-display text-4xl mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((category) => (
          <Link key={category.id} to={`/products?category=${category.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.count} items</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;