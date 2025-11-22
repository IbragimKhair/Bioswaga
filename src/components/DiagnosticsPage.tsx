import { Activity, ArrowLeft, Heart, Brain, Zap, Clock, CheckCircle2, Bluetooth, Watch, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";
import { Progress } from "./ui/progress";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface DiagnosticsPageProps {
  navigate: (page: string, params?: { testType?: string }) => void;
  initialTestType?: string | null;
}

// Разные наборы вопросов для разных типов тестов
const testQuestions = {
  physical: [
    {
      id: 1,
      question: "Как вы оцениваете своё физическое состояние сегодня?",
      type: "scale",
      options: ["Плохо", "Удовлетворительно", "Хорошо", "Отлично"]
    },
    {
      id: 2,
      question: "Сколько часов вы спали прошлой ночью?",
      type: "number",
      placeholder: "Часов"
    },
    {
      id: 3,
      question: "Занимались ли вы физической активностью за последние 24 часа?",
      type: "choice",
      options: ["Да, интенсивно", "Да, умеренно", "Лёгкая активность", "Нет"]
    },
    {
      id: 4,
      question: "Есть ли у вас физический дискомфорт или боли?",
      type: "scale",
      options: ["Нет", "Лёгкий дискомфорт", "Умеренная боль", "Сильная боль"]
    },
    {
      id: 5,
      question: "Как вы оцениваете свой уровень энергии?",
      type: "scale",
      options: ["Очень низкий", "Низкий", "Средний", "Высокий", "Очень высокий"]
    }
  ],
  mental: [
    {
      id: 1,
      question: "Как вы оцениваете своё эмоциональное состояние?",
      type: "scale",
      options: ["Плохо", "Не очень", "Нормально", "Хорошо", "Отлично"]
    },
    {
      id: 2,
      question: "Как часто вы испытывали тревогу за последнюю неделю?",
      type: "scale",
      options: ["Никогда", "Редко", "Иногда", "Часто", "Постоянно"]
    },
    {
      id: 3,
      question: "Как вы оцениваете уровень стресса за последнюю неделю?",
      type: "scale",
      options: ["Очень низкий", "Низкий", "Умеренный", "Высокий", "Очень высокий"]
    },
    {
      id: 4,
      question: "Насколько легко вам было сосредоточиться на задачах?",
      type: "scale",
      options: ["Очень легко", "Легко", "Средне", "Трудно", "Очень трудно"]
    },
    {
      id: 5,
      question: "Как часто вы чувствовали себя подавленным?",
      type: "scale",
      options: ["Никогда", "Редко", "Иногда", "Часто", "Постоянно"]
    },
    {
      id: 6,
      question: "Насколько вы удовлетворены своим текущим состоянием?",
      type: "scale",
      options: ["Совсем не удовлетворён", "Не очень", "Нормально", "Удовлетворён", "Очень удовлетворён"]
    }
  ],
  complex: [
    {
      id: 1,
      question: "Как вы оцениваете своё физическое состояние сегодня?",
      type: "scale",
      options: ["Плохо", "Удовлетворительно", "Хорошо", "Отлично"]
    },
    {
      id: 2,
      question: "Сколько часов вы спали прошлой ночью?",
      type: "number",
      placeholder: "Часов"
    },
    {
      id: 3,
      question: "Как вы оцениваете своё эмоциональное состояние?",
      type: "scale",
      options: ["Плохо", "Не очень", "Нормально", "Хорошо", "Отлично"]
    },
    {
      id: 4,
      question: "Как вы оцениваете уровень стресса за последнюю неделю?",
      type: "scale",
      options: ["Очень низкий", "Низкий", "Умеренный", "Высокий", "Очень высокий"]
    },
    {
      id: 5,
      question: "Занимались ли вы физической активностью за последние 24 часа?",
      type: "choice",
      options: ["Да, интенсивно", "Да, умеренно", "Лёгкая активность", "Нет"]
    },
    {
      id: 6,
      question: "Как часто вы испытывали тревогу за последнюю неделю?",
      type: "scale",
      options: ["Никогда", "Редко", "Иногда", "Часто", "Постоянно"]
    },
    {
      id: 7,
      question: "Насколько легко вам было сосредоточиться на задачах?",
      type: "scale",
      options: ["Очень легко", "Легко", "Средне", "Трудно", "Очень трудно"]
    },
    {
      id: 8,
      question: "Как вы оцениваете свой уровень энергии?",
      type: "scale",
      options: ["Очень низкий", "Низкий", "Средний", "Высокий", "Очень высокий"]
    }
  ]
};

export function DiagnosticsPage({ navigate, initialTestType }: DiagnosticsPageProps) {
  const [testType, setTestType] = useState<"physical" | "mental" | "complex" | "full" | null>(initialTestType || null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    const questions = testType && testType !== "full" ? testQuestions[testType] : [];
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStartTest = (type: "physical" | "mental" | "complex" | "full") => {
    setTestType(type);
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  // Выбор типа теста
  if (!testType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F3E6CD] to-[#CFE6E1] p-4">
        <div className="max-w-4xl mx-auto pt-4 pb-8">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-2 text-[#5A6E73] hover:text-[#2F4F4F] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Вернуться на главную</span>
          </button>

          <div className="flex items-center gap-2 mb-8">
            <Activity className="w-8 h-8 text-[#9DBAC6]" strokeWidth={2.5} />
            <span className="text-[#2F4F4F] text-2xl">BioSwaga</span>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 mb-6">
            <h1 className="text-[#2F4F4F] mb-4">
              Выберите тип диагностики
            </h1>
            <p className="text-[#5A6E73] text-lg mb-8">
              Выберите подходящий тип диагностики для получения наиболее точных результатов
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Физическое состояние */}
              <Card 
                className="p-6 border-2 border-[#9DBAC6]/20 hover:border-[#9DBAC6] hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleStartTest("physical")}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CFE6E1] to-[#9DBAC6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[#9DBAC6]" />
                  </div>
                  <div>
                    <h3 className="text-[#2F4F4F] mb-2">Физическое состояние</h3>
                    <p className="text-[#5A6E73] text-sm mb-3">
                      Оценка физических показателей, активности и общего тонуса организма
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#5A6E73] text-sm">
                  <Clock className="w-4 h-4" />
                  <span>~5 минут</span>
                  <span className="ml-auto text-[#9DBAC6]">5 вопросов</span>
                </div>
              </Card>

              {/* Психоэмоциональное состояние */}
              <Card 
                className="p-6 border-2 border-[#9DBAC6]/20 hover:border-[#9DBAC6] hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleStartTest("mental")}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F3E6CD] to-[#9DBAC6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-[#9DBAC6]" />
                  </div>
                  <div>
                    <h3 className="text-[#2F4F4F] mb-2">Психоэмоциональное</h3>
                    <p className="text-[#5A6E73] text-sm mb-3">
                      Анализ эмоционального фона, стресс-факторов и психологического состояния
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#5A6E73] text-sm">
                  <Clock className="w-4 h-4" />
                  <span>~7 минут</span>
                  <span className="ml-auto text-[#9DBAC6]">6 вопросов</span>
                </div>
              </Card>

              {/* Комплексная диагностика */}
              <Card 
                className="p-6 border-2 border-[#9DBAC6]/20 hover:border-[#9DBAC6] hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleStartTest("complex")}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8F4F8] to-[#9DBAC6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#9DBAC6]" />
                  </div>
                  <div>
                    <h3 className="text-[#2F4F4F] mb-2">Комплексная диагностика</h3>
                    <p className="text-[#5A6E73] text-sm mb-3">
                      Полная оценка физического и психического состояния
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#5A6E73] text-sm">
                  <Clock className="w-4 h-4" />
                  <span>~10 минут</span>
                  <span className="ml-auto text-[#9DBAC6]">8 вопросов</span>
                </div>
              </Card>

              {/* Полная диагностика с устройствами */}
              <Card 
                className="p-6 border-2 border-[#9DBAC6] bg-gradient-to-br from-[#9DBAC6]/5 to-transparent hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleStartTest("full")}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#9DBAC6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#2F4F4F] mb-2">Полная диагностика</h3>
                    <p className="text-[#5A6E73] text-sm mb-3">
                      Углубленная диагностика с подключением фитнес-устройств
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#5A6E73] text-sm">
                  <Bluetooth className="w-4 h-4" />
                  <span>С устройствами</span>
                  <span className="ml-auto bg-[#9DBAC6] text-white px-2 py-1 rounded-full text-xs">Рекомендуем</span>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Полная диагностика с подключением устройств
  if (testType === "full") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F3E6CD] to-[#CFE6E1] p-4">
        <div className="max-w-4xl mx-auto pt-4 pb-8">
          <button
            onClick={() => setTestType(null)}
            className="flex items-center gap-2 text-[#5A6E73] hover:text-[#2F4F4F] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад к выбору теста</span>
          </button>

          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#9DBAC6] to-[#7A9AA6] rounded-full flex items-center justify-center mx-auto mb-6">
                <Bluetooth className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-[#2F4F4F] mb-4">
                Полная диагностика с устройствами
              </h2>
              <p className="text-[#5A6E73] text-lg">
                Подключите ваши фитнес-устройства для получения более точных данных
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {/* Фитнес-браслет */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 border-2 border-[#9DBAC6]/20 hover:border-[#9DBAC6] hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#9DBAC6]/20 rounded-xl flex items-center justify-center">
                          <Watch className="w-6 h-6 text-[#9DBAC6]" />
                        </div>
                        <div>
                          <h3 className="text-[#2F4F4F] mb-1">Фитнес-браслет</h3>
                          <p className="text-[#5A6E73] text-sm">Mi Band, Fitbit, Garmin и другие</p>
                        </div>
                      </div>
                      <Button className="bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full">
                        Подключить
                      </Button>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <h3 className="text-[#2F4F4F] text-xl mb-4">Подключение фитнес-браслета</h3>
                  <p className="text-[#5A6E73] mb-4">
                    Функция подключения устройств находится в разработке и скоро будет доступна.
                  </p>
                  <div className="bg-[#F3E6CD]/50 p-4 rounded-xl">
                    <p className="text-[#5A6E73] text-sm">
                      💡 В будущей версии вы сможете синхронизировать данные о пульсе, шагах, сне и активности.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Умные часы */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 border-2 border-[#9DBAC6]/20 hover:border-[#9DBAC6] hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#9DBAC6]/20 rounded-xl flex items-center justify-center">
                          <Activity className="w-6 h-6 text-[#9DBAC6]" />
                        </div>
                        <div>
                          <h3 className="text-[#2F4F4F] mb-1">Умные часы</h3>
                          <p className="text-[#5A6E73] text-sm">Apple Watch, Samsung Galaxy Watch</p>
                        </div>
                      </div>
                      <Button className="bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full">
                        Подключить
                      </Button>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <h3 className="text-[#2F4F4F] text-xl mb-4">Подключение умных часов</h3>
                  <p className="text-[#5A6E73] mb-4">
                    Функция подключения устройств находится в разработке и скоро будет доступна.
                  </p>
                  <div className="bg-[#F3E6CD]/50 p-4 rounded-xl">
                    <p className="text-[#5A6E73] text-sm">
                      💡 В будущей версии вы сможете получать детальные данные о здоровье напрямую с часов.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Приложение здоровье */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 border-2 border-[#9DBAC6]/20 hover:border-[#9DBAC6] hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#9DBAC6]/20 rounded-xl flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-[#9DBAC6]" />
                        </div>
                        <div>
                          <h3 className="text-[#2F4F4F] mb-1">Приложение "Здоровье"</h3>
                          <p className="text-[#5A6E73] text-sm">Apple Health, Google Fit</p>
                        </div>
                      </div>
                      <Button className="bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full">
                        Подключить
                      </Button>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <h3 className="text-[#2F4F4F] text-xl mb-4">Синхронизация с приложением</h3>
                  <p className="text-[#5A6E73] mb-4">
                    Функция подключения устройств находится в разработке и скоро будет доступна.
                  </p>
                  <div className="bg-[#F3E6CD]/50 p-4 rounded-xl">
                    <p className="text-[#5A6E73] text-sm">
                      💡 Скоро вы сможете импортировать данные из Apple Health и Google Fit.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="bg-[#F3E6CD]/50 p-6 rounded-2xl mb-6">
              <h4 className="text-[#2F4F4F] mb-3">Преимущества подключения устройств:</h4>
              <ul className="space-y-2 text-[#5A6E73]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9DBAC6] flex-shrink-0 mt-0.5" />
                  <span>Автоматический сбор данных о пульсе, сне и активности</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9DBAC6] flex-shrink-0 mt-0.5" />
                  <span>Более точная оценка физического состояния</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9DBAC6] flex-shrink-0 mt-0.5" />
                  <span>Детальная аналитика и тренды за длительный период</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9DBAC6] flex-shrink-0 mt-0.5" />
                  <span>Персонализированные рекомендации на основе ваших данных</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setTestType(null)}
                variant="outline"
                className="flex-1 border-[#9DBAC6] text-[#9DBAC6] rounded-full py-6"
              >
                Назад
              </Button>
              <Button
                onClick={() => handleStartTest("complex")}
                className="flex-1 bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full py-6 shadow-lg"
              >
                Продолжить без устройств
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const questions = testQuestions[testType];
  const progress = ((currentStep + 1) / questions.length) * 100;

  // Экран завершения
  if (isComplete) {
    const getResultsByType = () => {
      switch (testType) {
        case "physical":
          return {
            title: "Физическое состояние",
            scores: [
              { label: "Физическое", sublabel: "состояние", score: 8.5, icon: Heart },
              { label: "Энергия", sublabel: "и бодрость", score: 7.8, icon: Zap },
              { label: "Активность", sublabel: "и тонус", score: 8.2, icon: Activity }
            ]
          };
        case "mental":
          return {
            title: "Психоэмоциональное состояние",
            scores: [
              { label: "Психическое", sublabel: "состояние", score: 7.2, icon: Brain },
              { label: "Уровень", sublabel: "стресса", score: 6.5, icon: Zap },
              { label: "Концентрация", sublabel: "внимания", score: 7.8, icon: Activity }
            ]
          };
        case "complex":
          return {
            title: "Комплексная диагностика",
            scores: [
              { label: "Физическое", sublabel: "состояние", score: 8.5, icon: Heart },
              { label: "Психическое", sublabel: "состояние", score: 7.2, icon: Brain },
              { label: "Общая", sublabel: "оценка", score: 7.9, icon: Zap }
            ]
          };
        default:
          return {
            title: "Результаты",
            scores: []
          };
      }
    };

    const results = getResultsByType();

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F3E6CD] to-[#CFE6E1] flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-[#2F4F4F] mb-4">
            Диагностика завершена!
          </h1>

          <p className="text-[#5A6E73] mb-2 text-lg">{results.title}</p>
          <p className="text-[#5A6E73] mb-8">
            Спасибо за прохождение диагностики. Ваши результаты обрабатываются.
          </p>

          {/* Демо результаты */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {results.scores.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-to-br from-[#CFE6E1] to-white border-[#9DBAC6]/20">
                  <Icon className="w-8 h-8 text-[#9DBAC6] mx-auto mb-3" />
                  <p className="text-[#2F4F4F] mb-1">{item.label}</p>
                  <p className="text-[#5A6E73] text-sm">{item.sublabel}</p>
                  <p className="text-[#2F4F4F] mt-2" style={{ fontSize: '24px' }}>{item.score}/10</p>
                </Card>
              );
            })}
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => navigate("home")}
              className="w-full bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full py-6 shadow-lg"
            >
              Вернуться на главную
            </Button>
            <Button
              onClick={() => {
                setIsComplete(false);
                setTestType(null);
                setCurrentStep(0);
                setAnswers({});
              }}
              variant="outline"
              className="w-full border-[#9DBAC6] text-[#9DBAC6] rounded-full py-6"
            >
              Пройти другой тест
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Основной экран диагностики
  const currentQuestion = questions[currentStep];
  const hasAnswer = answers[currentQuestion.id] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3E6CD] to-[#CFE6E1] p-4">
      {/* Шапка */}
      <div className="max-w-4xl mx-auto pt-4 pb-8">
        <button
          onClick={() => setTestType(null)}
          className="flex items-center gap-2 text-[#5A6E73] hover:text-[#2F4F4F] mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Выйти из диагностики</span>
        </button>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-[#9DBAC6]" strokeWidth={2.5} />
            <span className="text-[#2F4F4F] text-2xl">BioSwaga</span>
          </div>
          <div className="flex items-center gap-2 text-[#5A6E73]">
            <Clock className="w-5 h-5" />
            <span className="text-sm">
              {testType === "physical" ? "~5 минут" : testType === "mental" ? "~7 минут" : "~10 минут"}
            </span>
          </div>
        </div>

        {/* Прогресс бар */}
        <div className="mb-2">
          <div className="flex justify-between text-sm text-[#5A6E73] mb-2">
            <span>Вопрос {currentStep + 1} из {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Карточка с вопросом */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12">
          <h2 className="text-[#2F4F4F] mb-8">
            {currentQuestion.question}
          </h2>

          {/* Варианты ответа - шкала */}
          {currentQuestion.type === "scale" && (
            <div className="grid gap-3">
              {currentQuestion.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion.id, option)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                    answers[currentQuestion.id] === option
                      ? "border-[#9DBAC6] bg-[#9DBAC6]/10"
                      : "border-[#9DBAC6]/30 hover:border-[#9DBAC6]/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#2F4F4F]">{option}</span>
                    {answers[currentQuestion.id] === option && (
                      <CheckCircle2 className="w-5 h-5 text-[#9DBAC6]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Варианты ответа - выбор */}
          {currentQuestion.type === "choice" && (
            <div className="grid gap-3">
              {currentQuestion.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion.id, option)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                    answers[currentQuestion.id] === option
                      ? "border-[#9DBAC6] bg-[#9DBAC6]/10"
                      : "border-[#9DBAC6]/30 hover:border-[#9DBAC6]/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#2F4F4F]">{option}</span>
                    {answers[currentQuestion.id] === option && (
                      <CheckCircle2 className="w-5 h-5 text-[#9DBAC6]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Ввод числа */}
          {currentQuestion.type === "number" && (
            <input
              type="number"
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
              className="w-full border-2 border-[#9DBAC6]/30 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#9DBAC6] text-[#2F4F4F] text-lg"
              placeholder={currentQuestion.placeholder}
              min="0"
              max="24"
            />
          )}

          {/* Кнопки навигации */}
          <div className="flex gap-3 mt-8">
            {currentStep > 0 && (
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="flex-1 border-[#9DBAC6] text-[#9DBAC6] rounded-full py-6"
              >
                Назад
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!hasAnswer}
              className="flex-1 bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full py-6 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === questions.length - 1 ? "Завершить" : "Далее"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}