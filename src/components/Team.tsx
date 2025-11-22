import { Linkedin, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  const teamMembers = [
    {
      name: "Ануриева Анастасия Вадимовна",
      role: "Лидер команды",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjEwNDkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Хайруллин Ибрахим Артурович",
      role: "Разработка сайта",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjEwNDkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Обрядина Светлана Алексеевна",
      role: "Участник команды",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjEwNDkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Демидова Ульяна Павловна",
      role: "Участник команды",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjEwNDkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <section id="team" className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-[#2F4F4F] mb-3 md:mb-4" style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}>
            Наша команда
          </h2>
          <p className="text-[#5A6E73]" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
            Профессионалы, объединённые общей целью — сделать мониторинг здоровья доступным и эффективным для каждого
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-[#F3E6CD]/30 to-white border-[#9DBAC6]/20 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square bg-gradient-to-br from-[#9DBAC6]/20 to-[#F7D9C4]/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#9DBAC6]/30 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/50 rounded-full flex items-center justify-center">
                    <span className="text-[#9DBAC6]" style={{ fontSize: 'clamp(32px, 8vw, 48px)', fontWeight: 600 }}>
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-[#2F4F4F] mb-1 md:mb-2">
                  {member.name}
                </h3>
                <p className="text-[#5A6E73] mb-3 md:mb-4 text-sm md:text-base">
                  {member.role}
                </p>
                <div className="flex justify-center gap-2 md:gap-3">
                  <button className="w-9 h-9 md:w-10 md:h-10 bg-[#9DBAC6]/10 hover:bg-[#9DBAC6]/20 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-[#9DBAC6]" />
                  </button>
                  <button className="w-9 h-9 md:w-10 md:h-10 bg-[#9DBAC6]/10 hover:bg-[#9DBAC6]/20 rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#9DBAC6]" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}