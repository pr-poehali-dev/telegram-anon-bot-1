import { useState } from "react";
import { Message } from "@/types/telegram";

export const useTelegramMessages = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Привет! Как дела?",
      recipient: "@example_user",
      timestamp: new Date(),
      status: "sent",
    },
  ]);

  const sendMessage = (text: string, recipient: string) => {
    if (!text.trim() || !recipient.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text,
      recipient: recipient.startsWith("@") ? recipient : `@${recipient}`,
      timestamp: new Date(),
      status: "pending",
    };

    setMessages((prev) => [newMessage, ...prev]);

    // Имитация отправки
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "sent" as const } : msg,
        ),
      );
    }, 2000);
  };

  return { messages, sendMessage };
};
