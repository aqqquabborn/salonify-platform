import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";

export const AuthDialog = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Генерируем 6-значный код
    const code = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated code:", code);
    toast({
      title: "Код подтверждения",
      description: `Ваш код: ${code}. Запомните его для входа в систему.`,
    });
    setShowOTP(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь будет проверка учетных данных
    localStorage.setItem("isAuthenticated", "true");
    toast({
      title: "Успешный вход",
      description: "Добро пожаловать в систему!",
    });
    navigate("/order-history");
  };

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    toast({
      title: "Регистрация завершена",
      description: "Вы успешно зарегистрировались!",
    });
    setShowOTP(false);
    setIsLogin(true);
  };

  if (showOTP) {
    return (
      <Dialog open={showOTP}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Введите код подтверждения</DialogTitle>
            <DialogDescription>
              Введите 6-значный код, который был отправлен вам
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleOTPSubmit} className="space-y-4">
            <InputOTP
              value={otp}
              onChange={setOtp}
              maxLength={6}
              render={({ slots }) => (
                <InputOTPGroup>
                  {slots.map((slot, index) => (
                    <InputOTPSlot key={index} {...slot} index={index} />
                  ))}
                </InputOTPGroup>
              )}
            />
            <Button type="submit" className="w-full">
              Подтвердить
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Войти</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isLogin ? "Вход" : "Регистрация"}</DialogTitle>
          <DialogDescription>
            {isLogin
              ? "Добро пожаловать! Войдите в свой аккаунт."
              : "Создайте аккаунт, чтобы начать."}
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          className="space-y-4 mt-4"
        >
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {isLogin && (
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            <Button
              type="button"
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Нужен аккаунт?" : "Уже есть аккаунт?"}
            </Button>
            <Button type="submit">{isLogin ? "Войти" : "Регистрация"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};