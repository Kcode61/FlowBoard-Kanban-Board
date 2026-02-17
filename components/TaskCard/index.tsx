import { Task } from "@/store/TaskStore";
import { Trash2 } from "lucide-react";
import { Draggable } from "@hello-pangea/dnd";
type Props = {
  task: Task;
  removeTask: (id: string) => void;
  index: number;
};
export function TaskCard({ task, removeTask, index }: Props) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            borderLeftColor: task.color,
          }}
          className="px-4 py-3 group  hover:scale-95 transition ease duration-300 relative flex flex-col gap-3 border-[#E5E7EB] bg-gray-100 dark:bg-[#0B111E] border-y border-r border-l-4 dark:border-[#1D283A]  rounded-xl rounded-l-md"
        >
          <div>
            <p className="font-bold text-sm text-black dark:text-white mb-1">
              {task.title}
            </p>
            <p className="text-xs text-zinc-400 dark:text-slate-400">
              {task.description}
            </p>
          </div>
          <span
            className={` py-1  px-2 self-start rounded-full border text-xs font-bold 
        ${
          task.priority === "Baixa"
            ? "text-green-500 bg-green-500/10 border-green-500/50"
            : task.priority === "Media"
              ? "text-yellow-500 bg-yellow-500/10 border-yellow-500/50"
              : task.priority === "Alta"
                ? "text-orange-500 bg-orange-500/10 border-orange-500/50"
                : "text-red-500 bg-red-500/10 border-red-500/50"
        }`}
          >
            {task.priority}
          </span>

          <button
            onClick={() => removeTask(task.id)}
            className="absolute bottom-2  right-2 opacity-0 scale-95 p-2 translate-y-2 group-hover:translate-y-0 transition-all ease duration-300 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-[#1D283A] group-hover:opacity-100 group-hover:text-red-400"
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}
    </Draggable>
  );
}
