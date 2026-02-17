"use client";
import { useColumnStore } from "@/store/ColumStore";
import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  onClose: () => void;
};
export function CreateColumn({ onClose }: Props) {
  const addColumn = useColumnStore((state) => state.AddColumn);
  const [title, setTitle] = useState("");
  const isDisabled = !title;
  function handleCreate() {
    if (isDisabled) return;

    addColumn({
      id: crypto.randomUUID(),
      title,
    });

    onClose();
  }
  return (
    <div className="fixed px-4  inset-0 bg-black/50 z-50 flex  items-center justify-center">
      <div className="py-6 w-full max-w-md px-4 bg-white  dark:bg-[#080C16] border-2  border-[#E5E7EB] rounded-2xl dark:border-[#1D283A] flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold text-lg text-black dark:text-white">
            Nova Coluna
          </p>

          <button
            className="text-[#1D283A] cursor-pointer hover:text-red-500 transition"
            onClick={onClose}
          >
            <X size={18} absoluteStrokeWidth />
          </button>
        </div>
        <div className="flex flex-col gap-2 text-black dark:text-white">
          <label htmlFor="taskName" className="text-sm font-bold">
            Nome da coluna
          </label>
          <input
            type="text"
            id="taskName"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nome da coluna…"
            className="dark:bg-[#080C16] bg-white  text-black dark:text-white placeholder:text-slate-400 border-2 border-[#E5E7EB]  dark:border-[#1D283A] rounded-lg px-4 py-2  w-full focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-[#1D283A]"
          />
        </div>

        <button
          onClick={handleCreate}
          disabled={isDisabled}
          className={`py-2 px-4 rounded-lg text-white dark:text-black transition ease duration-300 bg-[#606FF6]  font-bold ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-95 "}`}
        >
          Criar
        </button>
      </div>
    </div>
  );
}
