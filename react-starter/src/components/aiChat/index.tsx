import { useTranslation } from "react-i18next";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { useAppStore } from "@/config/store";

export default function AIChat() {
  const { theme } = useAppStore();
  return (
    <>
      <ChatButton />
      {/* 仅在 chatOpen 时挂载窗口 */}
    </>
  );
}