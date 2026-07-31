import { ChatResponse } from "./types";

export async function sendMessage(
  message: string,
  sessionId?: string,
): Promise<ChatResponse> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, sessionId }),
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
}
