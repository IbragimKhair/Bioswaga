import { Activity, BarChart3, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

interface MonitoringProps {
  navigate: (page: string, params?: { testType?: string }) => void;
}

export function Monitoring({ navigate }: MonitoringProps) {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const tests = [
    {
      id: "physical",
      title: "Физическое состояние",
      description: "Оценка физических показателей и общего тонуса",
      duration: "5 минут",
      icon: Activity
    },
    {
      id: "mental",
      title: "Психоэмоциональное состояние",
      description: "Анализ эмоционального фона и стресс-факторов",
      duration: "7 минут",
      icon: BarChart3
    },
    {
      id: "complex",
      title: "Комплексная диагностика",
      description: "Полная оценка всех параметров здоровья",
      duration: "15 минут",
      icon: Clock
    }
  ];

  const demoResults = [
    {
      date: "15 ноября 2025",
      score: 8.5,
      status: "Отлично",
      type: "Физическое"
    },
    {
      date: "10 ноября 2025",
      score: 7.2,
      status: "Хорошо",
      type: "Психическое"
    },
    {
      date: "5 ноября 2025",
      score: 8.8,
      status: "Отлично",
      type: "Комплексное"
    }
  ];

  return (
    <section id="monitoring" className="bg-[#F3E6CD]/50 py-12 md:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Левая колонка - изображение и карточки */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl">
              <ImageWithFallback
                src="https://www.philips.com.tr/c-dam/b2bhc/master/feature-details/pm-deepdive/pm-group-page/pm-video-thumb.JPG"
                alt="Health monitoring"
                className="w-full h-auto rounded-xl md:rounded-2xl"
              />
            </div>

            {/* Плавающие карточки с данными */}
            <Card className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-white p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-lg border-[#9DBAC6]/20 flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#CFE6E1] rounded-lg md:rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" />
              </div>
              <div>
                <p className="text-[#5A6E73] text-xs md:text-sm">Пульс</p>
                <p className="text-[#2F4F4F] text-sm md:text-base" style={{ fontWeight: 600 }}>72 уд/мин</p>
              </div>
            </Card>

            <Card className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-white p-2.5 md:p-4 rounded-xl md:rounded-2xl shadow-lg border-[#9DBAC6]/20 flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F7D9C4] rounded-lg md:rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" />
              </div>
              <div>
                <p className="text-[#5A6E73] text-xs md:text-sm">Статус</p>
                <p className="text-[#2F4F4F] text-sm md:text-base" style={{ fontWeight: 600 }}>Норма</p>
              </div>
            </Card>
          </div>

          {/* Правая колонка - текст */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <h2 className="text-[#2F4F4F]" style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}>
              Мониторинг состояния
            </h2>
            
            <p className="text-[#5A6E73]" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
              Проходите регулярные тесты и отслеживайте динамику своего состояния. 
              Система анализирует множество параметров и предоставляет детальную аналитику.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#9DBAC6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-[#2F4F4F] text-sm md:text-base">Комплексная оценка физических показателей</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#9DBAC6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-[#2F4F4F] text-sm md:text-base">Анализ психоэмоционального состояния</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#9DBAC6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-[#2F4F4F] text-sm md:text-base">Отслеживание прогресса и трендов</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
              {/* ПРОЙТИ ТЕСТ - Модальное окно */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-[#9DBAC6] hover:bg-[#9DBAC6]/90 text-white rounded-full px-6 md:px-8 py-5 md:py-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    Пройти тест
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <h2 className="text-[#2F4F4F] text-2xl mb-4">Выберите тип теста</h2>
                  <div className="space-y-3">
                    {tests.map((test) => {
                      const Icon = test.icon;
                      return (
                        <Card
                          key={test.id}
                          className="p-4 border-[#9DBAC6]/20 hover:border-[#9DBAC6] hover:shadow-lg transition-all cursor-pointer"
                          onClick={() => {
                            setSelectedTest(test.id);
                            navigate("diagnostics", { testType: test.id });
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#9DBAC6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-[#9DBAC6]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-[#2F4F4F] mb-1">{test.title}</h3>
                              <p className="text-[#5A6E73] text-sm mb-2">{test.description}</p>
                              <div className="flex items-center gap-2 text-[#5A6E73] text-sm">
                                <Clock className="w-4 h-4" />
                                <span>{test.duration}</span>
                              </div>
                            </div>
                            <CheckCircle2 className="w-6 h-6 text-[#9DBAC6]" />
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>

              {/* ПОСМОТРЕТЬ РЕЗУЛЬТАТЫ - Модальное окно */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline"
                    className="border-[#9DBAC6] text-[#9DBAC6] hover:bg-[#9DBAC6]/10 rounded-full px-6 md:px-8 py-5 md:py-6"
                  >
                    Посмотреть результаты
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <h2 className="text-[#2F4F4F] text-2xl mb-4">История результатов</h2>
                  <div className="space-y-3">
                    {demoResults.map((result, index) => (
                      <Card
                        key={index}
                        className="p-4 border-[#9DBAC6]/20"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[#2F4F4F] mb-1">{result.type}</p>
                            <p className="text-[#5A6E73] text-sm">{result.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#2F4F4F] text-2xl mb-1">{result.score}/10</p>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                              result.score >= 8
                                ? "bg-green-100 text-green-700"
                                : result.score >= 6
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}>
                              {result.status}
                            </span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <Button
                    onClick={() => navigate("diagnostics")}
                    className="w-full bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full py-3 mt-4"
                  >
                    Пройти новый тест
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}