import { useTelegramMessages } from "@/hooks/useTelegramMessages";
import TelegramHeader from "@/components/telegram/TelegramHeader";
import MessageForm from "@/components/telegram/MessageForm";
import MessageHistory from "@/components/telegram/MessageHistory";
import MessageStats from "@/components/telegram/MessageStats";

const TelegramBot = () => {
  const { messages, sendMessage } = useTelegramMessages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-rubik">
      <div className="container mx-auto px-4 py-8">
        <TelegramHeader />

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <MessageForm onSendMessage={sendMessage} />
          <MessageHistory messages={messages} />
        </div>

        <MessageStats messages={messages} />
      </div>
    </div>
  );
};

export default TelegramBot;
