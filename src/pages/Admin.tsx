import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

const Admin = () => {
  const { toast } = useToast();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [serviceImage, setServiceImage] = useState<File | null>(null);

  const handleCreateProduct = () => {
    console.log("Creating product:", {
      productName,
      productPrice,
      productCategory,
      productDescription,
      productImage,
    });
    toast({
      title: "Продукт создан",
      description: `${productName} успешно создан`,
    });
    // Reset form
    setProductName("");
    setProductPrice("");
    setProductCategory("");
    setProductDescription("");
    setProductImage(null);
  };

  const handleCreateService = () => {
    console.log("Creating service:", {
      productName,
      productPrice,
      productCategory,
      productDescription,
      serviceImage,
    });
    toast({
      title: "Услуга создана",
      description: `Услуга ${productName} успешно создана`,
    });
    // Reset form
    setProductName("");
    setProductPrice("");
    setProductCategory("");
    setProductDescription("");
    setServiceImage(null);
  };

  const handleDeleteUser = (userId: string) => {
    toast({
      title: "Пользователь удален",
      description: `Пользователь ${userId} успешно удален`,
    });
  };

  return (
    <div className="container py-8">
      <h1 className="font-display text-4xl mb-8">Панель администратора</h1>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Управление продуктами</TabsTrigger>
          <TabsTrigger value="users">Управление пользователями</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Создать продукт</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Название продукта"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="Цена"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Категория"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Описание"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-image">Изображение продукта</Label>
                  <Input
                    id="product-image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProductImage(e.target.files?.[0] || null)}
                  />
                </div>
                <Button className="w-full" onClick={handleCreateProduct}>
                  Создать продукт
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Создать услугу</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Название услуги"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="Цена"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Категория"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Описание"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service-image">Изображение услуги</Label>
                  <Input
                    id="service-image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setServiceImage(e.target.files?.[0] || null)}
                  />
                </div>
                <Button className="w-full" onClick={handleCreateService}>
                  Создать услугу
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Пользователи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded">
                  <div>
                    <p className="font-medium">user@example.com</p>
                    <p className="text-sm text-muted-foreground">
                      Зарегистрирован: 01.01.2024
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteUser("1")}
                  >
                    Удалить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;