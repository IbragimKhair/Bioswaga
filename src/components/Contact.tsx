import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверка заполненности полей
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    // Демо-отправка
    toast.success("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    
    // Очистка формы
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#F3E6CD]/50 py-12 md:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-[#2F4F4F] mb-3 md:mb-4" style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}>
            Свяжитесь с нами
          </h2>
          <p className="text-[#5A6E73]" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
            Есть вопросы или предложения? Мы всегда рады помочь!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Левая колонка - контактная информация */}
          <div className="space-y-4 md:space-y-6">
            <Card className="p-4 md:p-6 bg-white border-[#9DBAC6]/20 rounded-xl md:rounded-2xl flex items-start gap-3 md:gap-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9DBAC6]/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" />
              </div>
              <div>
                <h3 className="text-[#2F4F4F] mb-1">Email</h3>
                <p className="text-[#5A6E73] text-sm md:text-base">bioswaga@email.com</p>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-white border-[#9DBAC6]/20 rounded-xl md:rounded-2xl flex items-start gap-3 md:gap-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9DBAC6]/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" />
              </div>
              <div>
                <h3 className="text-[#2F4F4F] mb-1">Телефон</h3>
                <p className="text-[#5A6E73] text-sm md:text-base">+7 (999) 999-99-99</p>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-white border-[#9DBAC6]/20 rounded-xl md:rounded-2xl flex items-start gap-3 md:gap-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9DBAC6]/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" />
              </div>
              <div>
                <h3 className="text-[#2F4F4F] mb-1">Адрес</h3>
                <p className="text-[#5A6E73] text-sm md:text-base">-------1</p>
              </div>
            </Card>

            <div className="pt-4 md:pt-6">
              <p className="text-[#2F4F4F] mb-3 md:mb-4">Мы в социальных сетях:</p>
              <div className="flex gap-2 md:gap-3">
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-[#9DBAC6]/10 border border-[#9DBAC6]/20 rounded-lg md:rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-[#9DBAC6]/10 border border-[#9DBAC6]/20 rounded-lg md:rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-[#9DBAC6]/10 border border-[#9DBAC6]/20 rounded-lg md:rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9DBAC6]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Правая колонка - форма обратной связи */}
          <Card className="p-6 md:p-8 bg-white border-[#9DBAC6]/20 rounded-2xl md:rounded-3xl shadow-xl">
            <h3 className="text-[#2F4F4F] mb-4 md:mb-6">
              Напишите нам
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="text-[#2F4F4F] block mb-2">Имя</label>
                <Input 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя" 
                  className="bg-[#F3E6CD]/30 border-[#9DBAC6]/30 rounded-xl focus:border-[#9DBAC6] transition-colors"
                />
              </div>
              <div>
                <label className="text-[#2F4F4F] block mb-2">Email</label>
                <Input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com" 
                  className="bg-[#F3E6CD]/30 border-[#9DBAC6]/30 rounded-xl focus:border-[#9DBAC6] transition-colors"
                />
              </div>
              <div>
                <label className="text-[#2F4F4F] block mb-2">Сообщение</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ваше сообщение..." 
                  rows={4}
                  className="bg-[#F3E6CD]/30 border-[#9DBAC6]/30 rounded-xl focus:border-[#9DBAC6] transition-colors resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#9DBAC6] hover:bg-[#9DBAC6]/90 text-white rounded-xl py-5 md:py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}