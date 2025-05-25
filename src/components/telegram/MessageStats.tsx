import { Card } from "@/components/ui/card";
import { Message } from "@/types/telegram";

interface MessageStatsProps {
  messages: Message[];
}

const MessageStats = ({ messages }: MessageStatsProps) => {
  return (
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
  );
};

export default MessageStats;
