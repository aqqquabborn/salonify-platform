import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Admin = () => {
  const { toast } = useToast();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleCreateProduct = () => {
    console.log("Creating product:", { productName, productPrice, productCategory, productDescription });
    toast({
      title: "Product Created",
      description: `${productName} has been created successfully`,
    });
    // Reset form
    setProductName("");
    setProductPrice("");
    setProductCategory("");
    setProductDescription("");
  };

  const handleCreateService = () => {
    console.log("Creating service:", { productName, productPrice, productCategory, productDescription });
    toast({
      title: "Service Created",
      description: `${productName} service has been created successfully`,
    });
    // Reset form
    setProductName("");
    setProductPrice("");
    setProductCategory("");
    setProductDescription("");
  };

  return (
    <div className="container py-8">
      <h1 className="font-display text-4xl mb-8">Admin Panel</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Create Product</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Category"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder="Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            <Button className="w-full" onClick={handleCreateProduct}>
              Create Product
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                placeholder="Service Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Category"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder="Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            <Button className="w-full" onClick={handleCreateService}>
              Create Service
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;