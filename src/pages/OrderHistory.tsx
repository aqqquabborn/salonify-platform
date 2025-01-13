import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Order {
  id: string;
  date: string;
  status: "pending" | "completed" | "cancelled";
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  personalInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    street: string;
    city: string;
    zipCode: string;
  };
}

const OrderHistory = () => {
  // Пример данных заказов
  const orders: Order[] = [
    {
      id: "1",
      date: "2024-02-20",
      status: "completed",
      items: [
        { name: "Товар 1", quantity: 2, price: 1000 },
      ],
      personalInfo: {
        firstName: "Иван",
        lastName: "Иванов",
        phone: "+7 999 999 99 99",
        email: "ivan@example.com",
        street: "ул. Пушкина",
        city: "Москва",
        zipCode: "123456"
      }
    }
  ];

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "В обработке";
      case "completed":
        return "Выполнен";
      case "cancelled":
        return "Отменён";
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">История заказов</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>Заказ #{order.id}</span>
                <span className="text-sm">
                  {new Date(order.date).toLocaleDateString("ru-RU")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Статус: {getStatusText(order.status)}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Информация о получателе:</h3>
                  <p>{order.personalInfo.firstName} {order.personalInfo.lastName}</p>
                  <p>{order.personalInfo.phone}</p>
                  <p>{order.personalInfo.email}</p>
                  <p>{order.personalInfo.street}</p>
                  <p>{order.personalInfo.city}, {order.personalInfo.zipCode}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Товары:</h3>
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.name} x{item.quantity}</span>
                      <span>{item.price * item.quantity} ₽</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;