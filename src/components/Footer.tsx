import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#5A6E73] text-white py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Логотип и описание */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Activity className="w-6 h-6 md:w-8 md:h-8 text-[#9DBAC6]" strokeWidth={2.5} />
              <span style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 600 }}>BioSwaga</span>
            </div>
            <p className="text-white/80 max-w-md text-sm md:text-base">
              Современная платформа для мониторинга психофизического состояния. 
              Ваше здоровье под контролем.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="mb-3 md:mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2 text-sm md:text-base">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Главная</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">О проекте</a>
              <a href="#monitoring" className="text-white/80 hover:text-white transition-colors">Мониторинг</a>
              <a href="#specialists" className="text-white/80 hover:text-white transition-colors">Для специалистов</a>
            </nav>
          </div>

          {/* Дополнительно */}
          <div>
            <h4 className="mb-3 md:mb-4">Информация</h4>
            <nav className="flex flex-col gap-2 text-sm md:text-base">
              <a href="#team" className="text-white/80 hover:text-white transition-colors">Команда</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Условия использования</a>
            </nav>
          </div>
        </div>

        {/* Копирайт */}
        <div className="pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 text-sm md:text-base">© 2025 BioSwaga. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
