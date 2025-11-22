import { Activity, TrendingUp, Heart } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  navigate: (page: string, params?: { testType?: string }) => void;
}

export function Hero({ navigate }: HeroProps) {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative bg-[#F3E6CD] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Текст */}
          <div className="space-y-8">
            <div className="inline-block bg-white/60 px-4 py-2 rounded-full border border-[#9DBAC6]/30">
              <p className="text-[#5A6E73] text-base">Инновационный подход к здоровью</p>
            </div>

            <h1 className="text-[#2F4F4F] text-4xl md:text-6xl font-semibold leading-tight">
              Добро пожаловать в BioSwaga
            </h1>

            <p className="text-[#5A6E73] text-lg md:text-xl">
              Ваш помощник в мониторинге психофизиологического состояния
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#9DBAC6] text-white rounded-full px-8 py-5 shadow-lg"
                onClick={() => navigate("diagnostics")}
              >
                Начать диагностику
              </Button>

              <Button
                variant="outline"
                className="border-[#9DBAC6] text-[#9DBAC6] rounded-full px-8 py-5"
                onClick={scrollToAbout}
              >
                Узнать больше
              </Button>
            </div>

            {/* Иконки */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="feature-block">
                <Activity className="icon" />
                <p>Мониторинг</p>
              </div>

              <div className="feature-block">
                <TrendingUp className="icon" />
                <p>Аналитика</p>
              </div>

              <div className="feature-block">
                <Heart className="icon" />
                <p>Удобство</p>
              </div>
            </div>
          </div>

          {/* Изображение */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9DBAC6]/20 to-transparent rounded-3xl blur-3xl"></div>

            <div className="relative bg-white/70 p-6 rounded-3xl shadow-2xl">
              <img
                src="https://i.pinimg.com/originals/c8/8a/35/c88a3546c25f130ea34aaa56d2ca5b9e.jpg"
                alt="Wellness"
                className="rounded-2xl w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}