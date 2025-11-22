import { Target, Users, Shield } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const features = [
    {
      icon: Target,
      title: "Точный мониторинг",
      description: "Отслеживайте ключевые показатели вашего психофизического состояния в реальном времени"
    },
    {
      icon: Users,
      title: "Персональный подход",
      description: "Индивидуальные рекомендации на основе ваших данных и особенностей организма"
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Ваши данные защищены современными методами шифрования и конфиденциальности"
    }
  ];

  return (
    <section id="about" className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-[#2F4F4F] mb-3 md:mb-4" style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}>
            О проекте
          </h2>
          <p className="text-[#5A6E73]" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
            BioSwaga — это современная платформа для мониторинга и анализа психофизического состояния. 
            Мы помогаем людям лучше понимать своё здоровье и принимать обоснованные решения для улучшения качества жизни.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 md:p-8 bg-gradient-to-br from-[#F3E6CD]/30 to-white border-[#9DBAC6]/20 rounded-2xl md:rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#9DBAC6]/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#9DBAC6]" />
                </div>
                <h3 className="text-[#2F4F4F] mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#5A6E73] text-sm md:text-base">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
