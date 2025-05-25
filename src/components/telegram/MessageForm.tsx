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
import Icon from "@/components/ui/icon";

interface MessageFormProps {
  onSendMessage: (text: string, recipient: string) => void;
}

const MessageForm = ({ onSendMessage }: MessageFormProps) => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSubmit = () => {
    onSendMessage(message, recipient);
    setMessage("");
    setRecipient("");
  };

  return (
    <Card className="animate-scale-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="MessageSquare" className="h-5 w-5 text-telegram-blue" />
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
          onClick={handleSubmit}
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
  );
};

export default MessageForm;
