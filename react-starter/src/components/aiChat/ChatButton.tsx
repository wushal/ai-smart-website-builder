import { MessageCircle, X } from "lucide-react";
import { useAppStore } from "@/config/store";

export default function ChatButton() {
  const { chatOpen, setChatOpen, theme } = useAppStore();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setChatOpen(!chatOpen)}
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all z-50 group ${
        chatOpen
          ? "bg-slate-700 hover:bg-slate-800"
          : "bg-gradient-to-br from-blue-500 to-purple-600 hover:scale-110"
      }`}
    >
      {chatOpen ? (
        <X className="w-6 h-6 text-white" />
      ) : (
        <>
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </>
      )}
    </button>
  );
}