import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import api from "../../../services/api";

interface ImageUploadProps {
  value?: string;
  onChange?: (url: string) => void;
  className?: string;
  placeholder?: string;
  rounded?: boolean;
}

/**
 * 通用图片上传组件
 * 后续接入后端时，直接修改 services/api.ts 的 upload.image 方法即可
 */
export default function ImageUpload({
  value,
  onChange,
  className = "",
  placeholder = "点击或拖拽上传图片",
  rounded = false,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const { url } = await api.upload.image(file);
      onChange?.(url);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
  };

  return (
    <div
      className={`relative overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors cursor-pointer ${
        rounded ? "rounded-full" : "rounded-xl"
      } ${className}`}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      {value ? (
        <img
          src={value}
          alt="upload"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          {uploading ? (
            <div className="text-sm">上传中...</div>
          ) : (
            <>
              <Upload className="w-8 h-8 mb-2" />
              <div className="text-sm">{placeholder}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}