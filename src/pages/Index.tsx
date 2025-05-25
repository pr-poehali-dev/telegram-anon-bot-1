import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 font-rubik">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Добро пожаловать в<span className="text-primary"> Поехали!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Платформа для создания современных веб-приложений с готовыми
            решениями
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-all duration-200 animate-scale-in">
            <CardHeader>
              <div className="p-3 bg-telegram-blue rounded-lg w-fit mb-2">
                <Icon name="Send" className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Телеграм Бот</CardTitle>
              <CardDescription>
                Отправляйте анонимные сообщения через Telegram безопасно и
                просто
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/telegram-bot">
                <Button className="w-full bg-telegram-blue hover:bg-telegram-dark">
                  Запустить бота
                  <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-200 animate-scale-in">
            <CardHeader>
              <div className="p-3 bg-primary rounded-lg w-fit mb-2">
                <Icon name="Zap" className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Быстрая разработка</CardTitle>
              <CardDescription>
                React + TypeScript + Vite для максимальной производительности
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Скоро доступно
                <Icon name="Clock" className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-200 animate-scale-in">
            <CardHeader>
              <div className="p-3 bg-green-500 rounded-lg w-fit mb-2">
                <Icon name="Shield" className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Безопасность</CardTitle>
              <CardDescription>
                Все данные защищены и обрабатываются анонимно
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Узнать больше
                <Icon name="Info" className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-telegram-blue text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-lg opacity-90 mb-6">
                Попробуйте наш телеграм бот для анонимных сообщений прямо сейчас
              </p>
              <Link to="/telegram-bot">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Icon name="Rocket" className="h-5 w-5 mr-2" />
                  Начать использовать
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
