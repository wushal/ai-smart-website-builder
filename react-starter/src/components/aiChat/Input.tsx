import { useState } from "react";

interface Props {
  onSend: (message: string) => void;

  disabled?: boolean;
}

export default function Input({
  onSend,

  disabled,
}: Props) {
  const [value, setValue] = useState("");

  function submit() {
    if (!value.trim()) return;

    onSend(value);

    setValue("");
  }

  return (
    <div
      className="border-t p-3 flex gap-2"
    >
      <input
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
        placeholder="请输入您的问题..."
        className="flex-1 border rounded-xl px-4 py-2outline-none"
      />

      <button
        onClick={submit}
        className="px-4 rounded-xl bg-black text-white"
      >
        发送
      </button>
    </div>
  );
}
