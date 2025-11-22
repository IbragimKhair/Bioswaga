import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Monitoring } from "./components/Monitoring";
import { Specialists } from "./components/Specialists";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SignupPage } from "./components/SignupPage";
import { DiagnosticsPage } from "./components/DiagnosticsPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [testType, setTestType] = useState<string | null>(null);

  // Передаём функцию навигации дочерним компонентам
  const navigate = (
    page: string,
    params?: { testType?: string },
  ) => {
    setCurrentPage(page);
    if (params?.testType) {
      setTestType(params.testType);
    } else {
      setTestType(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Главная страница
  if (currentPage === "home") {
    return (
      <div className="min-h-screen bg-white font-['Inter',sans-serif]">
        <Header navigate={navigate} />
        <main>
          <Hero navigate={navigate} />
          <About />
          <Monitoring navigate={navigate} />
          <Specialists navigate={navigate} />
          <Team />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }

  // Страница регистрации
  if (currentPage === "signup") {
    return (
      <div className="min-h-screen bg-white font-['Inter',sans-serif]">
        <SignupPage navigate={navigate} />
        <Toaster />
      </div>
    );
  }

  // Страница диагностики
  if (currentPage === "diagnostics") {
    return (
      <div className="min-h-screen bg-white font-['Inter',sans-serif]">
        <DiagnosticsPage
          navigate={navigate}
          initialTestType={testType}
        />
        <Toaster />
      </div>
    );
  }

  return null;
}