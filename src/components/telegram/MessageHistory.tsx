import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Message } from "@/types/telegram";
import { getStatusColor, getStatusText } from "@/utils/telegram";

interface MessageHistoryProps {
  messages: Message[];
}

const MessageHistory = ({ messages }: MessageHistoryProps) => {
  return (
    <Card className="animate-scale-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="History" className="h-5 w-5 text-primary" />
          История отправки
        </CardTitle>
        <CardDescription>Последние отправленные сообщения</CardDescription>
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
  );
};

export default MessageHistory;
