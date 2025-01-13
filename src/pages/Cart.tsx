import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Cart = () => {
  const { toast } = useToast();
  const [showCheckout, setShowCheckout] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    zipCode: "",
  });

  const handleCheckout = () => {
    toast({
      title: "Заказ оформлен",
      description: "Спасибо за покупку! Мы свяжемся с вами для подтверждения.",
    });
  };

  return (
    <div className="container py-8">
      <h1 className="font-display text-4xl mb-8">Корзина</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/placeholder.svg"
                alt="Товар"
                className="w-20 h-20 rounded-md"
              />
              <div>
                <h3 className="font-medium">Уход за лицом</h3>
                <p className="text-sm text-muted-foreground">Процедуры</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold">4999₽</span>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6">
            <h3 className="font-display text-xl mb-4">Итого заказа</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Подытог</span>
                <span>4999₽</span>
              </div>
              <div className="flex justify-between">
                <span>Доставка</span>
                <span>Бесплатно</span>
              </div>
              <div className="border-t pt-2 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Итого</span>
                  <span>4999₽</span>
                </div>
              </div>
            </div>
            {!showCheckout ? (
              <Button
                className="w-full mt-6"
                onClick={() => setShowCheckout(true)}
              >
                Оформить заказ
              </Button>
            ) : (
              <div className="mt-6 space-y-4">
                <Input
                  placeholder="Имя"
                  value={personalInfo.firstName}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, firstName: e.target.value })
                  }
                />
                <Input
                  placeholder="Фамилия"
                  value={personalInfo.lastName}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, lastName: e.target.value })
                  }
                />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  value={personalInfo.phone}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, phone: e.target.value })
                  }
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, email: e.target.value })
                  }
                />
                <Input
                  placeholder="Улица"
                  value={personalInfo.street}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, street: e.target.value })
                  }
                />
                <Input
                  placeholder="Город"
                  value={personalInfo.city}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, city: e.target.value })
                  }
                />
                <Input
                  placeholder="Индекс"
                  value={personalInfo.zipCode}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, zipCode: e.target.value })
                  }
                />
                <Button className="w-full" onClick={handleCheckout}>
                  Оплатить
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;