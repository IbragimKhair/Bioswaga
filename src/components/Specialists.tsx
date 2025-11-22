import { Stethoscope, FileText, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

interface SpecialistsProps {
  navigate: (page: string, params?: { testType?: string }) => void;
}

export function Specialists({ navigate }: SpecialistsProps) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    specialistId: ""
  });

  const benefits = [
    {
      icon: FileText,
      title: "Детальные отчёты",
      description: "Получайте подробную аналитику по каждому пациенту"
    },
    {
      icon: Users,
      title: "Управление пациентами",
      description: "Удобная система для работы с несколькими пациентами"
    },
    {
      icon: Stethoscope,
      title: "Профессиональные инструменты",
      description: "Специализированные инструменты для врачей и тренеров"
    }
  ];

  const handleSpecialistLogin = () => {
    // Демо-логика входа
    alert("Вход в панель специалиста (демо-версия)");
  };

  return (
    <section id="specialists" className="bg-[#CFE6E1] py-12 md:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Левая колонка - текст */}
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block bg-white/70 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <p className="text-[#5A6E73] text-sm md:text-base">Для профессионалов</p>
            </div>

            <h2 className="text-[#2F4F4F]" style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}>
              Для специалистов
            </h2>
            
            <p className="text-[#5A6E73]" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
              Врачи и тренеры могут анализировать результаты пациентов, 
              отслеживать их прогресс и предоставлять профессиональные рекомендации на основе собранных данных.
            </p>

            {/* ВОЙТИ КАК СПЕЦИАЛИСТ - Модальное окно */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-[#9DBAC6] hover:bg-[#9DBAC6]/90 text-white rounded-full px-6 md:px-8 py-5 md:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Войти как специалист
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <h2 className="text-[#2F4F4F] text-2xl mb-6">Вход для специалистов</h2>
                
                <div className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-[#2F4F4F] mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      value={credentials.email}
                      onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                      className="w-full border border-[#9DBAC6]/30 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#9DBAC6]"
                      placeholder="doctor@example.com"
                    />
                  </div>

                  {/* ID специалиста */}
                  <div>
                    <label className="block text-[#2F4F4F] mb-2 text-sm">
                      ID специалиста
                    </label>
                    <input
                      type="text"
                      value={credentials.specialistId}
                      onChange={(e) => setCredentials({ ...credentials, specialistId: e.target.value })}
                      className="w-full border border-[#9DBAC6]/30 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#9DBAC6]"
                      placeholder="SP-123456"
                    />
                  </div>

                  {/* Пароль */}
                  <div>
                    <label className="block text-[#2F4F4F] mb-2 text-sm">
                      Пароль
                    </label>
                    <input
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      className="w-full border border-[#9DBAC6]/30 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#9DBAC6]"
                      placeholder="••••••••"
                    />
                  </div>

                  {/* Информация */}
                  <div className="bg-[#F3E6CD]/50 p-4 rounded-xl">
                    <p className="text-[#5A6E73] text-sm">
                      💡 Если у вас нет аккаунта специалиста, зарегистрируйтесь как "Специалист" через основную форму регистрации.
                    </p>
                  </div>

                  {/* Кнопка входа */}
                  <Button
                    onClick={handleSpecialistLogin}
                    className="w-full bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full py-6 shadow-lg mt-2"
                  >
                    Войти в панель специалиста
                  </Button>

                  {/* Ссылка на регистрацию */}
                  <p className="text-center text-[#5A6E73] text-sm">
                    Нет аккаунта?{" "}
                    <button
                      onClick={() => navigate("signup")}
                      className="text-[#9DBAC6] hover:underline"
                    >
                      Зарегистрироваться
                    </button>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Правая колонка - карточки преимуществ */}
          <div className="space-y-3 md:space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="p-4 md:p-6 bg-white/80 backdrop-blur-sm border-[#9DBAC6]/20 rounded-xl md:rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-x-1 md:hover:-translate-x-2"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9DBAC6]/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" />
                    </div>
                    <div>
                      <h3 className="text-[#2F4F4F] mb-1 md:mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-[#5A6E73] text-sm md:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}