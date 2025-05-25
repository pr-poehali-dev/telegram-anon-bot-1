import { MessageStatus } from "@/types/telegram";

export const getStatusColor = (status: MessageStatus) => {
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

export const getStatusText = (status: MessageStatus) => {
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
