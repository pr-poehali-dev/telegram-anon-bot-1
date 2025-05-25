import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  recipient: string;
  timestamp: Date;
  status: "sent" | "pending" | "failed";
}

const TelegramBot = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Привет! Как дела?",
      recipient: "@example_user",
      timestamp: new Date(),
      status: "sent",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim() || !recipient.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: message,
      recipient: recipient.startsWith("@") ? recipient : `@${recipient}`,
      timestamp: new Date(),
      status: "pending",
    };

    setMessages((prev) => [newMessage, ...prev]);
    setMessage("");
    setRecipient("");

    // Имитация отправки
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "sent" as const } : msg,
        ),
      );
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "sent":
        return "Отправлено";
      case "pending":
        return "Отправка...";
      case "failed":
        return "Ошибка";
      default:
        return "Неизвестно";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-rubik">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-telegram-blue rounded-2xl">
              <Icon name="Send" className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Анонимный Телеграм Бот
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Отправляйте анонимные сообщения через Telegram безопасно и просто
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Форма отправки */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  name="MessageSquare"
                  className="h-5 w-5 text-telegram-blue"
                />
                Отправить сообщение
              </CardTitle>
              <CardDescription>
                Заполните форму для отправки анонимного сообщения
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="recipient">Получатель</Label>
                <Input
                  id="recipient"
                  placeholder="@username или user_id"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Введите ваше анонимное сообщение..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Максимум 4096 символов</span>
                  <span>{message.length}/4096</span>
                </div>
              </div>

              <Button
                onClick={handleSendMessage}
                disabled={!message.trim() || !recipient.trim()}
                className="w-full bg-telegram-blue hover:bg-telegram-dark transition-all duration-200"
              >
                <Icon name="Send" className="h-4 w-4 mr-2" />
                Отправить анонимно
              </Button>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start gap-2">
                  <Icon name="Info" className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Важно:</p>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Сообщения отправляются полностью анонимно</li>
                      <li>• Получатель не увидит ваши данные</li>
                      <li>• Соблюдайте правила приличия</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* История сообщений */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="History" className="h-5 w-5 text-primary" />
                История отправки
              </CardTitle>
              <CardDescription>
                Последние отправленные сообщения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">
                          {msg.recipient}
                        </span>
                        <Badge className={getStatusColor(msg.status)}>
                          {getStatusText(msg.status)}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">
                        {msg.timestamp.toLocaleTimeString("ru-RU", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                ))}

                {messages.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Icon
                      name="MessageSquare"
                      className="h-12 w-12 mx-auto mb-2 opacity-50"
                    />
                    <p>Пока нет отправленных сообщений</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-telegram-blue mb-1">
              {messages.filter((m) => m.status === "sent").length}
            </div>
            <div className="text-sm text-gray-600">Успешно отправлено</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-1">
              {messages.filter((m) => m.status === "pending").length}
            </div>
            <div className="text-sm text-gray-600">В очереди</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Анонимность</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TelegramBot;
