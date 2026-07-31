import { ChatMessage } from "./types";

interface Props {
  message: ChatMessage;
}

export default function Message({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${isUser ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`}
      >
        {message.content}
      </div>
    </div>
  );
}
