import { useTaskStore } from "@/store/TaskStore";
import { X } from "lucide-react";
import { useState } from "react";
type Props = {
  onClose: () => void;
  columnId: string;
};
export function CreateTaskCard({ onClose, columnId }: Props) {
  const addTask = useTaskStore((state) => state.Addtask);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState<string>("");
  const [priority, setPriority] = useState<
    "Baixa" | "Media" | "Alta" | "Urgente"
  >("Media");

  const isDisabled = !title || !description || !color;
  function handleCreate() {
    if (isDisabled) return;

    addTask({
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      columnId,
      color,
    });

    onClose();
  }
  return (
    <div className="fixed  px-4  inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="py-6 w-full max-w-md px-4 bg-white dark:bg-[#080C16] border-2 border-[#E5E7EB] dark:border-[#1D283A] rounded-2xl flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold text-lg text-black dark:text-white">
            Nova Tarefa
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
            Titulo
          </label>
          <input
            type="text"
            id="taskName"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nome da tarefa..."
            className="bg-white dark:bg-[#080C16] text-black dark:text-white  placeholder:text-slate-400 border-2  border-[#E5E7EB] dark:border-[#1D283A] rounded-lg px-4 py-2  w-full focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-[#1D283A]"
          />
        </div>
        <div className="flex flex-col gap-2 text-black dark:text-white">
          <label htmlFor="TaskDesc" className="text-sm font-bold">
            Descrição
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="TaskDesc"
            placeholder="Descreva a tarefa..."
            className="bg-white dark:bg-[#080C16] h-30 resize-none text-black dark:text-white placeholder:text-slate-400 border-2 border-[#E5E7EB] dark:border-[#1D283A] rounded-lg px-4 py-2  w-full focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-[#1D283A]"
          />
        </div>
        <div className="flex flex-col gap-2 text-black dark:text-white">
          <label htmlFor="priority" className="text-sm font-bold">
            Prioridade
          </label>
          <select
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as any)}
            id="priority"
            className="bg-white dark:bg-[#080C16] text-black dark:text-white border-2 border-[#E5E7EB] dark:border-[#1D283A] rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-[#1D283A]"
          >
            <option value="Baixa">Baixa</option>
            <option value="Media">Média</option>
            <option value="Alta">Alta</option>
            <option value="Urgente">Urgente</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="rounded-full w-8 h-8 focus:ring-2 border-2 border-transparent focus:border-white hover:scale-105 transition ease duration-300 focus:ring-indigo-400 bg-[#5593F7]"
            onClick={() => setColor("#5593F7")}
          ></button>
          <button
            className="rounded-full w-8 h-8 focus:ring-2 border-2 border-transparent focus:border-white hover:scale-105 transition ease duration-300 focus:ring-indigo-400 bg-[#9767E4]"
            onClick={() => setColor("#9767E4")}
          ></button>
          <button
            className="rounded-full w-8 h-8 focus:ring-2 border-2 border-transparent focus:border-white hover:scale-105 transition ease duration-300 focus:ring-indigo-400 bg-[#EE5DA6]"
            onClick={() => setColor("#EE5DA6")}
          ></button>
          <button
            className="rounded-full w-8 h-8 focus:ring-2 border-2 border-transparent focus:border-white hover:scale-105 transition ease duration-300 focus:ring-indigo-400 bg-[#F15B5B]"
            onClick={() => setColor("#F15B5B")}
          ></button>
          <button
            className="rounded-full w-8 h-8 focus:ring-2 border-2 border-transparent focus:border-white hover:scale-105 transition ease duration-300 focus:ring-indigo-400 bg-[#FA832E]"
            onClick={() => setColor("#FA832E")}
          ></button>
          <button
            className="rounded-full w-8 h-8 focus:ring-2 border-2 border-transparent focus:border-white hover:scale-105 transition ease duration-300 focus:ring-indigo-400 bg-[#F6A823]"
            onClick={() => setColor("#F6A823")}
          ></button>
          <button
            className="rounded-full w-8 h-8 focus:ring-2 border-2 border-transparent focus:border-white hover:scale-105 transition ease duration-300 focus:ring-indigo-400 bg-[#22C35D]"
            onClick={() => setColor("#22C35D")}
          ></button>
          <button
            className="rounded-full w-8 h-8 focus:ring-2 border-2 border-transparent focus:border-white hover:scale-105 transition ease duration-300 focus:ring-indigo-400 bg-[#18DCC5]"
            onClick={() => setColor("#18DCC5")}
          ></button>
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
