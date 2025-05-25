export interface Message {
  id: number;
  text: string;
  recipient: string;
  timestamp: Date;
  status: "sent" | "pending" | "failed";
}

export type MessageStatus = Message["status"];
