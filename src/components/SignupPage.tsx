import { Activity, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";

interface SignupPageProps {
  navigate: (page: string, params?: { testType?: string }) => void;
}

export function SignupPage({ navigate }: SignupPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "user"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    alert("Регистрация успешна! (демо-версия)");
    navigate("home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3E6CD] to-[#CFE6E1] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8">
        {/* Кнопка назад */}
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-2 text-[#5A6E73] hover:text-[#2F4F4F] mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Назад на главную</span>
        </button>

        {/* Лого */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Activity className="w-10 h-10 text-[#9DBAC6]" strokeWidth={2.5} />
          <span className="text-[#2F4F4F] text-3xl">BioSwaga</span>
        </div>

        <h1 className="text-[#2F4F4F] text-center mb-2">
          Создать аккаунт
        </h1>
        <p className="text-[#5A6E73] text-center mb-6">
          Присоединяйтесь к нам для мониторинга здоровья
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Имя */}
          <div>
            <label className="block text-[#2F4F4F] mb-2 text-sm">
              Имя и фамилия
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-[#9DBAC6]/30 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#9DBAC6]"
              placeholder="Иван Иванов"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#2F4F4F] mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-[#9DBAC6]/30 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#9DBAC6]"
              placeholder="ivan@example.com"
              required
            />
          </div>

          {/* Пароль */}
          <div>
            <label className="block text-[#2F4F4F] mb-2 text-sm">
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full border border-[#9DBAC6]/30 rounded-xl p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#9DBAC6]"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6E73]"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Подтверждение пароля */}
          <div>
            <label className="block text-[#2F4F4F] mb-2 text-sm">
              Подтвердите пароль
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full border border-[#9DBAC6]/30 rounded-xl p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#9DBAC6]"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6E73]"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Тип пользователя */}
          <div>
            <label className="block text-[#2F4F4F] mb-2 text-sm">
              Я регистрируюсь как
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, userType: "user" })}
                className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                  formData.userType === "user"
                    ? "border-[#9DBAC6] bg-[#9DBAC6]/10"
                    : "border-[#9DBAC6]/30"
                }`}
              >
                <p className="text-[#2F4F4F] text-sm">Пользователь</p>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, userType: "specialist" })}
                className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                  formData.userType === "specialist"
                    ? "border-[#9DBAC6] bg-[#9DBAC6]/10"
                    : "border-[#9DBAC6]/30"
                }`}
              >
                <p className="text-[#2F4F4F] text-sm">Специалист</p>
              </button>
            </div>
          </div>

          {/* Кнопка регистрации */}
          <Button
            type="submit"
            className="w-full bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full py-6 shadow-lg hover:shadow-xl transition-all mt-6"
          >
            Зарегистрироваться
          </Button>
        </form>

        {/* Ссылка на вход */}
        <p className="text-center text-[#5A6E73] mt-6 text-sm">
          Уже есть аккаунт?{" "}
          <button
            onClick={() => navigate("home")}
            className="text-[#9DBAC6] hover:underline"
          >
            Войти
          </button>
        </p>
      </Card>
    </div>
  );
}