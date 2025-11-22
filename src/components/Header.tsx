import { Activity, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

interface HeaderProps {
  navigate: (page: string, params?: { testType?: string }) => void;
}

export function Header({ navigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#9DBAC6]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Логотип */}
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-[#9DBAC6]" strokeWidth={2.5} />
            <span className="text-[#2F4F4F] font-semibold text-2xl">BioSwaga</span>
          </div>

          {/* Навигация — desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a className="nav-link" href="#home">Главная</a>
            <a className="nav-link" onClick={scrollToAbout}>О проекте</a>
            <a className="nav-link" href="#monitoring">Мониторинг</a>
            <a className="nav-link" href="#specialists">Для специалистов</a>
            <a className="nav-link" href="#team">Команда</a>
            <a className="nav-link" href="#contact">Контакты</a>
          </nav>

          {/* Авторизация — desktop */}
          <div className="hidden lg:flex items-center gap-3">

            {/* ВХОД */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="rounded-full">
                  Вход
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-sm">
                <h2 className="text-xl font-semibold mb-4 text-[#2F4F4F]">Вход</h2>

                <input
                  className="w-full border rounded-lg p-3 mb-3"
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="w-full border rounded-lg p-3 mb-4"
                  placeholder="Пароль"
                />

                <Button className="w-full bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full py-3">
                  Войти
                </Button>
              </DialogContent>
            </Dialog>

            {/* РЕГИСТРАЦИЯ */}
            <Button
              className="bg-[#9DBAC6] hover:bg-[#8EAEB8] text-white rounded-full px-6"
              onClick={() => navigate("signup")}
            >
              Регистрация
            </Button>

          </div>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#9DBAC6]/20">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Главная</a>
              <button className="mobile-link text-left" onClick={scrollToAbout}>О проекте</button>
              <a href="#monitoring" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Мониторинг</a>
              <a href="#specialists" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Для специалистов</a>
              <a href="#team" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Команда</a>
              <a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Контакты</a>

              <div className="flex flex-col gap-3 pt-4">
                {/* Вход */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full rounded-full">
                      Вход
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-sm">
                    <h2 className="text-xl font-semibold mb-4 text-[#2F4F4F]">Вход</h2>

                    <input
                      className="w-full border rounded-lg p-3 mb-3"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      className="w-full border rounded-lg p-3 mb-4"
                      placeholder="Пароль"
                    />
                    <Button className="w-full bg-[#9DBAC6] text-white rounded-full py-3">
                      Войти
                    </Button>
                  </DialogContent>
                </Dialog>

                {/* Регистрация */}
                <Button
                  className="bg-[#9DBAC6] text-white rounded-full w-full"
                  onClick={() => navigate("signup")}
                >
                  Регистрация
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}