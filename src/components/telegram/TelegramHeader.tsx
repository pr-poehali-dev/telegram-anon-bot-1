import Icon from "@/components/ui/icon";

const TelegramHeader = () => {
  return (
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
  );
};

export default TelegramHeader;
